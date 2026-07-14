document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const boardEl = document.getElementById("board");
  const scoreboard = document.getElementById("scoreboard");
  const timerDisplay = document.getElementById("timerDisplay");
  const movesDisplay = document.getElementById("movesDisplay");
  const pairsDisplay = document.getElementById("pairsDisplay");
  const winModal = document.getElementById("winModal");
  const winMsg = document.getElementById("winMsg");
  const replayBtn = document.getElementById("replayBtn");
  const menuBtn = document.getElementById("menuBtn");
  const bgStars = document.getElementById("bgStars");
  const CHARACTERS = [
    { id: "mario", src: "/src/imagens/characters/mario.png", label: "Mario" },
    { id: "luigi", src: "/src/imagens/characters/luigi.png", label: "Luigi" },
    { id: "peach", src: "/src/imagens/characters/peach.png", label: "Peach" },
    { id: "toad", src: "/src/imagens/characters/toad.png", label: "Toad" },
  ];
  const ITEMS = [
    { id: "mushroom", emoji: "🍄", label: "Cogumelo" },
    { id: "star", emoji: "⭐", label: "Estrela" },
    { id: "coin", emoji: "💰", label: "Moeda" },
    { id: "flower", emoji: "🌸", label: "Flor" },
    { id: "shell", emoji: "🐚", label: "Concha" },
    { id: "bomb", emoji: "💣", label: "Bomba" },
    { id: "trophy", emoji: "🏆", label: "Troféu" },
    { id: "heart", emoji: "❤️", label: "Coração" },
    { id: "boot", emoji: "🦕", label: "Yoshi" },
    { id: "castle", emoji: "🏰", label: "Castelo" },
    { id: "flag", emoji: "🏁", label: "Bandeira" },
    { id: "fire", emoji: "🔥", label: "Fogo" },
  ];
  const DIFFICULTY = {
    easy: { cols: 4, pairs: 8 },
    medium: { cols: 4, pairs: 10 },
    hard: { cols: 4, pairs: 12 },
  };
  let cards = [];
  let flipped = [];
  let locked = false;
  let moves = 0;
  let matchedPairs = 0;
  let totalPairs = 0;
  let timerSec = 0;
  let timerInterval = null;
  let currentDifficulty = "medium";
  let currentTheme = "characters";
  function spawnStars() {
    bgStars.innerHTML = "";
    for (let i = 0; i < 70; i++) {
      const s = document.createElement("span");
      s.style.cssText = `
        left: ${Math.random() * 100}%;
        top:  ${Math.random() * 100}%;
        --dur:   ${2 + Math.random() * 4}s;
        --delay: ${-Math.random() * 5}s;
      `;
      bgStars.appendChild(s);
    }
  }
  function showToast(msg, duration = 1200) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove("show"), duration);
  }
  function startTimer() {
    clearInterval(timerInterval);
    timerSec = 0;
    timerInterval = setInterval(() => {
      timerSec++;
      const m = String(Math.floor(timerSec / 60)).padStart(2, "0");
      const s = String(timerSec % 60).padStart(2, "0");
      timerDisplay.textContent = `${m}:${s}`;
    }, 1000);
  }
  function stopTimer() { clearInterval(timerInterval); }
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function buildDeck(numPairs) {
    const allItems = [ ...CHARACTERS, ...ITEMS ];
    const pool = shuffle(allItems).slice(0, numPairs);
    const itemsOnly = currentTheme === "items" ? shuffle(ITEMS).slice(0, numPairs) : pool;
    const deck = [];
    itemsOnly.forEach((item) => {
      for (let c = 0; c < 2; c++) {
        deck.push({
          pairId: item.id,
          src: item.src || null,
          emoji: item.emoji || null,
          label: item.label,
          matched: false,
          el: null,
        });
      }
    });
    return shuffle(deck);
  }
  function renderBoard(config) {
    boardEl.innerHTML = "";
    boardEl.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`;
    cards = buildDeck(config.pairs);
    totalPairs = config.pairs;
    matchedPairs = 0;
    moves = 0;
    flipped = [];
    locked = false;
    updateScoreboard();
    cards.forEach((card, idx) => {
      const cardEl = document.createElement("div");
      cardEl.className = "card";
      cardEl.dataset.idx = idx + 1;
      cardEl.setAttribute("role", "button");
      cardEl.tabIndex = 0;
      cardEl.innerHTML = `
        <div class="card-inner">
          <div class="card-face card-back"></div>
          <div class="card-face card-front">
            ${card.src
          ? `<img src="${card.src}" alt="${card.label}" draggable="false">`
          : `<span style="font-size:38px;line-height:1">${card.emoji}</span>`
        }
          </div>
        </div>`;
      card.el = cardEl;
      cardEl.addEventListener("click", () => onCardClick(card));
      cardEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onCardClick(card); }
      });
      boardEl.appendChild(cardEl);
    });
  }
  function onCardClick(card) {
    if (locked) return;
    if (card.matched) return;
    if (flipped.includes(card)) return;
    flipCard(card, true);
    flipped.push(card);
    if (flipped.length === 2) {
      locked = true;
      moves++;
      movesDisplay.textContent = moves;
      checkMatch();
    }
  }
  function flipCard(card, faceUp) {
    if (faceUp) card.el.classList.add("flipped");
    else card.el.classList.remove("flipped");
  }
  function checkMatch() {
    const [a, b] = flipped;
    const isMatch = a.pairId === b.pairId;
    if (isMatch) {
      setTimeout(() => {
        a.matched = true;
        b.matched = true;
        a.el.classList.add("matched");
        b.el.classList.add("matched");
        matchedPairs++;
        updateScoreboard();
        flipped = [];
        locked = false;
        if (matchedPairs === totalPairs) onWin();
      }, 500);
    } else {
      a.el.classList.add("error");
      b.el.classList.add("error");
      setTimeout(() => {
        a.el.classList.remove("error");
        b.el.classList.remove("error");
        flipCard(a, false);
        flipCard(b, false);
        flipped = [];
        if (currentDifficulty !== "easy") shuffleUnmatched();
        locked = false;
      }, 900);
    }
  }
  function shuffleUnmatched() {
    const unmatched = cards.filter(c => !c.matched);
    if (unmatched.length === 0) return;
    unmatched.forEach(c => {
      c.el.style.transition = "transform 0.2s, opacity 0.2s";
      c.el.style.transform = "scale(0.7)";
      c.el.style.opacity = "0.3";
    });
    setTimeout(() => {
      const positions = unmatched.map(c => c.el);
      const shuffledData = shuffle(unmatched.map(c => ({ pairId: c.pairId, src: c.src, emoji: c.emoji, label: c.label })));
      unmatched.forEach((card, i) => {
        const data = shuffledData[i];
        card.pairId = data.pairId;
        card.src = data.src;
        card.emoji = data.emoji;
        card.label = data.label;
        const front = card.el.querySelector(".card-front");
        if (data.src) {
          front.innerHTML = `<img src="${data.src}" alt="${data.label}" draggable="false">`;
        } else {
          front.innerHTML = `<span style="font-size:38px;line-height:1">${data.emoji}</span>`;
        }
        card.el.setAttribute("aria-label", "Carta " + (card.el.dataset.idx || ""));
        card.el.style.transform = "";
        card.el.style.opacity = "";
        card.el.style.transition = "";
      });
    }, 250);
  }
  function updateScoreboard() {
    movesDisplay.textContent = moves;
    pairsDisplay.textContent = `${matchedPairs} / ${totalPairs}`;
  }
  function onWin() {
    stopTimer();
    const m = String(Math.floor(timerSec / 60)).padStart(2, "0");
    const s = String(timerSec % 60).padStart(2, "0");
    winMsg.innerHTML = `
      Você encontrou todos os <strong>${totalPairs} pares</strong>!<br>
      ⏱ Tempo: <strong>${m}:${s}</strong> &nbsp;|&nbsp; 🃏 Jogadas: <strong>${moves}</strong>
    `;
    winModal.hidden = false;
  }
  function startGame() {
    currentDifficulty = document.getElementById("difficulty").value;
    currentTheme = document.getElementById("theme").value;
    const config = DIFFICULTY[currentDifficulty];
    winModal.hidden = true;
    scoreboard.hidden = false;
    renderBoard(config);
    startTimer();
  }
  startBtn.addEventListener("click", startGame);
  replayBtn.addEventListener("click", () => { winModal.hidden = true; startGame(); });
  menuBtn.addEventListener("click", () => {
    winModal.hidden = true;
    stopTimer();
    scoreboard.hidden = true;
    boardEl.innerHTML = "";
  });
  spawnStars();
});