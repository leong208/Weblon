document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000); // Splash screen akan hilang dalam 3 detik
});
