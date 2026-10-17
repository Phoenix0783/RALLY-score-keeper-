const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#resetButton');

const playToSelect = document.querySelector('#playto');
const targetDisplay = document.querySelector('#targetDisplay');
const gameStatusDisplay = document.querySelector('#gameStatus');

let winningScore = 5;
let isGameOver = false;


function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('is-winner')
        opponent.display.classList.add('is-loser')
        gameStatusDisplay.textContent = 'MATCH COMPLETE';
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
}
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
});

playToSelect.addEventListener('change', function() { 
    winningScore = parseInt(this.value);
    targetDisplay.textContent = winningScore;
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    gameStatusDisplay.textContent = 'MATCH IN PROGRESS';

    for(let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('is-winner', 'is-loser');
        p.button.disabled = false;
    }
}