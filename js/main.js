// =======================================================================
//  Main JavaScript Functionality
// =======================================================================

document.addEventListener('DOMContentLoaded', () => {
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

    // Initialize the typing effect
    initTypingEffect(typingText, ['Backend Developer', 'Frontend Developer', 'Full-Stack Developer']);

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Scroll event listener
    window.addEventListener('scroll', () => {
        // Header shadow on scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show/hide scroll to top button
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }

        // Activate menu item based on scroll position
        activateMenuOnScroll();

        // Animate elements when in viewport
        animateOnScroll();

        // Animate skill bars when in viewport
        animateSkillBars();
        
        // Animate tech items when in viewport
        animateTechItems();
    });

    // Scroll to top button functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize certificates slider
    initCertificatesSlider();

    // Initialize contact form
    initContactForm();

    // Add ripple effect to buttons
    initRippleEffect();

    // Trigger initial animations
    setTimeout(() => {
        animateOnScroll();
        animateSkillBars();
    }, 500);
});

// Function to initialize typing effect
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
            typingSpeed = 1500; // Pause before deleting
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentStringIndex = (currentStringIndex + 1) % strings.length;
            typingSpeed = 500; // Pause before typing next string
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing
    setTimeout(type, 1000);
}

// Function to activate menu item based on scroll position
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

// Function to animate elements when in viewport
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

// Function to animate skill bars when in viewport
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

// Function to animate tech stack icons when in viewport
function animateTechItems() {
    const techItems = document.querySelectorAll('.tech-item');
    const windowHeight = window.innerHeight;
    
    techItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const itemVisible = 150;
        
        // Reset animation when item is no longer in view
        if (itemPosition > windowHeight) {
            item.style.opacity = '0';
        }
        
        // Animate when item comes into view
        if (itemPosition < windowHeight - itemVisible) {
            item.style.opacity = '1';
        }
    });
}

// Function to initialize certificates slider
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
    
    // Helper function to check if an element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
}

// Function to initialize contact form
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
        
        // You would typically send this data to a server here
        // For this example, we'll just simulate a successful submission
        
        // Show success message
        showFormMessage('Your message has been sent successfully! I will get back to you soon.', 'success');
        
        // Reset form
        form.reset();
    });
    
    function showFormMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = type;
        
        setTimeout(() => {
            formMessage.className = '';
        }, 5000);
    }
}

// Function to add ripple effect to buttons
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

// Smooth scrolling for navigation links
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