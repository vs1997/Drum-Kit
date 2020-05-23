var drum_Button = document.querySelectorAll('.drum').length;
for (var i = 0; i < drum_Button; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('Sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('Sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('Sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('Sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var snare = new Audio('Sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('Sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kick = new Audio('Sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log();
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
