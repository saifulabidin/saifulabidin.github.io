// =======================================================================
//  Main JavaScript Functionality
// =======================================================================

// Import utility functions
import { debounce, isElementInViewport, resetAnimation } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi service worker, loader, menu, animasi, slider, dsb.
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/js/service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed: ', error);
                });
        });
    }

    // Remove loader when page is loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);

    // Variables
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('#mobile-nav');
    const navLinks = document.querySelectorAll('#desktop-nav ul li a, #mobile-nav ul li a');
    const scrollTopBtn = document.querySelector('#scroll-top-btn');
    const sections = document.querySelectorAll('section');
    const typingText = document.querySelector('.typing-text');
    const progressBars = document.querySelectorAll('.progress');

    // Efek typing pada hero section
    initTypingEffect(typingText, ['I Know That I Know Nothing', 'Just Freaking Man In The Middle', 'Junior Web Developer']);

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Tutup mobile menu saat klik link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Variabel untuk header hide on scroll
    let lastScrollTop = 0;
    const scrollThreshold = 50;

    // Event scroll utama
    window.addEventListener('scroll', debounce(() => {
        const currentScrollTop = window.scrollY;

        // Efek shadow header
        if (currentScrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Sembunyikan header saat scroll down, tampilkan saat scroll up
        if (currentScrollTop > lastScrollTop && currentScrollTop > 150) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

        // Tampilkan tombol scroll to top
        if (currentScrollTop > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }

        // Highlight menu aktif, animasi, dsb.
        activateMenuOnScroll();
        animateOnScroll();
        animateSkillBars();
        animateTechItems();
    }, 50));

    // Scroll to top
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Inisialisasi slider sertifikat
    initCertificatesSlider();

    // Inisialisasi form kontak
    initContactForm();

    // Efek ripple pada tombol
    initRippleEffect();

    // Lazy load gambar
    initLazyLoading();

    // Trigger animasi awal
    setTimeout(() => {
        animateOnScroll();
        animateSkillBars();
    }, 500);
});

// ===================== DYNAMIC FEATURED PROJECTS =====================
const featuredProjects = [
  {
    type: 'Fullstack Project',
    title: 'Fake Pinterest',
    description: 'A platform for users to discover and share their favorite pins and ideas.',
    image: 'assets/images/fullstack/fake-pinterest.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://fake-pinterest.vercel.app/',
    code: 'https://github.com/saifulabidin/fake-pinterest',
    seeMore: 'fullstack-project/index.html'
  },
  {
    type: 'Frontend Project',
    title: '25+5 Clock',
    description: 'A time management tool that uses the Pomodoro technique to enhance productivity.',
    image: 'frontend-project/assets/images/25-5-clock.png',
    tech: ['React', 'HTML/CSS/JavaScript', 'Audio API', 'Hooks'],
    demo: 'frontend-project/25-5-clock/index.html',
    code: 'https://codepen.io/saifulabidin/pen/myyLVaw',
    seeMore: 'frontend-project/index.html'
  }
];

function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects');
  if (!container) {
    console.error('Featured projects container not found');
    return;
  }
  
  container.innerHTML = featuredProjects.map(project => `
    <div class="featured-project fade-in">
      <div class="featured-project-img">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="featured-project-content">
        <span class="project-type">${project.type}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="featured-project-tech">
          ${project.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="featured-project-links">
          <a href="${project.demo}" class="btn small-btn primary-btn" target="_blank"><i class="fas fa-link"></i> Demo</a>
          <a href="${project.code}" class="btn small-btn secondary-btn" target="_blank">
            <i class="${project.type === 'Frontend Project' || project.code.includes('codepen.io') ? 'fab fa-codepen' : 'fab fa-github'}"></i> Code
          </a>
          <a href="${project.seeMore}" class="btn small-btn" target="_blank"><i class="fas fa-arrow-right"></i> See More</a>
        </div>
      </div>
    </div>
  `).join('');
  
  console.log('Featured projects rendered:', featuredProjects.length);
}

// Make sure this function runs when the page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, rendering featured projects...');
  renderFeaturedProjects();
});

// Keep the original event listener as a fallback
document.addEventListener('DOMContentLoaded', renderFeaturedProjects);

// Efek typing pada hero section
function initTypingEffect(element, strings) {
    if (!element) return;

    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentString = strings[currentStringIndex];

        if (isDeleting) {
            element.textContent = currentString.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            element.textContent = currentString.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && currentCharIndex === currentString.length) {
            isDeleting = true;
            typingSpeed = 1500; // jeda sebelum menghapus
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentStringIndex = (currentStringIndex + 1) % strings.length;
            typingSpeed = 500; // jeda sebelum mengetik string berikutnya
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

// Highlight menu aktif berdasarkan posisi scroll
function activateMenuOnScroll() {
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('#desktop-nav ul li a, #mobile-nav ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Animasi elemen saat masuk viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right, .scale-in, .timeline-item');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementPosition < windowHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Animasi skill bar saat masuk viewport
function animateSkillBars() {
    const TechStack = document.querySelectorAll('.skill-item');
    const windowHeight = window.innerHeight;

    TechStack.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const skillVisible = 150;

        if (skillPosition < windowHeight - skillVisible) {
            const progressBar = skill.querySelector('.progress');
            const percent = progressBar.getAttribute('data-percent');
            progressBar.style.width = percent;
        }
    });
}

// Animasi tech stack icon saat masuk viewport
function animateTechItems() {
    const techItems = document.querySelectorAll('.tech-item');
    const windowHeight = window.innerHeight;

    techItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const itemVisible = 150;

        if (itemPosition > windowHeight) {
            item.style.opacity = '0';
        }

        if (itemPosition < windowHeight - itemVisible) {
            item.style.opacity = '1';
        }
    });
}

// Inisialisasi slider sertifikat
function initCertificatesSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    if (!sliderTrack || sliderItems.length === 0) return;

    let currentIndex = 0;
    const itemCount = sliderItems.length;

    // Create dots
    for (let i = 0; i < itemCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }

    // Clone first and last items for infinite loop effect
    const firstClone = sliderItems[0].cloneNode(true);
    const lastClone = sliderItems[itemCount - 1].cloneNode(true);

    sliderTrack.appendChild(firstClone);
    sliderTrack.insertBefore(lastClone, sliderTrack.firstChild);

    // Adjust position to hide clones initially
    sliderTrack.style.transform = `translateX(-100%)`;
    currentIndex = 0;

    // Event listeners for previous and next buttons
    prevBtn.addEventListener('click', () => {
        if (currentIndex <= 0) {
            // Jump to the last real slide (hidden from user)
            sliderTrack.style.transition = 'none';
            currentIndex = itemCount - 1;
            sliderTrack.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

            // Force reflow
            void sliderTrack.offsetWidth;

            // Animate to the visible last slide
            sliderTrack.style.transition = 'transform 0.5s ease';
            currentIndex--;
            updateSlider();
        } else {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex >= itemCount - 1) {
            // Jump to the first real slide (hidden from user)
            sliderTrack.style.transition = 'none';
            currentIndex = 0;
            sliderTrack.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

            // Force reflow
            void sliderTrack.offsetWidth;

            // Animate to the visible first slide
            sliderTrack.style.transition = 'transform 0.5s ease';
            currentIndex++;
            updateSlider();
        } else {
            currentIndex++;
            updateSlider();
        }
    });

    // Handle transition end for infinite loop
    sliderTrack.addEventListener('transitionend', () => {
        // If we've reached the clone slides, jump to the real slides without animation
        if (currentIndex === -1) {
            sliderTrack.style.transition = 'none';
            currentIndex = itemCount - 1;
            sliderTrack.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
        } else if (currentIndex === itemCount) {
            sliderTrack.style.transition = 'none';
            currentIndex = 0;
            sliderTrack.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
        }
    });

    // Touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    const sliderContainer = document.querySelector('.slider-container');

    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    sliderContainer.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
        const diff = touchStartX - touchEndX;
        const sensitivity = 30; // Minimum swipe distance

        // Prevent default only when horizontal swipe is detected
        if (Math.abs(diff) > sensitivity) {
            e.preventDefault();
        }
    }, { passive: false });

    sliderContainer.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        const sensitivity = 50; // Minimum swipe distance

        if (diff > sensitivity) {
            // Swipe left, go to next slide
            if (currentIndex < itemCount - 1) {
                currentIndex++;
                updateSlider();
            } else {
                // At last slide, loop to first
                currentIndex = 0;
                updateSlider();
            }
        } else if (diff < -sensitivity) {
            // Swipe right, go to previous slide
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            } else {
                // At first slide, loop to last
                currentIndex = itemCount - 1;
                updateSlider();
            }
        }
    }, { passive: true });

    // Function to update slider position
    function updateSlider() {
        sliderTrack.style.transition = 'transform 0.5s ease';
        sliderTrack.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

        // Update active dot
        document.querySelectorAll('.slider-dots .dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Auto slide functionality
    let autoSlideInterval;

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            if (currentIndex >= itemCount - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateSlider();
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Start and stop auto slide on hover
    const certificatesSection = document.querySelector('#certificates');

    certificatesSection.addEventListener('mouseenter', stopAutoSlide);
    certificatesSection.addEventListener('mouseleave', startAutoSlide);

    // Start auto slide initially
    startAutoSlide();

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isElementInViewport(certificatesSection)) {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
}

// Inisialisasi form kontak dengan EmailJS
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const subject = form.querySelector('#subject').value;
        const message = form.querySelector('#message').value;

        // Validate form data
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        // Show loading message
        showFormMessage('Sending message...', 'sending');

        // Send using EmailJS
        emailjs.send('service_portfolio', 'template_contact_form', {
            from_name: name,
            reply_to: email,
            subject: subject,
            message: message
        }, 'gEhhhkDKP5nkvFiXC')
        .then(() => {
            // Show success message
            showFormMessage('Your message has been sent successfully! I will get back to you soon.', 'success');

            // Reset form
            form.reset();
        })
        .catch(error => {
            console.error('EmailJS error:', error);
            showFormMessage('There was an error sending your message. Please try again or contact me directly via email.', 'error');
        });
    });

    function showFormMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = type;

        if (type !== 'sending') {
            setTimeout(() => {
                formMessage.className = '';
            }, 5000);
        }
    }
}

// Efek ripple pada tombol
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.classList.add('ripple-effect');

        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Lazy load gambar (fallback untuk browser lama)
function initLazyLoading() {
    // Native lazy loading is already handled by the 'loading="lazy"' attribute in the HTML
    // This function should only provide fallback for browsers that don't support native lazy loading

    // Check if browser supports native lazy loading
    if (!('loading' in HTMLImageElement.prototype)) {
        // If native lazy loading isn't supported, use Intersection Observer as fallback
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        // Only set data-src if it exists, otherwise keep the original src
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for older browsers without IntersectionObserver
            let active = false;

            const lazyLoad = function() {
                if (active === false) {
                    active = true;

                    setTimeout(() => {
                        lazyImages.forEach(img => {
                            if ((img.getBoundingClientRect().top <= window.innerHeight && 
                                 img.getBoundingClientRect().bottom >= 0) && 
                                getComputedStyle(img).display !== 'none') {

                                if (img.dataset.src) {
                                    img.src = img.dataset.src;
                                }

                                if (lazyImages.length === 0) {
                                    document.removeEventListener('scroll', lazyLoad);
                                    window.removeEventListener('resize', lazyLoad);
                                    window.removeEventListener('orientationChange', lazyLoad);
                                }
                            }
                        });

                        active = false;
                    }, 200);
                }
            };

            document.addEventListener('scroll', lazyLoad);
            window.addEventListener('resize', lazyLoad);
            window.addEventListener('orientationChange', lazyLoad);
            lazyLoad();
        }
    }
    // No need to do anything for browsers that support native lazy loading
}

// Smooth scrolling untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});