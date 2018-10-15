const totalNum = 17;
let imageNum = 1;

const carousel = () => {
  const slider = document.getElementById("slider");
  slider.setAttribute("src", `../images/ndubisi-kanu-park/test(${imageNum}).png`);
  // const sliderContainer = document.getElementById("slider-container");
  // sliderContainer.style.backgroundImage = `url("../images/ndubisi-kanu-park/test(${imageNum}).png")`;
  // sliderContainer.style.height = "1000px";

  imageNum++;

  if (imageNum === totalNum) {
    imageNum = 1;
  }
}

setInterval(carousel, 4000);


