// const slides = document.getElementsByClassName("slide"); // html collection
const slides = document.querySelectorAll(".slide"); // node list
const leftBtn = document.querySelector(".left-slide");
const rightBtn = document.querySelector(".right-slide");

let visisibleSlideIndex = 0;

slides.forEach((item, index) => {
  //   console.log(item.classList);
  if (!item.classList.contains("hide")) {
    visisibleSlideIndex = index;
  }
});

function hideAllSlides() {
  slides.forEach((item, index) => {
    if (!item.classList.contains("hide")) {
      item.classList.add("hide");
    }
  });
}

leftBtn.addEventListener("click", () => {
  hideAllSlides();
  let nextSlide = visisibleSlideIndex - 1;
  if (visisibleSlideIndex == 0) {
    nextSlide = slides.length - 1;
  }
  console.log(nextSlide);
  visisibleSlideIndex = nextSlide;
  slides[visisibleSlideIndex].classList.remove("hide");
});
