//チェックボックスをクリックしたら、送信ボタンを利用可能にする 
// (disable属性を外す)

//使うタグを取得する
// htmlドキュメント内の id = "check" を指定 (チェック)
// Agree 同意するという意味
const isAgreed = document.querySelector('#check');

// htmlドキュメント内の id = "btn" を指定 (ボタン)
const btn = document.querySelector('#btn');


//チェックボックスに変化があった時に動作する
// change 変化したら
isAgreed.addEventListener('change', () => {
  console.log(isAgreed.checked);

  //   //もしチェックボックスにチェックが入っているなら
  //   if(isAgreed.checked){

  //   //送信するボタンの無効化 (disabled属性)を解除する
  //   btn.disabled = false; //disabled属性を消す (送信ボタンが押せる状態)
  // } else {
  //   btn.disabled = true; //disabled属性をつける (送信ボタンが押せない状態)
  // }


  // ! 否定を表す
  // ボタンが使えない状態 = チェックがされていない状態
  btn.disabled = !isAgreed.checked;


})