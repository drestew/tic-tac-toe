const gameBoard = (() => {
    const squares = {
        topL: { name: 'topL', el: document.querySelector('.board__topL'), value: false },
        topC: { name: 'topC', el: document.querySelector('.board__topC'), value: false },
        topR: { name: 'topR', el: document.querySelector('.board__topR'), value: false },
        midL: { name: 'midL', el: document.querySelector('.board__midL'), value: false },
        midC: { name: 'midC', el: document.querySelector('.board__midC'), value: false },
        midR: { name: 'midR', el: document.querySelector('.board__midR'), value: false },
        botL: { name: 'botL', el: document.querySelector('.board__botL'), value: false },
        botC: { name: 'botC', el: document.querySelector('.board__botC'), value: false },
        botR: { name: 'botR', el: document.querySelector('.board__botR'), value: false },
    }

    const winCombos = {
        topL: [[squares.topC, squares.topR], [squares.midL, squares.botL], [squares.midC, squares.botR]],
        topC: [[squares.topL, squares.topR], [squares.midC, squares.botC]],
        topR: [[squares.topL, squares.topC], [squares.midC, squares.botL], [squares.midR, squares.botR]],
        midL: [[squares.topL, squares.botL], [squares.midC, squares.midR]],
        midC: [[squares.topL, squares.botR], [squares.topC, squares.botC], [squares.topR, squares.botL], [squares.midL, squares.midR]],
        midR: [[squares.topR, squares.botR], [squares.midL, squares.midC], [squares.topR, squares.botR]],
        botL: [[squares.topL, squares.midL], [squares.topR, squares.midC], [squares.botC, squares.botR]],
        botC: [[squares.botL, squares.botR], [squares.topC, squares.midC]],
        botR: [[squares.topL, squares.midC], [squares.topR, squares.midR], [squares.botL, squares.botC]],
    }

    const board = [squares.topL, squares.topC, squares.topR, squares.midL, squares.midC, squares.midR, squares.botL, squares.botC, squares.botR]
    const emptySquares = []

    return {
        board,
        winCombos,
        emptySquares
    }
})()

const playGame = () => {
    gameBoard.board.forEach(square => {
        square.el.addEventListener('click', function () {
            this.textContent = "X"
            square.value = true
            checkWinner(square)
            computerPlay()
        })
    });
}

const computerPlay = () => {
    gameBoard.board.forEach(square => {
        if (square.value !== true) {
            gameBoard.emptySquares.push(square)
        }
    })
    const selection = Math.floor(Math.random() * (9 - gameBoard.emptySquares.length) + gameBoard.emptySquares.length)
    console.log(gameBoard.emptySquares, selection)
    gameBoard.board[selection].el.textContent = "O"
    gameBoard.board[selection].value = true
    gameBoard.emptySquares = []
}

const checkWinner = (curSquare) => {
    const winningSquares = gameBoard.winCombos[curSquare.name]
    winningSquares.forEach(squareGroup => {
        if (squareGroup[0].value === true && squareGroup[1].value === true) {
            console.log('winner')
        }
    })
}


playGame()