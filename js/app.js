const board = document.querySelector('#board');
const colors = ['DarkRed', 'MediumVioletRed', 'Dark blue', 'DarkOrange', 'Navy', 'Silver', 'DarkSlateGrey', 'Maroon', 'OrangeRed', 'FireBrick', 'GreenYellow']
const SQUARES_NUMBER = 551 ;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	// square.addEventListener('click', () => setColor(square)) - меняет цвет при клике

	square.addEventListener('mousemove', () => setColor(square)); // меяет цвет при наведений

	square.addEventListener('mouseleave', () => removeColor(square)); //удаляет цвет при отведений от объекта

	board.append(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor () {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}