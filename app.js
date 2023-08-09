// // var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[2]);
// // items[2].textContent = 'Hello 2';
// // items[2].style.fontWeight = 'bold';
// // items[2].style.backgroundColor = 'green';
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].textContent = 'Hello 2';
// li[2].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'yellow';

// 

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'

//nextSibling
// c

//previousSibling
// console.log(itemList.previousSibling);

// //previousSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

var newDiv = document.createElement('div');

//Add class
newDiv.className = 'hello';

//Add id
newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title', 'hello div');

//create text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontsize = '30px';

container.insertBefore(newDiv, h1);