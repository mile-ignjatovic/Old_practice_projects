/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, isGamePlaying, rolls, goal, safe;
init();

document.querySelector('.btn-goal').addEventListener('click', function() {
    if (document.getElementById('goal').value) {
        goal = document.getElementById('goal').value;
    }
});

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (isGamePlaying) {
        // dobavi random num
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        console.log('dice1: '+dice1);
        console.log('dice2: '+dice2);

        rolls.push([dice1, dice2]);
        safe = true;
        if (rolls.length > 1 && 
            ((rolls[rolls.length-1][0] === 6 || rolls[rolls.length-1][1] === 6)
                && (rolls[rolls.length-2][0] === 6 || rolls[rolls.length-2][1] === 6))) {
            safe = false;
            // document.querySelector('.btn-message').style.display = 'block';
            // document.querySelector('.btn-message').textContent = 'tow sixes';

        }
        // setuj sliku kockice na visible
        var dice1DOM = document.querySelector('.dice1');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png';
        var dice2DOM = document.querySelector('.dice2');
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        
        // dodaj na score ako random nije bio 1 a ako jesto prebaci aktiv playera
        // if (dice1 === 1 && dice2 === 1) {
        //     document.querySelector('.btn-message').style.display = 'block';
        //     document.querySelector('.btn-message').textContent = 'snake eyes';
        // }
        if (dice1 !== 1 && dice2 !== 1 && safe) {
            roundScore += dice1 += dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            console.log('next player called')
            nextPlayer();
        }
    }
});
 
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (isGamePlaying) {
        // add curent score to global score
        scores[activePlayer] += roundScore;
        // update ui
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        //check if player won
        if (scores[activePlayer] >= goal) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner !!';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            isGamePlaying = false;
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    console.log('called')
    isGamePlaying = true;
    rolls = [];
    goal = 100;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.btn-message').style.display = 'none';
    document.getElementById('goal').value = '';

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

} 



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    rolls = [];
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.btn-message').style.display = 'none';
}