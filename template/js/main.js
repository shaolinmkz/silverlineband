const totalNum = 17;
let imageNum = 1;

const carousel = () => {
  document.querySelector("#slider").setAttribute("src", `../images/ndubisi-kanu-park/test(${imageNum}).jpg`);

  imageNum++;

  if (imageNum === totalNum) {
    imageNum = 1;
  }
}

setInterval(carousel, 4000);


