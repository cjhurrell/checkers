console.log("JS loaded");

let turn = "p1";

const startingPositions = {
  "a-1": "⛀",
  "a-3": "⛀",
  "a-5": "⛀",
  "a-7": "⛀",
  "b-2": "⛀",
  "b-4": "⛀",
  "b-6": "⛀",
  "b-8": "⛀",
  "c-1": "⛀",
  "c-3": "⛀",
  "c-5": "⛀",
  "c-7": "⛀",

  "f-2": "⛂",
  "f-4": "⛂",
  "f-6": "⛂",
  "f-8": "⛂",
  "g-1": "⛂",
  "g-3": "⛂",
  "g-5": "⛂",
  "g-7": "⛂",
  "h-2": "⛂",
  "h-4": "⛂",
  "h-6": "⛂",
  "h-8": "⛂",
};

function setBoard() {
  // clear board first
  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = "";
  });

  // place pieces
  for (const id in startingPositions) {
    const cell = document.getElementById(id);
    if (cell) {
      cell.textContent = startingPositions[id];
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const gameModeSelect = document.getElementById("Game-mode");

  gameModeSelect.addEventListener("change", () => {
    const mode = gameModeSelect.value;

    if (mode !== "GM") {
      setBoard();
    }

    if (mode === "PVC" && turn === "p2") {
      setTimeout(computerMove, 500);
    }
  });

  document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", () => {
      console.log("Clicked:", cell.id);
    });
  });
});
