const text = document.querySelector('#colorText')
const color = document.querySelector('#colorPicker')


// テンプレート文字列でつなげる
// text.textContent = `カラーコード：${color.value}`;


//アロー関数
const arrow = () => {
    //実行したい処理1
    //実行したい処理2

}

//function構文
function func() {
    //実行したい処理1
    //実行したい処理2

}

const colorBg = () => {

    // background-color が backgroundColor になっている
    // (CSSでの書き方 から JavaScriptでの書き方)
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff') {
        text.textContent = `カラーコード：${color.value}(white)`;
    } else if (color.value === '#000000') {
        text.textContent = `カラーコード：${color.value}(black)`;
    } else {
        text.textContent = `カラーコード：${color.value}`;
    }

    // テンプレート文字列でつなげる
    // text.textContent = `カラーコード：${color.value}`;
}

// P75-
// color.addEventListener('input', colorBg);

color.addEventListener('click', colorBg);



//関数の定義 (実行はまだしていない)
// const message = (name,weather) => {
//     console.log(`${name}さん､こんにちは！今日は${weather}ですね`);
// }

// // 呼び出すことで初めて実行される｡
// message('aa','大雨');
// message('bb','雨');
// message('cc','いい天気');
