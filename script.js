let currentIndex = 0;

function setProgress(percentage) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '% funded';
}

setProgress(90);

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

