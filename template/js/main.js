const menuIcon = document.getElementById("menu-icon");
const closeBtn = document.getElementById("close");
const totalNum = 17;
let imageNum = 1;
let bool = false;

const carousel = () => {
  const slider = document.getElementById("slider");
  slider.setAttribute("src", `../images/ndubisi-kanu-park/test(${imageNum}).png`);

  imageNum++;

  if (imageNum === totalNum) {
    imageNum = 1;
  }
}

setInterval(carousel, 4000);

const openMenu = (e) => {
  if (e.target.id === "menu-icon"){
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

const closeMenu = (e) => {
  if (e.target.id !== "menu-icon" && bool === true) {
    const menu = document.getElementById("burger-nav");
    menu.style.right = "0px";
    menu.style.transitionDuration = "0.2s";
    menu.style.transitionTimingFunction = "ease-in-out";
    menu.style.transitionProperty = "right";
    menu.style.right = "-10000em";
    bool = false;
  } else if (e.target.tagName === "nav") {
    openMenu();
  }

}

closeBtn.addEventListener("click", closeMenu);
window.addEventListener("click", closeMenu);


