/*Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
Ід має бути введений в інпут (валідація: ід від 1 до 100)
Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
Зробити завдання використовуючи проміси, перехопити помилки.*/

const field=document.querySelector('input');
const btn=document.querySelector('button');
let post;

const button=document.querySelector('.button');
button.addEventListener('click', handleClick);

function handleClick(even){
    consolelog('Button clicked');
}

fetch('https://jsonplaceholder.typicode.com/posts '+ 'value')
.then(function(res11) {
    return res11.json();
})
.then(function(myData){
    console.log(myData);
    post=myData;
    drow();
})


function drow(){
    const divElem=document.querySelector('container');
    console.log(divElem);
   
    divElem.innerHTML+=`
    ${post.body}
    
    
    `
}