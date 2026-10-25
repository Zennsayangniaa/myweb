
const openLetter = document.getElementById("openLetter");

const letter = document.getElementById("letter");

// Tombol buka surat cinta
openLetter.addEventListener("click", function () {

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {

        openLetter.innerHTML =
            "💖 Tutup Surat Cinta";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } else {

        openLetter.innerHTML =
            "💌 Buka Surat Untuk Dania";

    }

});

// Membuat hati berjatuhan
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"
    ];

    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    // Posisi hati secara acak
    heart.style.left =
        Math.random() * 100 + "vw";

    // Kecepatan jatuh
    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    // Ukuran hati
    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    document.getElementById("hearts").appendChild(heart);

    // Menghapus hati setelah animasi
    setTimeout(function () {

        heart.remove();

    }, 6000);

}

// Membuat hati setiap 400 milidetik
setInterval(createHeart, 400);
