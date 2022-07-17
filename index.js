const gameBoard = (() => {
    // const board = ['topL', 'topC', 'topR', 'midL', 'midC', 'midR', 'botL', 'botC', 'botR']

    const topL = document.querySelector('.board__topL')
    const topC = document.querySelector('.board__topC')
    const topR = document.querySelector('.board__topR')
    const midL = document.querySelector('.board__midL')
    const midC = document.querySelector('.board__midC')
    const midR = document.querySelector('.board__midR')
    const botL = document.querySelector('.board__botL')
    const botC = document.querySelector('.board__botC')
    const botR = document.querySelector('.board__botR')

    const board = [topL, topC, topR, midL, midC, midR, botL, botC, botR]

    return {
        board,
        topL,
        topC,
        topR,
        midL,
        midC,
        midR,
        botL,
        botC,
        botR
    }
})()

const playGame = () => {
    gameBoard.board.forEach(square => {
        square.addEventListener('click', function () {
            this.textContent = "X"
            computerPlay()
        })
    });
}

const computerPlay = () => {
    const emptySquares = []
    gameBoard.board.forEach(square => {
        if (square.textContent === "") {
            emptySquares.push(square)
        }
    })
    const selection = Math.floor(Math.random() * emptySquares.length)
    console.log(selection, emptySquares)
    gameBoard.board[selection].textContent = "O"
}

playGame()
