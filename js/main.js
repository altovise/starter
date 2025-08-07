// Allie Curtis Portfolio - Main JavaScript File
// ==============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Allie Curtis Portfolio - Coming Soon page loaded!');
    
    // Initialize all interactive elements
    initStatusBadge();
    initProfileImage();
    initPageAnimations();
});

/**
 * Initialize profile image interactions
 */
function initProfileImage() {
    const profileImage = document.querySelector('.profile-image');
    
    if (profileImage) {
        // Fun click animation
        profileImage.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });

        // Subtle hover effect (in addition to CSS)
        profileImage.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    }
}

/**
 * Initialize page-wide animations and effects
 */
function initPageAnimations() {
    // Add a subtle fade-in for the entire content wrapper
    const contentWrapper = document.querySelector('.content-wrapper');
    
    if (contentWrapper) {
        // Ensure the animation plays smoothly
        contentWrapper.style.opacity = '0';
        contentWrapper.style.transform = 'translateY(30px)';
        
        // Trigger animation after a brief delay
        setTimeout(() => {
            contentWrapper.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            contentWrapper.style.opacity = '1';
            contentWrapper.style.transform = 'translateY(0)';
        }, 100);
    }
}

/**
 * Utility function for smooth scrolling (for future sections)
 * @param {string} target - CSS selector for scroll target
 */
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Future function for form handling (when contact section is added)
 * @param {Event} event - Form submission event
 */
function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Form submission handled - ready for future implementation');
    // This will be expanded when you add contact forms
}

// Export functions for potential future module use
window.PortfolioJS = {
    smoothScrollTo,
    handleFormSubmit,
    initProfileImage,
    initPageAnimations
};