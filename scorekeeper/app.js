const p1btn = document.querySelector('#b1');
const p2btn = document.querySelector('#b2');
const resetBtn = document.querySelector('#reset');
let p1score = 0;
let p2score = 0;
let scoresText = document.querySelector('h2');
let score = document.querySelector('#score');
let maxScore = score.value;
let score1 = document.querySelector('#score1');
let score2 = document.querySelector('#score2');

score.addEventListener('input', function () {
    maxScore = score.value;
    reset();
})



p1btn.addEventListener('click', function (e) {
    p1score += 1;
    scoresText.innerHTML = `<span id="score1">${p1score}</span> to <span id="score2">${p2score}</span>`;

    if (p1score == maxScore) {
        p1btn.disabled = true;
        p2btn.disabled = true;
        scoresText.innerHTML = `<span id="score1" style='color: green;'>${p1score}</span> to <span id="score2" style='color: red;'>${p2score}</span>`;
    }
});

p2btn.addEventListener('click', function (e) {
    p2score += 1;
    scoresText.innerHTML = `<span id="score1">${p1score}</span> to <span id="score2">${p2score}</span>`;

    if (p2score == maxScore) {
        p1btn.disabled = true;
        p2btn.disabled = true;
        scoresText.innerHTML = `<span id="score1" style='color: red;'>${p1score}</span> to <span id="score2" style='color: green;'>${p2score}</span>`;

    }
});

resetBtn.addEventListener('click', function (e) {
    p1score = 0;
    p2score = 0;
    scoresText.innerHTML = `<span id="score1">${p1score}</span> to <span id="score2">${p2score}</span>`;
    p1btn.disabled = false;
    p2btn.disabled = false;
})


function reset() {
    p1score = 0;
    p2score = 0;
    scoresText.innerHTML = `<span id="score1">${p1score}</span> to <span id="score2">${p2score}</span>`;
    p1btn.disabled = false;
    p2btn.disabled = false;
}