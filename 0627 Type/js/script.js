const text = document.querySelector('#text');

const question = document.querySelector('.question').textContent

const b = document.querySelector('.b');

text.addEventListener('keyup', () => {
    // console.log('キー入力をした');
    // console.log(text.value);

    
    //もしお題と同じ入力されているなら    
    //正解の処理 (背景を赤く, ｢正解です｣と表示)
    if (question === text.value) {
        text.style.backgroundColor = `#fadbda`
        b.style.backgroundColor = `#fadbda`
        b.textContent = `正解です`
        console.log('正解です')
    }

    //そうでないならば 入力が間違っていると表示
    else {
        b.textContent = `入力が間違っています`
        b.style.backgroundColor = `skyblue`
        console.log('入力が間違っています')
    }


});