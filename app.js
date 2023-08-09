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

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}