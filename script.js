var character = document.querySelector('.character');
var block = document.querySelector('.block');
var fireball =document.querySelector('.fireball')
var startBtn = document.querySelector('.start-btn');
var recordsBtn = document.querySelector('.records-btn');
var startScreen = document.querySelector('.start-screen');
var currentScore = document.querySelector('.score');
var initials = null;
var score = 0;
var scorePoints = 10;


const init = () => {
    fireball.classList.add('hide');
}

const startGame = () => {
    block.classList.add('animate-block')
    startScreen.classList.add('hide')
}

$(startBtn).click(startGame);

const jump = () => {
    character.classList.add('animate-jump');
    setTimeout(() => {
        character.classList.remove('animate-jump');
    }, 500);
    addScore();
}

const animateFireball = () => {
    fireball.classList.add('animate-fireball');
    setTimeout(() => {
        fireball.classList.remove('animate-fireball');
        fireball.classList.add('hide');
    }, 1000);
}

document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyW') {
        jump();
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {
        fireball.style.display = 'initial'
        fireball.classList.remove('hide');
        animateFireball();
    }
})

var addScore = () => {
    if(jump){
        currentScore.innerHTML = score + scorePoints;
        score = score + scorePoints;
}
}


var enterInitials = () => {
    initials = prompt('Enter Initials!')
}

var saveScore = () => {
    var scores = JSON.parse(localStorage.getItem("Score")) || [];
    var newScore = {
        score: score,
        initials: initials
    }

    if(!initials){
        return;
    } else {
    scores.push(newScore)
    }

    localStorage.setItem('Score', JSON.stringify(scores))
}

var gameOver = () => {
    alert('You Lose');
    enterInitials();
    saveScore();
    window.location.reload();
}

var checkDead = setInterval (function(){
    var characterTop = parseInt(
        window.getComputedStyle(character)
            .getPropertyValue('top')
    );
    var blockLeft = parseInt(
        window.getComputedStyle(block)
            .getPropertyValue('left')
    );

    if (blockLeft < 100 && blockLeft > 90 && characterTop >= -370) {
        block.style.animation = 'none';
        block.style.display = 'none';
        gameOver();
    }

}, 10)

