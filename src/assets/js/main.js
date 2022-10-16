// This is for Menu //
const mainBoxes = document.querySelectorAll('.single-card');

mainBoxes?.forEach((box) => {
	const boxMenu = box.querySelector('.toggle_button'),
		menu = box.querySelector('.toggle_menu');

	boxMenu.addEventListener('click', () => {
		boxMenu.classList.toggle('active');
		menu.classList.toggle('active');
	});
});

// This is for Carousels //
const carousels = document.querySelectorAll('.carousel'),
	carouselsObjs = [];
let activeCarousel = undefined;
carousels?.forEach((carousel, i) => {
	const theObj = {
		container: carousel,
		transformer: carousel.firstElementChild,
		scrollPosition: 0,
		scrollHeight: undefined,
	};
	carouselsObjs.push(theObj);

	carousel.addEventListener('pointerdown', () => {
		const theCarosel = carouselsObjs[i],
			scrollHeight =
				theCarosel.transformer.getBoundingClientRect().width -
				theCarosel.container.getBoundingClientRect().width;

		if (scrollHeight > 0) {
			activeCarousel = theCarosel;
			activeCarousel.scrollHeight = scrollHeight;
		}
	});
	carousel.addEventListener('pointerup', () => {
		activeCarousel && activeCarousel.container.classList.remove('dragging');
		activeCarousel = undefined;
	});
});

window.addEventListener('pointermove', (theEvent) => {
	if (activeCarousel) {
		if (theEvent.pointerType !== 'touch') activeCarousel.container.classList.add('dragging');

		let theValue = activeCarousel.scrollPosition + -theEvent.movementX;
		if (theValue < activeCarousel.scrollHeight && theValue > 0)
			activeCarousel.scrollPosition = theValue;
		else if (theValue > activeCarousel.scrollHeight)
			activeCarousel.scrollPosition = activeCarousel.scrollHeight;
		else if (theValue < 0) activeCarousel.scrollPosition = 0;

		activeCarousel.transformer.style.transform = `translateX(${-activeCarousel.scrollPosition}px)`;
	}
});
