function newItem() {
	const list = document.createElement('li');
	const input = document.getElementById('myInput').value;

	if (input === '') {
		console.log('Please enter a valid input');
		return;
	}

	list.textContent = input;

	const close = document.createElement('span');
	close.setAttribute('class', 'close');
	close.setAttribute('onclick', 'deleteItem()');
	close.textContent = 'X';
	list.appendChild(close);

	const ul = document.getElementById('myList');
	ul.appendChild(list);

	document.getElementById('myInput').value = '';
}

function deleteItem() {
	const listItem = document.getElementsByClassName('close');
	const ul = document.getElementById('myList');
	ul.remove(listItem);
}
