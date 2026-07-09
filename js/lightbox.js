let currentGallery = [];
let currentIndex = 0;

function openGallery(planKey) {
    const gallery = TOUR_GALLERIES[planKey];
    if (!gallery || gallery.photos.length === 0) return;

    currentGallery = gallery.photos;
    currentIndex = 0;

    const overlay = document.getElementById('galleryOverlay');
    const title = document.getElementById('galleryTitle');

    title.textContent = document.documentElement.lang === 'ja' ? gallery.title : gallery.titleEn;

    updateGalleryImage();
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    updateGalleryImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    updateGalleryImage();
}

// function updateGalleryImage() {
//     const img = document.getElementById('galleryImage');
//     const counter = document.getElementById('galleryCounter');
//     img.src = currentGallery[currentIndex];
//     counter.textContent = (currentIndex + 1) + ' / ' + currentGallery.length;
// }
function updateGalleryImage() {
    const img = document.getElementById('galleryImage');
    const counter = document.getElementById('galleryCounter');
    const basePath = document.documentElement.lang === 'ja' ? '../' : '';
    img.src = basePath + currentGallery[currentIndex];
    counter.textContent = (currentIndex + 1) + ' / ' + currentGallery.length;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const overlay = document.getElementById('galleryOverlay');
    if (overlay.style.display !== 'flex') return;

    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Close on overlay background click
document.getElementById('galleryOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeGallery();
});
