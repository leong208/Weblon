// server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const symbols = ["🍒", "🍋", "🍊", "🍇", "⭐", "💎"];

app.post("/api/spin", (req, res) => {
  const reels = [
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
  ];

  const win = reels.every((val) => val === reels[0]);
  res.json({ reels, result: win ? "jackpot" : "lose" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
