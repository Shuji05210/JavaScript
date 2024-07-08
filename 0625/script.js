// ドキュメントの中から ID = button を指定
const button = document.querySelector('#button');

console.log(button)

const changeColor = () =>{ 
    button.style.backgroundColor = `#ff8888`
    button.style.color = `#ffffff`
    button.style.borderRadius = `100px`
    button.style.textAlign = `center`
    button.style.border = `2px solid black`
}

button.addEventListener('click', changeColor);


const button2 = document.querySelector('#button2');

const changeColor2 = () =>{ 
    button2.style.backgroundColor = `purple`
    button2.style.color = `#ffffff`
    button2.style.borderRadius = `25px`
    button2.style.textAlign = `center`
    button2.style.border = `2px solid black`
}

button2.addEventListener('click', changeColor2);