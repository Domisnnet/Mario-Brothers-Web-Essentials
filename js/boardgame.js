document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.getElementById("createBtn");
  const rollBtn = document.getElementById("rollBtn");
  const boardEl = document.getElementById("board");
  const status = document.getElementById("status");
  let players = [];
  let totalCells = 0;
  let positions = [];
  let currentPlayer = 0;
  const characterFiles = ["mario", "luigi", "peach", "toad"];

  function buildBoard(size) {
    boardEl.innerHTML = "";
    boardEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    totalCells = size * size;
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.className =
        "cell" + ((Math.floor(i / size) + i) % 2 ? " square-dark" : "");
      cell.dataset.index = i;
      boardEl.appendChild(cell);
    }
  }

  function placeTokens() {
    positions = Array(players.length).fill(0);
    for (let i = 0; i < players.length; i++) {
      const token = document.createElement("div");
      token.className = `token p${i + 1}`;
      const characterName = characterFiles[i] || "mario";
      token.style.backgroundImage = `url("./imagens/characters/${characterName}.png")`;
      token.style.backgroundSize = "cover";
      token.style.backgroundPosition = "center";
      const cell = boardEl.querySelector(`[data-index='0']`);
      if (cell) cell.appendChild(token);
    }
  }

  function moveToken(playerIndex, steps) {
    const old = positions[playerIndex];
    const next = (old + steps) % totalCells;
    positions[playerIndex] = next;
    // remove token from old cell
    const oldCell = boardEl.querySelector(`[data-index='${old}']`);
    const nextCell = boardEl.querySelector(`[data-index='${next}']`);
    if (!oldCell || !nextCell) return;
    const token = oldCell.querySelector(`.token.p${playerIndex + 1}`);
    if (token) {
      nextCell.appendChild(token);
    }
  }

  createBtn.addEventListener("click", () => {
    const p = Number(document.getElementById("players").value) || 2;
    const s = Number(document.getElementById("size").value) || 8;
    players = Array.from({ length: p }, (_, i) => ({ id: i + 1 }));
    buildBoard(s);
    placeTokens();
    rollBtn.disabled = false;
    currentPlayer = 0;
    status.textContent = `Vez do jogador ${currentPlayer + 1}`;
  });

  rollBtn.addEventListener("click", () => {
    if (players.length === 0) return;
    const roll = Math.floor(Math.random() * 6) + 1;
    moveToken(currentPlayer, roll);
    status.textContent = `Jogador ${currentPlayer + 1} rolou ${roll}`;
    currentPlayer = (currentPlayer + 1) % players.length;
    setTimeout(() => {
      status.textContent = `Vez do jogador ${currentPlayer + 1}`;
    }, 800);
  });
});
