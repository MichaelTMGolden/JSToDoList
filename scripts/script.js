function newItem() {
	const newListItem = document.createElement('li');
	const input = document.getElementById('myInput').value;

	if (input === '') {
		console.log('Please enter a valid input');
		return;
	}

	newListItem.textContent = input;

	const close = getClosingSpan(newListItem);

	newListItem.appendChild(close);

	newListItem.onclick = function () {
		this.classList.toggle('complete');
	};

	const ul = document.getElementById('myList');
	ul.appendChild(newListItem);

	document.getElementById('myInput').value = '';
}

function getClosingSpan(newListItem) {
	const close = document.createElement('span');
	close.setAttribute('class', 'close');
	close.onclick = function () {
		deleteItem(newListItem);
	};
	close.textContent = 'X';

	return close;
}

function deleteItem(newListItem) {
	const ul = document.getElementById('myList');
	ul.removeChild(newListItem);
}

function completeItem(newListItem) {
	newListItem.textContent;
}
