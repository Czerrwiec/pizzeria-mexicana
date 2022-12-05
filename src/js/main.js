let hamburger;
let navigationLinks;
let menuBg;
let links;
let footerYear;
let menuBarBox;
let hamburgerHead


const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
	handleMobileNav();
	handleCurrentYear();
	// addBarBorder();
};

const prepareDOMElements = () => {
	hamburger = document.querySelector('.menu-bar');
	navigationLinks = document.querySelector('.navigation-links');
	menuBg = document.querySelector('.menu-bg');
	links = document.querySelectorAll('.nav-link-mobile');
	footerYear = document.querySelector('.footer-year');
	menuBarBox = document.querySelector('.menu-bar-box');
  hamburgerHead = document.querySelector('.hamburger-head')
};

const prepareDOMEvents = () => {
	hamburger.addEventListener('click', menuOnClick);
  window.addEventListener('scroll', addBarBorder)
};

const handleMobileNav = () => {
	links.forEach((item) => {
		item.addEventListener('click', () => {
			hamburger.classList.remove('change');
			navigationLinks.classList.remove('change');
			menuBg.classList.remove('change-bg');
		});
	});
};

function menuOnClick() {
	hamburger.classList.toggle('change');
	navigationLinks.classList.toggle('change');
	menuBg.classList.toggle('change-bg');
}

const addBarBorder = () => {
   const i =  menuBarBox.getBoundingClientRect().bottom
  if (i === 116) {
      menuBarBox.style.borderTop = '1px solid #fffae7'
  } else {
    menuBarBox.style.borderTop = 'none'
  }

  // if (window.scrollY >= 250) {
  //   hamburgerHead.style.backgroundColor = 'black'
  // } else {
  //   hamburgerHead.style.backgroundColor = 'transparent'
  // }


};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};



document.addEventListener('DOMContentLoaded', main);
