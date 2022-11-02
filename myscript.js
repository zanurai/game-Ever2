//alert("hello")

const jumpSound = new Audio("jump.mp3");
const gameOverSound = new Audio("death.mp3");

let character = document.getElementById("gameEver");
let Ever = document.getElementById("Ever");

function jump() {
    jumpSound.play();

    if (gameEver.classList != "animate") {
        gameEver.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate")

    }, 500);
}

let checkDead = setInterval(function () {

    let gameEverTop = parseInt(window.getComputedStyle(gameEver).getPropertyValue("top"));

    let EverLeft = parseInt(window.getComputedStyle(Ever).getPropertyValue("left"));

    if (EverLeft < 20 && EverLeft > 0 && gameEverTop >= 130) {

        Ever.style.animation = "none";
        Ever.style.display = "none";
        gameOverSound.play();
        alert("u loose");
        return;
    }
}, 100);
