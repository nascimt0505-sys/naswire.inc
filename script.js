// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Animated counter for statistics
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => observer.observe(stat));
    
    // Animate service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual API call)
        await simulateFormSubmission(formData);
        
        // Show success message
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you! We\'ll get back to you within 24 hours.';
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
        
    } catch (error) {
        // Show error message
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Oops! Something went wrong. Please try again or call us directly.';
    } finally {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Simulate form submission (replace with actual backend integration)
function simulateFormSubmission(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Log form data to console (for demonstration)
            console.log('Form submitted with data:', formData);
            
            // Simulate success
            resolve({ success: true });
            
            // To simulate error, uncomment:
            // reject(new Error('Submission failed'));
        }, 1500);
    });
}

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add real-time email validation
document.getElementById('email').addEventListener('blur', function() {
    if (this.value && !isValidEmail(this.value)) {
        this.style.borderColor = '#ef4444';
        if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('error-message')) {
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.color = '#ef4444';
            errorMsg.style.fontSize = '0.875rem';
            errorMsg.style.marginTop = '0.25rem';
            errorMsg.textContent = 'Please enter a valid email address';
            this.parentElement.appendChild(errorMsg);
        }
    } else {
        this.style.borderColor = '';
        const errorMsg = this.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth reveal animation to sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(section);
});

// CTA Button click handler
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle phone number formatting (optional)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        
        // Format as (XXX) XXX-XXXX
        if (value.length >= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        } else if (value.length >= 3) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        }
        
        e.target.value = value;
    });
}

// Add cursor follow effect (optional enhancement)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    display: none;
`;

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Scale cursor on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-card');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Add performance monitoring
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // Log performance metrics (can be sent to analytics)
            console.log(`${entry.name}: ${entry.duration}ms`);
        }
    });
    
    perfObserver.observe({ entryTypes: ['navigation', 'paint'] });
}

// Service Worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}

// Team Bio Modal Functions
const bioData = {
    pedro: {
        name: "Pedro Nascimento",
        title: "Company Owner & Licensed Electrician",
        bio: `Pedro Nascimento founded NASWIRE in 2007 with a vision to provide exceptional electrical services to the Greater Toronto Area. With over 30 years of experience in the electrical industry, Pedro has built a reputation for quality workmanship, reliability, and customer satisfaction.

As a licensed Master Electrician, Pedro brings extensive expertise in both residential and commercial electrical systems. His commitment to staying current with the latest electrical codes and technologies ensures that every project meets the highest safety standards.

Pedro's hands-on approach and dedication to excellence have been the foundation of NASWIRE's success, completing over 2,000 projects throughout his career. He takes pride in building lasting relationships with clients and delivering solutions that exceed expectations.`
    },
    marc: {
        name: "Marc Tucci",
        title: "Licensed Electrician",
        bio: `Marc Tucci is a skilled licensed electrician who brings precision, professionalism, and extensive technical knowledge to every project at NASWIRE. With years of experience in residential and commercial electrical work, Marc is known for his meticulous attention to detail and problem-solving abilities.

Marc specializes in complex electrical installations, troubleshooting, and system upgrades. His expertise spans from simple repairs to intricate commercial wiring projects, always ensuring code compliance and optimal performance.

Clients appreciate Marc's clear communication, efficient work ethic, and commitment to delivering high-quality results. He approaches each project with the same level of care and professionalism, whether it's a small repair or a major installation.`
    }
};

function openBioModal(person) {
    const modal = document.getElementById('bioModal');
    const bioContent = document.getElementById('bioContent');
    const data = bioData[person];
    
    if (data) {
        bioContent.innerHTML = `
            <h2>${data.name}</h2>
            <h3>${data.title}</h3>
            ${data.bio.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBioModal() {
    const modal = document.getElementById('bioModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('bioModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'bioModal') {
        closeBioModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeBioModal();
    }
});

console.log('NASWIRE website loaded successfully! 🚀');
