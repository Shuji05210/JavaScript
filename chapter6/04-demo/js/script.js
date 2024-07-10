
const heading = document.querySelector('#heading');

//アニメーションの内容はオブジェクトで書く
const keyframes = {
  //透明度 opacity
  //opacity: [0, 1],
  
  //rotate:['x 360deg', 0], //回転

  //要素の移動 translate
  translate: ['0 50px',0],

  color:['#f66', '#fc2', '#0c6', '#0bd'],

}

const options = {
  duration: 2000,

  direction: 'alternate',
  iterations: Infinity,

  //easing: 'ease',
}


// 2秒掛けて keyframesを 実行する
heading.animate(keyframes,options);

