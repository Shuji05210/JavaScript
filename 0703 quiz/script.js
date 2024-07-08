//class = "question"を取得
const question = document.querySelector('.question');

//console.log(question);

//配列に問題文と回答選択肢を配置する
const lists = [
    '問題 日本で二番目に大きい山は？',
    '富士山',
    '北岳',
    '生駒山',
    '高野山',
    '〇'
]

//for文で要素を繰り返して表示させる
// (配列の要素の数だけ繰り返す forループ)
for (let i = 0; i < lists.length; i++) {
    //配列の0番目の要素(問題文) のときだけ違う divタグを付ける
    if(i === 0){
        const content =  `<div id="q1">${lists[i]}</div>`
        question.insertAdjacentHTML('beforeend', content)
    }

    //配列 5番目の要素 (〇 記号) の時だけ表示させない
    else if(i === 5){
        console.log(`${lists[i]}`)
    }

    //それ以外の場合 選択肢を表示させる
    else {
    const content = `<div>${lists[i]}</div>`
    
    question.insertAdjacentHTML('beforeend', content)
    }
         
}

//
const select = document.querySelectorAll('.question div')
console.log(select)

