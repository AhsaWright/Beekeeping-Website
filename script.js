let currentIndex = 0;

function setProgress(percentage) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '% funded';
}

setProgress(0);

function scrollCarousel(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = carouselImages.children.length;
    const imageWidth = carouselImages.children[0].clientWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    carouselImages.style.transform = 'translateX(-' + (currentIndex * imageWidth) + 'px)';
}

// Accessibility enhancement system
class AccessibilityManager {
    constructor() {
        this.setupKeyboardNavigation();
        this.initializeLiveRegions();
        this.setupFocusManagement();
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                this.handleTabNavigation(event);
            } else if (event.key === 'Escape') {
                this.handleEscapeKey();
            }
        });
    }

    handleTabNavigation(event) {
        const focusableElements = this.getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    initializeLiveRegions() {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('role', 'status');
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }

    updateLiveRegion(message) {
        const liveRegion = document.getElementById('live-region');
        liveRegion.textContent = message;
    }

    getFocusableElements() {
        return Array.from(
            document.querySelectorAll(
                'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
            )
        );
    }
}

// Initialize the AccessibilityManager
const accessibilityManager = new AccessibilityManager();

if (!window.IntersectionObserver) {
    import('./polyfills/intersection-observer.js').then(() => {
        console.log('IntersectionObserver polyfill loaded.');
    });
}
