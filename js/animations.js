// =======================================================================
//  Animation Effects
// =======================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations when DOM is loaded
    initParallaxEffect();
    initTextAnimation();
    initCountUpAnimation();
    initScrollReveal();
    
    // Trigger animations when elements come into view
    window.addEventListener('scroll', () => {
        initScrollReveal();
    });
});

// Function for parallax scrolling effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        // Parallax scrolling for home section background
        const homeSection = document.querySelector('#home');
        if (homeSection) {
            const scrollPosition = window.pageYOffset;
            homeSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
        
        // Parallax effect for profile image
        const profileImage = document.querySelector('.profile-frame');
        if (profileImage) {
            const scrollPosition = window.pageYOffset;
            const parallaxValue = scrollPosition * 0.05;
            
            if (scrollPosition < 600) {
                profileImage.style.transform = `translateY(${parallaxValue}px) scale(${1 - parallaxValue / 200})`;
            }
        }
    });
}

// Function for text animation with advanced effects
function initTextAnimation() {
    // Split text into spans for letter-by-letter animation
    const animatedTexts = document.querySelectorAll('.split-text');
    
    animatedTexts.forEach(text => {
        const content = text.textContent;
        const letters = content.split('');
        
        text.textContent = '';
        
        letters.forEach((letter, i) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`;
            text.appendChild(span);
        });
    });
    
    // Animated gradient text effect
    const gradientTexts = document.querySelectorAll('.gradient-text');
    
    gradientTexts.forEach(text => {
        text.style.backgroundImage = 'linear-gradient(45deg, var(--primary-color), var(--primary-light), var(--primary-dark))';
        text.style.backgroundSize = '200% auto';
        text.style.color = 'transparent';
        text.style.backgroundClip = 'text';
        text.style.webkitBackgroundClip = 'text';
        
        // Animate the gradient
        setInterval(() => {
            text.style.backgroundPosition = text.style.backgroundPosition === '0% center' ? 
                '100% center' : '0% center';
        }, 3000);
    });
}

// Function for number counting animation
function initCountUpAnimation() {
    const countElements = document.querySelectorAll('.count-up');
    
    function animateCount(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // Update every 16ms
        
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    countElements.forEach(element => {
        observer.observe(element);
    });
}

// Function for scroll reveal animations
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            const delay = element.getAttribute('data-delay') || 0;
            
            setTimeout(() => {
                element.classList.add('active');
            }, delay);
        }
    });
}

// Interactive hover effects for project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('.project-img img');
            const info = this.querySelector('.project-info');
            
            img.style.transform = 'scale(1.1)';
            info.style.backgroundColor = 'rgba(0, 102, 204, 0.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('.project-img img');
            const info = this.querySelector('.project-info');
            
            img.style.transform = 'scale(1)';
            info.style.backgroundColor = '';
        });
    });
    
    // 3D tilt effect for cards
    const cards = document.querySelectorAll('.tilt-effect');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const tiltX = (x - centerX) / 10;
            const tiltY = (centerY - y) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});

// Animated background particles
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('#home');
    
    if (homeSection) {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        homeSection.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation delay
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            // Random animation duration
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
});

// Page transition effects
function initPageTransitions() {
    const transitionElement = document.createElement('div');
    transitionElement.className = 'page-transition';
    document.body.appendChild(transitionElement);
    
    document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').charAt(0) !== '#') {
                e.preventDefault();
                
                const href = this.getAttribute('href');
                
                transitionElement.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
    
    window.addEventListener('pageshow', function() {
        transitionElement.classList.remove('active');
    });
}

// Initialize page transitions
document.addEventListener('DOMContentLoaded', initPageTransitions);

// Cursor effect (custom cursor)
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    const cursorFill = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorFill.className = 'cursor-fill';
    
    cursor.appendChild(cursorFill);
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    // Scale effect on interactive elements
    document.querySelectorAll('a, button, .btn, .project-item, .social-icon').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-active');
            cursorFill.classList.add('fill-active');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-active');
            cursorFill.classList.remove('fill-active');
        });
    });
});