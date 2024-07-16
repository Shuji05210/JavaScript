// 1. 監視ロボットに してほしい内容
// 監視対象が範囲内に現れたら実行する内容
const showKirin = (entries) => {
  //console.log(entries)

  //配列0番目に入っているオブジェクト
  //console.log(entries[0])

  //objectが持つ target要素
  console.log(entries[0].target)

  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0', 0],
  }

  entries[0].target.animate(keyframes, 600)
}

// 2． 新しい名前を付けて監視ロボットを導入する
// 監視ロボットを設定 (Javaのインスタンス化と同じ)

// 3. 監視ロボットに1. で決めた動作内容を指示する
// 空っぽの監視ロボットに実行内容showKirinを与えた
const KirinObserver = new IntersectionObserver(showKirin);

// 4. 監視ロボットに監視対象を教えて実行する
// #kirinを監視するよう指示
KirinObserver.observe(document.querySelector('#kirin'))