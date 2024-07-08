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

//forの中でif文を使って 選択欄はクリックできるようにする
//一致したすべてのタグを取得
const select = document.querySelectorAll('#quiz div')

console.log(select)

for (let i = 0; i < select.length; i++) {
    //console.log(select[i].textContent);

    select[i].addEventListener('click', () => {
        console.log(select[i].textContent)
    })
}