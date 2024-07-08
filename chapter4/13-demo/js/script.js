// P135 scrollYでスクロール量を取得する
// 関数の定義
const getScrollPercent = () => {
  // console.log ('スクロールされました');
    
  // スクロールの値を取得
  const scrolled = window.scrollY;
  
  // ${ } テンプレート文字列 (P68 参照)
  // ${scrolled} はスクロールの値が入る
  console.log(`${scrolled} スクロールされました`)
  
  //ページ全体の高さ (P137)
  const pageHeight = document.documentElement.scrollHeight;
  
  //表示領域の高さ (P137)
  const viewHeight = document.documentElement.clientHeight;

  //P141
  const percentage = scrolled / (pageHeight - viewHeight) *100;
  console.log(percentage)

  //プログレスバーに幅を指定 (P142)
  document.querySelector('#bar').style.width = percentage + '%';

  //確認用 console.log()
  //変数を定義したときにちゃんと動作しているか確認するのが大事
  // console.log('ページ全体の高さ' + pageHeight);
  // console.log('表示領域の高さ' + viewHeight);
  
}

// イベントの設定
// 画面全体(window)に対して スクロールイベントを設定
window.addEventListener('scroll',getScrollPercent);