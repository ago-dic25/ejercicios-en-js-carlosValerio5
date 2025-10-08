const sequence = []
// e is a keydown event
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    sequence.push(e.keyCode);
    if (key) key.classList.add('playing');
}

function clearSequence(){
    sequence.length = 0;
}

function playSquence(){
    let delay = 0;
    sequence.forEach(keyCode => {
        setTimeout(() => {
            const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
            const key = document.querySelector(`.key[data-key="${keyCode}"]`)
            if (!audio) return;
            audio.currentTime = 0;
            audio.play();
            if (key) key.classList.add('playing');
        }, delay);
        delay += 300; // 300ms between each sound
    });
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    setTimeout(() => {
        this.classList.remove('playing');
    }, 100);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const buttonPlay = document.querySelector('.button-sequence');
const buttonClear = document.querySelector('.button-clear');

buttonPlay.addEventListener('click', playSquence);
buttonClear.addEventListener('click', clearSequence);

window.addEventListener('keydown', playSound);