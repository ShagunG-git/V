const text = document.getElementById("text");
const image = document.getElementById("image");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");

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

// NO logic
function handleNo() {
    if (navigator.vibrate) navigator.vibrate(200);

    text.innerText = noTexts[noCount];
    image.src = images[noCount];

    noCount++;
    yesBtn.style.transform = `scale(${1 + noCount * 0.25})`;

    if (noCount === noTexts.length) {
        noBtn.style.display = "none";
        yesBtn.style.width = "100%";
    }
}

// YES logic
function handleYes() {
    text.innerText = "Ooo my mutki shona bubu 😘";
    noBtn.style.display = "none";
    image.src = "images/image5.jpeg";

    card.classList.add("hooray");
    startConfetti();

    setTimeout(() => {
        text.innerText = "Mujhse bhi to puch le moti kahi ki 😜";
    }, 3000);
}

noBtn.addEventListener("click", handleNo);
yesBtn.addEventListener("click", handleYes);

// SWIPE SUPPORT
let startX = 0;

card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

card.addEventListener("touchend", e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 80) handleYes();
    if (diff < -80) handleNo();
});

// CONFETTI
function startConfetti() {
    const confetti = document.getElementById("confetti");
    confetti.innerHTML = "";

    for (let i = 0; i < 90; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.background =
            ["#ff4d6d", "#ffd166", "#06d6a0", "#4dabf7"][Math.floor(Math.random() * 4)];
        piece.style.animationDuration = 2 + Math.random() * 3 + "s";
        confetti.appendChild(piece);
    }
}
