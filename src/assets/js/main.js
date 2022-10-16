// This is for Menu //
const mainBoxes = document.querySelectorAll('.single-card');
console.log('🚀 ~ file: main.js ~ line 3 ~ mainBoxes', mainBoxes);

mainBoxes?.forEach((box) => {
	const boxMenu = box.querySelector('.toggle_button'),
		menu = box.querySelector('.toggle_menu');

	boxMenu.addEventListener('click', () => {
		boxMenu.classList.toggle('active');
		menu.classList.toggle('active');
	});
});
