const menuIcon = document.getElementById("menu-icon");
const closeBtn = document.getElementById("close");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const slider = document.getElementById("slider");

const timerValue = 5000;
const totalNum = 17;
const lowestNum = 1;
let imageNum = 1;
let bool = false;

/**
 * Changes slide every 5 seconds
 */
const carousel = () => {
  slider.setAttribute("src", `../images/ndubisi-kanu-park/test(${imageNum}).png`);

  imageNum++;

  if (imageNum === totalNum) {
    imageNum = lowestNum;
  }
}
setInterval(carousel, timerValue);

/**
 * Changes slide to next display
 */
const nextSlide = () => {
  imageNum += 1;
  if (imageNum > totalNum) {
    imageNum = lowestNum;
  }
  slider.setAttribute("src", `../images/ndubisi-kanu-park/test(${imageNum}).png`);
}
next.addEventListener("click", nextSlide);

/**
 * Changes slide to previous display
 */
const previousSlide = () => {
  imageNum -= 1;
  if (imageNum < lowestNum) {
    imageNum = totalNum;
  }
  slider.setAttribute("src", `../images/ndubisi-kanu-park/test(${imageNum}).png`);
}
previous.addEventListener("click", previousSlide);

/**
 * Opens the hamburger menu on a smaller screen size
 * @param {object} e - Event parameter
 */
const openMenu = () => {
  if (bool === false){
    const navMenu = document.getElementById("burger-nav");
    navMenu.style.right = "-10000em";
    navMenu.style.transitionDuration = "0.2s";
    navMenu.style.transitionTimingFunction = "ease-in-out";
    navMenu.style.transitionProperty = "right";
    navMenu.style.right = "0px";
    bool = true;
  }
}

menuIcon.addEventListener("click", openMenu);

/**
 * Closes the hamburger menu on a smaller screen size
 * @param {object} e - Event parameter
 */
const closeMenu = (e) => {
  if (bool === true) {
    const menu = document.getElementById("burger-nav");
    menu.style.right = "0px";
    menu.style.transitionDuration = "0.2s";
    menu.style.transitionTimingFunction = "ease-in-out";
    menu.style.transitionProperty = "right";
    menu.style.right = "-10000em";
    bool = false;
  }
}

closeBtn.addEventListener("click", closeMenu);

/**
 * Close humburger menu list
 */
window.addEventListener("click", (e) => {
  if (e.target.className === "block-container" || e.target.id === "slider-container" || e.target.className === "displaybg" || e.target.id === "footer" || e.target.className === "social-media-container") {
    closeMenu();
  }
});



