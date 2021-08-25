const container = document.querySelector(".container");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const vs = document.getElementById("vs");
let retry = document.getElementById("retry");
let status = document.getElementById("status");

let rockclone = rock.cloneNode(true);
let paperclone = paper.cloneNode(true);
let scissorsclone = scissors.cloneNode(true);

container.appendChild(rockclone);
container.appendChild(paperclone);
container.appendChild(scissorsclone);

rockclone.addEventListener("click" , playRock);

paperclone.addEventListener("click" , playPaper);

scissorsclone.addEventListener("click" , playScissors);

retry.addEventListener("click", reset = () => window.location.reload());


function playRock() {
    container.innerHTML = '';
    container.appendChild(rockclone);
    container.appendChild(vs);
    let random = rand();
    randomPlay(random);
    if(random == 1) {
        draw();
    } else if(random == 2) {
        lose();
    } else if(random == 3) {
        win();
    }
}

function playPaper() {
    container.innerHTML = '';
    container.appendChild(paperclone);
    container.appendChild(vs);
    let random = rand();
    randomPlay(random);
    if(random == 1) {
        win();
    } else if(random == 2) {
        draw();
    } else if(random == 3) {
        lose();
    }
}

function playScissors() {
    container.innerHTML = '';
    container.appendChild(scissorsclone);
    container.appendChild(vs);
    let random = rand();
    randomPlay(random);
    if(random == 1) {
        lose();
    } else if(random == 2) {
        win();
    } else if(random == 3) {
        draw();
    }
}

function randomPlay (random) {
    if(random == 1) {
        container.appendChild(rock);
        removeClick();
    } else if(random == 2) {
        container.appendChild(paper);
        removeClick();
    } else if(random == 3) {
        container.appendChild(scissors);
        removeClick();
    }
}

function removeClick () {
    rockclone.removeEventListener("click" , playRock);

    paperclone.removeEventListener("click" , playPaper);

    scissorsclone.removeEventListener("click" , playScissors);

    retry.style.display = "block";

}

function draw() {
    status.innerHTML = "DRAW";
}

function win() {
    status.innerHTML = "YOU WIN";
}

function lose() {
    status.innerHTML = " YOU LOSE";
}


var rand = () => Math.floor((Math.random() * 3) + 1);
