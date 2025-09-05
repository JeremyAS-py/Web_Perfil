// Smooth scrolling for internal links
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

// Add click analytics (optional)
document.querySelectorAll('.social-link, .project-title a, .github-link').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Link clicked:', this.href || this.querySelector('a')?.href);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hero-section, .technologies-section, .projects-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});