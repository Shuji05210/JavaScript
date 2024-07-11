const card = document.querySelectorAll('#bingocard div')
const btn  = document.querySelector('.btn')

//console.log(card)
//console.log(btn)


const btnclick1 = () => {
    //繰り返して数字をランダムに振り分けて出力を25回行う
    // card.length [divの数 25まで]
    for (let i = 0; i < card.length; i++){
        card[i].textContent = Math.floor(Math.random()*75)
        
        //13番目 (カードの真ん中をFreeにする)
        if(i === 12){
            card[i].textContent = 'Free'
            card[i].style.backgroundColor = '#ffffff'
            card[i].style.border = '1px solid black'
        } 
    }
}

btn.addEventListener('click',btnclick1)