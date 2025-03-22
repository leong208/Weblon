document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000); // Splash screen akan hilang dalam 3 detik
});// Fungsi untuk mengganti mode gelap
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Cek apakah pengguna sudah mengaktifkan mode gelap sebelumnya
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Tambahkan event listener pada tombol
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Simpan preferensi pengguna ke localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider");
    let index = 0;

    function nextSlide() {
        index++;
        if (index > 2) { index = 0; }
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
});
