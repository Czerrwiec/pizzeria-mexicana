let hamburger;
let navigationLinks;
let menuBg;
let links;
let footerYear;
let menuBarBox;
let hamburgerHead;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
	handleMobileNav();
	handleCurrentYear();
};

const prepareDOMElements = () => {
	hamburger = document.querySelector('.menu-bar');
	navigationLinks = document.querySelector('.navigation-links');
	menuBg = document.querySelector('.menu-bg');
	links = document.querySelectorAll('.nav-link-mobile');
	footerYear = document.querySelector('.footer-year');
	menuBarBox = document.querySelector('.menu-bar-box');
	hamburgerHead = document.querySelector('.hamburger-head');
};

const prepareDOMEvents = () => {
	hamburger.addEventListener('click', menuOnClick);
	window.addEventListener('scroll', addBorder)
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

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const addBorder = () => {
	const observer = new IntersectionObserver((entry) => {
		const distance = entry[0].boundingClientRect.top;
		if (distance <= 80) {
			menuBarBox.style.borderTop = '1px solid #fffae7';
		} else {
			menuBarBox.style.borderTop = 'none';
		}
	});
	observer.observe(menuBarBox);
};

document.addEventListener('DOMContentLoaded', main);
