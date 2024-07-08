//配列に問題文と回答選択肢を配置する

//配列
const content = [
    '問題 日本で二番目に大きい山は？',
    '<div>富士山</div>',
    '<div id="answer">北岳</div>',
    '<div>生駒山</div>',
    '<div>高野山</div>',
    'B'
]

const quiz = document.querySelector('#quiz')

for (let i = 0; i < content.length; i++) {
    console.log(i) //確認

    //for文の中にif文を使って､答えは画面に表示しないようにする
    if (i === 5) {
        console.log(`答えは${content[i]}`)
    }

    else {
        quiz.insertAdjacentHTML("beforeend", content[i])
    }
}



const answer = document.querySelector('#answer');
const select = document.querySelector('div');

//correct 正解の時に動く
const correct = () => {
    answer.style.backgroundColor = `#ff8888`
    document.querySelector('#aa').textContent = `正解は${content[5]}でした`
}

select.addEventListener('click', correct);



