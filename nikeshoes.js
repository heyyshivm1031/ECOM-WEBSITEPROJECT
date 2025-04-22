const images = [
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5695cacd-1a72-4c38-9b8d-5706254672fc/NIKE+DUNK+HI+RETRO+SE.png',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/51fb1317-2e47-4125-ab2f-b0a28ac28823/NIKE+DUNK+HI+RETRO+SE.png',
    'nikeshoes2.jpg',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b21e1cf3-638f-4fe9-a75d-0e60b12edae6/NIKE+DUNK+HI+RETRO+SE.png',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3437db88-3141-433d-ab2d-b5b92744e751/NIKE+DUNK+HI+RETRO+SE.png'
];

let currentImageIndex = 0;

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById('mainImage').src = images[currentImageIndex];
}

function setMainImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
    currentImageIndex = images.indexOf(imageSrc);
}

function showLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

const reviews = [];

function submitReview() {
    const rating = document.getElementById('review-rating').value;
    const reviewText = document.getElementById('review-text').value;

    if (reviewText.trim() === "") {
        alert("Please enter a review.");
        return;
    }

    const review = {
        rating: rating,
        text: reviewText,
        date: new Date().toLocaleDateString()
    };

    reviews.unshift(review);

    document.getElementById('review-text').value = "";
    document.getElementById('review-rating').value = "1";

    displayReviews();
}

function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = "";

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <div class="review-header">
                <span class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-text">${review.text}</div>
        `;
        reviewsList.appendChild(reviewElement);
    });
}

function showLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = imageSrc;
    lightbox.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function closeLightbox(event) {
    if (event) event.stopPropagation();
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";

    document.body.style.overflow = "";
}


document.getElementById("lightbox").addEventListener("click", closeLightbox);

function updateMainImage(imageSrc) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = imageSrc;
}

let currentImagesIndex = 0;
const image = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722286097/Croma%20Assets/Entertainment/Television/Images/306175_0_hpokeg.png?tr=w-640",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722286101/Croma%20Assets/Entertainment/Television/Images/306175_1_n20jso.png?tr=w-640",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722286101/Croma%20Assets/Entertainment/Television/Images/306175_2_sa5tmq.png?tr=w-640",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722286102/Croma%20Assets/Entertainment/Television/Images/306175_3_yv0pnt.png?tr=w-640",
];

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    const newImageSrc = images[currentImageIndex];
    updateMainImage(newImageSrc);
    document.getElementById("lightboxImage").src = newImageSrc;
}
