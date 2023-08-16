var currentPlayer = "X";
var gameBoard = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
    if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].textContent = currentPlayer;
        document.getElementsByClassName("cell")[index].classList.add(currentPlayer);
        checkWin();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById("board").classList.add("disabled");
            document.getElementById("board").classList.add(currentPlayer);
            return;
        }
    }
}

function resetGame() {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].classList.remove("X");
        cells[i].classList.remove("O");
    }
    document.getElementById("board").classList.remove("disabled");
    document.getElementById("board").classList.remove("X");
    document.getElementById("board").classList.remove("O");
}