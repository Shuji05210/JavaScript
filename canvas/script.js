//関数の定義
// function draw() {
//     //キャンバス要素を取得
//     const canvas = document.querySelector('#tutorial')

//     // console.log(canvas)

//     //キャンバスに対応するか確認
//     if (canvas.getContext) {
//         // コンテキスト(データの種類: 2Dか3Dなど) を指定
//         const ctx = canvas.getContext("2d");

//         // ctx.fillStyle = "rgb(200 0 0)";
//         // ctx.fillRect(10, 10, 50, 50);
//         // //Rect Rectangle 長方形


//     } else {
//         //キャンバスに未対応の場合のコードをここに
//     }
// }

//定義した関数を実行する
// draw();

const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 25,
    color: "blue",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    },
};

function draw() {
    //古い円を消す
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //新しい円を描く
    ball.draw();

    //新しい円の座標を更新する
    ball.x += ball.vx;
    ball.y += ball.vy;
    raf = window.requestAnimationFrame(draw);

    //加速
    ball.vy *= 0.99;
    ball.vy += 0.25;
    
    //境界 キャンバスの外に飛び出さないようにする
    if (
        ball.y + ball.vy > canvas.height - ball.radius ||
        ball.y + ball.vy < ball.radius
    ) {
        ball.vy = -ball.vy;
    }
    if (
        ball.x + ball.vx > canvas.width - ball.radius ||
        ball.x + ball.vx < ball.radius
    ) {
        ball.vx = -ball.vx;
    }
}

canvas.addEventListener("mouseover", (e) => {
    raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
    window.cancelAnimationFrame(raf);

});

ball.draw();

