const text = document.getElementById("text");
const image = document.getElementById("image");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let noCount = 0;

const noTexts = [
    "Pitti kar dunga mutki kahi ki 😠",
    "Dubara soch le 😤",
    "Pakka? 😑",
    "Baat nahi karunga mai 😒"
];

const images = [
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg",
    "images/image4.jpeg"
];

noBtn.addEventListener("click", () => {
    text.innerText = noTexts[noCount];
    image.src = images[noCount];

    noCount++;

    yesBtn.style.transform = `scale(${1 + noCount * 0.3})`;

    if (noCount === noTexts.length) {
        noBtn.style.display = "none";
        yesBtn.style.width = "100%";
    }
});

yesBtn.addEventListener("click", () => {
    text.innerText = "Ooo my mutki shona bubu 😘";
    noBtn.style.display = "none";

    image.src = "images/image5.jpeg";
    image.style.filter = "none";

    document.querySelector(".card").classList.add("hooray");

    startConfetti();

    setTimeout(() => {
        text.innerText = "Mujhse bhi to puch le moti kahi ki 😜";
    }, 10000);
});



function startConfetti() {
    const confetti = document.getElementById("confetti");
    confetti.innerHTML = "";

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti-piece");
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.background =
            ["#ff4d6d", "#ffd166", "#06d6a0", "#4dabf7"][
            Math.floor(Math.random() * 4)
            ];
        piece.style.animationDuration = 2 + Math.random() * 3 + "s";
        confetti.appendChild(piece);
    }
}
