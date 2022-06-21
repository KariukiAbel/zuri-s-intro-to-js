const myname = "ABEL MURIITHI";
const country = "Kenya";
const height = '5,9';
const body = document.querySelector('body')

div = document.createElement('div')
div.innerHTML = `<p>Name:<span>${myname}</span></p>
<p>Height: <span>${height}</span></p>
<p>Country: <span>${country}</span></p>`

body.appendChild(div)