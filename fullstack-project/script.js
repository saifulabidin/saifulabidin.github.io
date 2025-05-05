// Fullstack Projects Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for project items
    initProjectAnimations();
    
    // Initialize diagram animations
    initDiagramAnimations();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Initialize project filtering
    initProjectFilters();
});

// Project item animations
function initProjectAnimations() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach((project, index) => {
        // Add delay to stagger animations
        project.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover effects
        project.addEventListener('mouseenter', function() {
            const img = this.querySelector('.project-img img');
            const info = this.querySelector('.project-info');
            
            if (img) img.style.transform = 'scale(1.05)';
            if (info) info.style.backgroundColor = 'rgba(0, 102, 204, 0.05)';
        });
        
        project.addEventListener('mouseleave', function() {
            const img = this.querySelector('.project-img img');
            const info = this.querySelector('.project-info');
            
            if (img) img.style.transform = 'scale(1)';
            if (info) info.style.backgroundColor = '';
        });
    });
}

// Architecture diagram animations
function initDiagramAnimations() {
    const diagramComponents = document.querySelectorAll('.component');
    const diagramLayers = document.querySelectorAll('.diagram-layer');
    
    // Add entrance animations with staggered delay
    diagramComponents.forEach((component, index) => {
        component.style.opacity = '0';
        component.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            component.style.transition = 'all 0.5s ease';
            component.style.opacity = '1';
            component.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
    
    // Add hover effects to diagram layers
    diagramLayers.forEach(layer => {
        layer.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        });
        
        layer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// Mobile navigation functionality
function initMobileNav() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
        
        // Close mobile menu when clicking a link
        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                const bars = mobileMenuBtn.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('active'));
            });
        });
    }
}

// Scroll reveal animations
function initScrollReveal() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS class for animations
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .process-step {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .process-step.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(step);
    });
}

// Project filtering functionality
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterBtns.length || !projectCards.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                // Get category attribute
                const categories = card.getAttribute('data-category').split(' ');
                
                // Show/hide based on filter
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Fade in elements on scroll
window.addEventListener('scroll', function() {
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});