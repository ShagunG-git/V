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
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image4.jpg"
];

noBtn.addEventListener("click", () => {
    if (noCount < noTexts.length) {
        text.innerText = noTexts[noCount];
        image.src = images[noCount];
        noCount++;
    }

    if (noCount === noTexts.length) {
        noBtn.style.display = "none";
        yesBtn.style.width = "100%";
        yesBtn.style.fontSize = "24px";
    }
});

yesBtn.addEventListener("click", () => {
    text.innerText = "Ooo my mutki shona bubu 😘";
    image.src = "images/image5.jpg";
    noBtn.style.display = "none";

    setTimeout(() => {
        text.innerText = "Mujhse bhi to puch le moti kahi ki 😜";
    }, 10000);
});
