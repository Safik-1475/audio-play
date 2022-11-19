// remove transition here
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
    if (e.propertyName !== `transform`) return;
    this.classList.remove('playing')
}

//when window fire event keydown
const playSound = e => {
    // get audio element keycode here
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // get key class keycode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // play sound here
    audio.play();
    // when play sound end then again start new 
    audio.currentTime = 0;
    // adding class playing
    key.classList.add('playing');
}
window.addEventListener('keydown', playSound);