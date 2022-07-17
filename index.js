const gameBoard = (() => {
    const topL = { el: document.querySelector('.board__topL'), value: false }
    const topC = { el: document.querySelector('.board__topC'), value: false }
    const topR = { el: document.querySelector('.board__topR'), value: false }
    const midL = { el: document.querySelector('.board__midL'), value: false }
    const midC = { el: document.querySelector('.board__midC'), value: false }
    const midR = { el: document.querySelector('.board__midR'), value: false }
    const botL = { el: document.querySelector('.board__botL'), value: false }
    const botC = { el: document.querySelector('.board__botC'), value: false }
    const botR = { el: document.querySelector('.board__botR'), value: false }

    const winMap = new Map()
    winMap.set(topL, [[topC, topR], [midL, botL], [midC, botR]])
    winMap.set(topC, [[topL, topR], [midC, botC]])
    winMap.set(topR, [[topL, topC], [midC, botL], [midR, botR]])
    winMap.set(midL, [[topL, botL], [midC, midR]])
    winMap.set(midC, [[topL, botR], [topC, botC], [topR, botL], [midL, midR]])
    winMap.set(midR, [[topR, botR], [midL, midC], [topR, botR]])
    winMap.set(botL, [[topL, midL], [topR, midC], [botC, botR]])
    winMap.set(botC, [[botL, botR], [topC, midC]])
    winMap.set(botR, [[topL, midC], [topR, midR], [botL, botC]])

    const board = [topL, topC, topR, midL, midC, midR, botL, botC, botR]

    return {
        board,
        // topL,
        // topC,
        // topR,
        // midL,
        // midC,
        // midR,
        // botL,
        // botC,
        // botR,
        winMap,
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
    const emptySquares = []
    gameBoard.board.forEach(square => {
        if (square.el.textContent === "") {
            emptySquares.push(square)
        }
    })
    const selection = Math.floor(Math.random() * emptySquares.length)
    gameBoard.board[selection].el.textContent = "O"
}

const checkWinner = (curSquare) => {
    console.log(gameBoard.winMap)
}

playGame()