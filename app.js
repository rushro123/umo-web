let index = 0;
const images = document.querySelectorAll(".main-hero img");

function changeImage() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}

setInterval(changeImage, 6000);
