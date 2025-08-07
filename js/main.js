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

// BUTTONS
// ==============================================

/**
 * Initialize square button interactions
 * Add this function call to your DOMContentLoaded event listener
 */
function initSquareButtons() {
    const buttons = document.querySelectorAll('.square-button');
    
    buttons.forEach(button => {
        // Enhanced hover effect (same as profile image)
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });

        // Click animation
        button.addEventListener('click', function(e) {
            // Prevent default if it's a link
            if (this.tagName === 'A' && this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            // Apply click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });

        // Optional: Add ripple effect on click
        button.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
}

/**
 * Create ripple effect for button clicks
 * @param {Event} event - Click event
 * @param {Element} button - Button element
 */
function createRipple(event, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;
    
    // Add ripple keyframe animation if not already added
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    button.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Update your DOMContentLoaded event listener to include:
// initSquareButtons();