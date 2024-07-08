// answerを指定
const answer = document.querySelector('#answer');

console.log(answer);

//correct 正解の時に動く
const correct = () => {
    answer.style.backgroundColor = `#ff8888`
    answer.textContent =`北岳 〇`
    alert('正解です!');
}

answer.addEventListener('click', correct);