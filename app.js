var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent = 'Hello 2';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';