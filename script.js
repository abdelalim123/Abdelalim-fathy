// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
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

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            document.querySelectorAll('.stat-number').forEach(element => {
                const target = parseInt(element.getAttribute('data-target'));
                animateCounter(element, target);
            });
            statsAnimated = true;
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Mouse effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const blobs = document.querySelectorAll('.gradient-blob');
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;

        blobs.forEach((blob, index) => {
            const strength = (index + 1) * 5;
            blob.style.transform = `translate(${(xPercent - 50) * strength * 0.1}px, ${(yPercent - 50) * strength * 0.1}px)`;
        });
    });
}

// Button hover effects
const buttons = document.querySelectorAll('.btn, .nav-cta, .service-link');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Navigation scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Portfolio item hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'all 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Service item hover with icon animation
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    const number = item.querySelector('.service-number');
    
    item.addEventListener('mouseenter', function() {
        number.style.transform = 'scale(1.1) rotate(10deg)';
        number.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        number.style.transform = 'scale(1) rotate(0)';
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const blobs = document.querySelectorAll('.gradient-blob');
    const scrollPosition = window.scrollY;
    
    blobs.forEach((blob, index) => {
        blob.style.transform = `translateY(${scrollPosition * (0.3 + index * 0.1)}px)`;
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('AISSA Landing Page Loaded - Modern Animations Active ✨');
    
    // Add subtle fade-in to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
