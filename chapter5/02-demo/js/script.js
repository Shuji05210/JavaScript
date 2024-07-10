//id = "menu" を取得
const menu = document.querySelector('#menu');

//P178
// const strawberry = {
//     name: 'イチゴ',
//     img: 'strawberry.jpg',
//     price: 450,
// }

// console.log(strawberry)

//P180 ドット記法 基本的にこっちを使う
// console.log(strawberry.name)
// console.log(strawberry.img)
// console.log(strawberry.price)

//P180 ブラケット記法
//console.log(strawberry['name'])



//配列の中にオブジェクトを入れる
const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450,
    },
    
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 400,
    },
    
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 500,
    },
    
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 400,
    },
    
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: 500,
    },
    
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 400,
    },

]



// lists.length 配列の長さ(要素の数)だけ 繰り返す
for (let i = 0; i < lists.length; i++) {
    //for文の中で配列の要素それぞれを利用するのは､よく使われるパターン

    //p195 
    // const name  = lists[i].name;
    // const img   = lists[i].img;
    // const price = lists[i].price;

    //オブジェクトのキーと同じ名前の変数を作りたいとき
    //分割代入が利用できる
    const {name, img, price} = lists[i]
    

    const content = `<div>
                      <img src="images/${img}" alt="">
                      <h2>${name}</h2> <p>${price}円</p>
                     </div>`

    menu.insertAdjacentHTML('beforeend', content)
}


//P176- オブジェクト
// オブジェクトは { } を使用する
// オブジェクトを使うメリットは人間が見てわかりやすい
// const apple = {
//     // key(キー) : value(値)
//     name: 'リンゴ',
//     color: '赤',
//     price: '100',
//     size: 'small',
//     area: '青森県'
// }

// console.log(apple)









