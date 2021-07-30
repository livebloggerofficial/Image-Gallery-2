const lightbox = document.querySelector(".image-gallery-container .lightbox");
const lightboxImage = document.querySelector(
  ".image-gallery-container .lightbox img"
);
const lightboxTitle = document.querySelector(
  ".image-gallery-container .lightbox .title"
);
const downloadBtn = document.querySelector(
  ".image-gallery-container .download-btn"
);
const nextBtn = document.querySelector(".image-gallery-container .next-btn");
const previousBtn = document.querySelector(
  ".image-gallery-container .previous-btn"
);
const closeBtn = document.querySelector(".image-gallery-container .close-btn");

let currentImage = "";

const showImage = (data) => {
  currentImage = data;
  lightbox.classList.add("active");
  let image = data.querySelector("img");
  let title = data.querySelector(".title").innerText;

  lightboxImage.src = image.src;
  downloadBtn.href = image.src;

  if (title) {
    lightboxTitle.innerText = title;
  }
};

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
  if (currentImage.nextElementSibling) {
    currentImage = currentImage.nextElementSibling;
    showImage(currentImage);
  }
});

previousBtn.addEventListener("click", () => {
  if (currentImage.previousElementSibling) {
    currentImage = currentImage.previousElementSibling;
    showImage(currentImage);
  }
});
