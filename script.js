const container = document.querySelector('.container');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const vs = document.getElementById('vs');
let retry = document.getElementById('retry');
let status = document.getElementById('status');

const dialogBg = document.querySelector('.dialog_bg');
const dialog = document.getElementById('dialog');
const yesBtn = document.getElementById('yes_btn');
const noBtn = document.getElementById('no_btn');

let rockclone = rock.cloneNode(true);
let paperclone = paper.cloneNode(true);
let scissorsclone = scissors.cloneNode(true);

container.appendChild(rockclone);
container.appendChild(paperclone);
container.appendChild(scissorsclone);

rockclone.addEventListener('click', playRock);

paperclone.addEventListener('click', playPaper);

scissorsclone.addEventListener('click', playScissors);

retry.addEventListener('click', (reset = () => window.location.reload()));

function playRock() {
  container.innerHTML = '';
  container.appendChild(rockclone);
  container.appendChild(vs);
  let random = rand();
  randomPlay(random);
  if (random == 1) {
    draw();
  } else if (random == 2) {
    lose();
  } else if (random == 3) {
    win();
  }
}

function playPaper() {
  container.innerHTML = '';
  container.appendChild(paperclone);
  container.appendChild(vs);
  let random = rand();
  randomPlay(random);
  if (random == 1) {
    win();
  } else if (random == 2) {
    draw();
  } else if (random == 3) {
    lose();
  }
}

function playScissors() {
  container.innerHTML = '';
  container.appendChild(scissorsclone);
  container.appendChild(vs);
  let random = rand();
  randomPlay(random);
  if (random == 1) {
    lose();
  } else if (random == 2) {
    win();
  } else if (random == 3) {
    draw();
  }
}

function randomPlay(random) {
  if (random == 1) {
    container.appendChild(rock);
    removeClick();
  } else if (random == 2) {
    container.appendChild(paper);
    removeClick();
  } else if (random == 3) {
    container.appendChild(scissors);
    removeClick();
  }
}

function removeClick() {
  rockclone.removeEventListener('click', playRock);

  paperclone.removeEventListener('click', playPaper);

  scissorsclone.removeEventListener('click', playScissors);

  retry.style.display = 'block';
}

function draw() {
  status.innerHTML = 'DRAW';
}

function win() {
  status.innerHTML = 'YOU WIN';
}

function lose() {
  status.innerHTML = ' YOU LOSE';
}

yesBtn.addEventListener('click', function (e) {
  const msg = document.createElement('h2');
  msg.innerText = 'I knew you were dumb!';
  dialog.innerHTML = null;
  dialog.appendChild(msg);
  setTimeout(function () {
    dialog.close();
    dialogBg.remove();
  }, 1200);
});

noBtn.addEventListener('click', function (e) {
  e.target.style.transform =
    'translate(' + randSign() * nRand() + 'px, ' + randSign() * nRand() + 'px)';
});

// random sign
const randSign = () => (Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1);

// random number generator between 0 and 3
var rand = () => Math.floor(Math.random() * 3 + 1);

// random number generator from 0 to n
const nRand = () => Math.floor(Math.random() * (50 + 1));
