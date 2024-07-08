const btn = document.querySelector('#btn');
const b = document.querySelector('.b');
const text = document.querySelector('.display')

//変数の宣言 カウンタ変数
let count = 0;

//ボタンをクリックしたら動作する
btn.addEventListener('click', () => {
    // console.log('ボタンがクリックされました');

    //インクリメント演算子 count = count + 1
    //カウンタを1増加させる, カウンタ変数の値をログで表示
    count++;
    console.log(count);

    // n回 クリックしましたと表示させる
    text.textContent = ` ${count}回 クリックしました`
    
    //もしクリックした回数が (奇数回) なら
    //(カウントを2で割った余りが1なら奇数)
    //〇を表示
    if (count % 2 === 1) {
        // console.log('〇');
        b.textContent = `〇`
        b.style.backgroundColor = `#fadbda`
    }

    //そうでない場合 (偶数回) なら
    //×を表示
    else {
        // console.log('×')
        b.textContent = `×`
        b.style.backgroundColor = `skyblue`
    }

})