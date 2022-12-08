let hamburger;
let navigationLinks;
let menuBg;
let links;
let footerYear;
let menuBarBox;
let hamburgerHead;
let slider;
let prevBtn;
let nextBtn;
let listOfSelectors;
let selectorParent;

let index = 0;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
	handleMobileNav();
	handleCurrentYear();
	handleSelectors()
};

const prepareDOMElements = () => {
	hamburger = document.querySelector('.menu-bar');
	navigationLinks = document.querySelector('.navigation-links');
	menuBg = document.querySelector('.menu-bg');
	links = document.querySelectorAll('.nav-link-mobile');
	footerYear = document.querySelector('.footer-year');
	menuBarBox = document.querySelector('.menu-bar-box');
	hamburgerHead = document.querySelector('.hamburger-head');
	slider = document.querySelector('.slider');
	prevBtn = document.querySelector('.prev');
	nextBtn = document.querySelector('.next');
	listOfSelectors = document.querySelectorAll('.list li');
	selectorParent = document.querySelector('.list');
};

const prepareDOMEvents = () => {
	hamburger.addEventListener('click', menuOnClick);
	window.addEventListener('scroll', addBorder);

	nextBtn.addEventListener('click', nextImg);
	prevBtn.addEventListener('click', prevImg);
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

const prevImg = () => {
	index = index > 0 ? index - 1 : 0;
	cleanUpAndTranslate();
	selectorParent.children[index].classList.add('selected');
};

const nextImg = () => {
	index = index < 5 ? index + 1 : 5;
	cleanUpAndTranslate();
	selectorParent.children[index].classList.add('selected');
};

const handleSelectors = () => {
	listOfSelectors.forEach((item, i) => {
		item.addEventListener('click', () => {
			index = i;
			cleanUpAndTranslate();
			item.classList.add('selected');
		});
	});
}

const cleanUpAndTranslate = () => {
	listOfSelectors.forEach((x) => {
		x.classList.remove('selected');
	});
	slider.style.transform = `translate(${index * -16.67}%)`;
};

document.addEventListener('DOMContentLoaded', main);
