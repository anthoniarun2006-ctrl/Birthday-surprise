function showSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.style.display = "block";

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    // Birthday celebration hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
}

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = ["❤️", "💕", "💗", "💖", "🩷"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Floating hearts in background
setInterval(createHeart, 700);