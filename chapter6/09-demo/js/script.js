const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++) {
  //console.log(items[i]);

  const keyframes = {
    opacity: [0, 1],
    //rotate: ['50deg', 0],
    //scale: [1.1, 1] //P238 ふわふわと落ちてくる
    //translate: ['0 50px',0]
    filter: ['blur(20px)', 'blur(0)'], //ぼかしから鮮明に
  };

  const options = {
    duration: 600,
    delay: i *300,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options)
}


