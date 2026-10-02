const galleryPhotos = [

    {
        thumbnail: "gallery thamblain section/chat gpt actual emage crea.webp",
        original: "gallery Original image/chat gpt actual emage crea.png",
        alt: "Durga Puja celebration"
    },

    {
        thumbnail: "gallery thamblain section/ChatGPT Image Sep 14 2026 06_36_25 PM.webp",
        original: "gallery Original image/ChatGPT Image Sep 14, 2026, 06_36_25 PM.png",
        alt: "Durga Puja pandal"
    },

    {
        thumbnail: "gallery thamblain section/IMG_20241211_141741 1.webp",
        original: "gallery Original image/IMG_20241211_141741 (1).jpg",
        alt: "Durga idol"
    },

    {
        thumbnail: "images/gallery/photo-04.webp",
        original: "gallery Original image/chat gpt actual emage crea.png",
        alt: "Durga Puja celebration"
    },

    {
        thumbnail: "images/gallery/photo-05.webp",
        original: "gallery Original image/chat gpt actual emage crea.png",
        alt: "Puja decoration"
    },

    {
        thumbnail: "gallery thamblain section/minmax-ai 1.webp",
        original: "gallery Original image/minmax-ai (1).jpeg",
        alt: "Durga Puja evening"
    },

    {
        thumbnail: "images/gallery/photo-07.webp",
        original: "gallery Original image/chat gpt actual emage crea.png",
        alt: "Puja celebration"
    },

    {
        thumbnail: "images/gallery/photo-08.webp",
        original: "gallery Original image/chat gpt actual emage crea.png",
        alt: "Durga Puja festival"
    }

];


const galleryGrid =
    document.querySelector("#allGalleryGrid");

const lightbox =
    document.querySelector(".gallery-lightbox");

const lightboxImage =
    document.querySelector(".gallery-lightbox-image");

const closeBtn =
    document.querySelector(".gallery-lightbox-close");

const prevBtn =
    document.querySelector(".gallery-lightbox-prev");

const nextBtn =
    document.querySelector(".gallery-lightbox-next");


let currentImage = 0;


/* =========================
   CREATE GALLERY
========================= */

galleryPhotos.forEach((photo, index) => {

    const galleryItem =
        document.createElement("div");

    galleryItem.className =
        "all-gallery-item";

    galleryItem.dataset.index =
        index;


    galleryItem.innerHTML = `

        <img
            src="${photo.thumbnail}"
            data-original="${photo.original}"
            alt="${photo.alt}"
            loading="lazy"
        >

        <div class="all-gallery-overlay">

            <span>
                View Photo
            </span>

        </div>

    `;


    galleryGrid.appendChild(galleryItem);

});


/* =========================
   UPDATE LIGHTBOX IMAGE
========================= */

function updateLightbox() {

    const photo =
        galleryPhotos[currentImage];


    lightboxImage.src =
        photo.original;


    lightboxImage.alt =
        photo.alt;

}


/* =========================
   OPEN LIGHTBOX
========================= */

galleryGrid.addEventListener("click", (event) => {

    const clickedItem =
        event.target.closest(".all-gallery-item");


    if (!clickedItem) return;


    currentImage =
        Number(clickedItem.dataset.index);


    updateLightbox();

    lightbox.classList.add("active");

});


/* =========================
   NEXT IMAGE
========================= */

nextBtn.addEventListener("click", () => {

    currentImage =
        (currentImage + 1) %
        galleryPhotos.length;


    updateLightbox();

});


/* =========================
   PREVIOUS IMAGE
========================= */

prevBtn.addEventListener("click", () => {

    currentImage =
        currentImage === 0
            ? galleryPhotos.length - 1
            : currentImage - 1;


    updateLightbox();

});


/* =========================
   CLOSE LIGHTBOX
========================= */

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


/* =========================
   BACKGROUND CLICK
========================= */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }


    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }


    if (event.key === "ArrowRight") {

        currentImage =
            (currentImage + 1) %
            galleryPhotos.length;

        updateLightbox();

    }


    if (event.key === "ArrowLeft") {

        currentImage =
            currentImage === 0
                ? galleryPhotos.length - 1
                : currentImage - 1;

        updateLightbox();

    }

});