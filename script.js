// Simple Backend for Slot Machine Website const express = require("express"); const mongoose = require("mongoose"); const bcrypt = require("bcrypt"); const jwt = require("jsonwebtoken"); require("dotenv\config");

const app = express(); app.use(express.json());

// --- MongoDB Connection --- mongoose.connect("mongodb://localhost:27017/slotgame", { useNewUrlParser: true, useUnifiedTopology: true, });

// --- User Schema --- const User = mongoose.model("User", new mongoose.Schema({ username: String, passwordHash: String, balance: { type: Number, default: 1000 }, games: [{ reels: [String], result: String, date: Date }], }));

// --- Middleware --- const auth = async (req, res, next) => { const token = req.headers["authorization"]; if (!token) return res.status(401).json({ error: "Unauthorized" }); try { const decoded = jwt.verify(token, "SECRET"); req.user = await User.findById(decoded.id); next(); } catch { res.status(401).json({ error: "Invalid token" }); } };

// --- Register User --- app.post("/api/register", async (req, res) => { const { username, password } = req.body; const passwordHash = await bcrypt.hash(password, 10); const user = new User({ username, passwordHash }); await user.save(); res.json({ message: "User registered" }); });

// --- Login User --- app.post("/api/login", async (req, res) => { const { username, password } = req.body; const user = await User.findOne({ username }); if (!user || !(await bcrypt.compare(password, user.passwordHash))) { return res.status(400).json({ error: "Invalid credentials" }); } const token = jwt.sign({ id: user._id }, "SECRET"); res.json({ token }); });

// --- Slot Spin --- const symbols = ["🍒", "🍋", "🍊", "🍇", "⭐", "💎"];

app.post("/api/spin", auth, async (req, res) => { if (req.user.balance < 10) return res.status(400).json({ error: "Low balance" });

const reels = [ symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], ];

const win = reels.every((val) =>

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
