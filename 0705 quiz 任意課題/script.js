/* 0705(金) 課題
** オブジェクトと配列を使って クイズゲームを改良*/

//class = "question"を取得
const question = document.querySelector('.question');

//console.log(question);


//配列に問題文と回答選択肢を配置する
//correct 正解

//問題文を入れておく配列変数
const QuestionText = [
    '問題1: 日本で二番目に大きい山は？',
    '問題2: 問題文2',
    '問題3: 問題文3',
]

//console.log(QuestionText)

const Num = [
    'A',
    'B',
    'C',
    'D'
]

//選択肢を入れておく配列 オブジェクトで管理
const select = [
    {
        name: '富士山',
        correct: 'No',
    },

    {
        name: '北岳',
        correct: 'Yes',
    },

    {
        name: '生駒山',
        correct: 'No',
    },

    {
        name: '高野山',
        correct: 'No',
    },
]

//console.log(select);


// for文で選択肢の要素を表示させる 
// for2個で問題文の選択肢表示を別々にforループさせて表示

// for (let j = 0; j < QuestionText.length; j++) {
//     //問題文を表示
//     const Text = `<div id="Qtext">${QuestionText[j]}</div> <br>`
//     question.insertAdjacentHTML('beforeend', Text)

// 選択肢の表示
//     for (let i = 0; i < select.length; i++) {
//             const content = `<p id="q1">${Num[i]} ${select[i].name}</p>`
//             question.insertAdjacentHTML('beforeend', content)

//     }
// }



for (let i = 0; i < select.length; i++) {
    if (i === 0) {
        const Text = `<div id="Qtext">${QuestionText[i]}</div> <br>`
        question.insertAdjacentHTML('beforeend', Text)
        const content = `<p id="q1">${select[i].name}</p>`
        question.insertAdjacentHTML('beforeend', content)
    }

    else {
        const content = `<p id="q1">${select[i].name}</p>`
        question.insertAdjacentHTML('beforeend', content)
    }
}


/* 選択肢をクリックしたときの処理を作る*/
// const test = document.querySelectorAll('#q1')
// const ansfield  = document.querySelector('.ansfield');

//console.log(test)

// correct 正解の時に動く関数
// const ansmov = () => {
//     ansfield.style.backgroundColor = `#ff8888`
//     ansfield.textContent = `正解は 北岳でした`
// }


/* 今回 良くわからなかった点まとめ
** querySelectorAll は addEventlistener が使えない
** forEach() を使う？
*/


