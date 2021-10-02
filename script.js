var character = document.querySelector('.character');
var block = document.querySelector('.block');

const jump = () => {
    character.classList.add('animate');
    setTimeout(() => {
        character.classList.remove('animate');
    }, 500);
}

document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyW') {
        jump();
    }
})

var checkDead = (() => {
    var characterTop = parseInt(
        window.getComputedStyle(character)
            .getPropertyValue('top')
    );
    var blockLeft = parseInt(
        window.getComputedStyle(block)
            .getPropertyValue('left')
    );

    console.log(blockLeft, characterTop)

}, 10)


