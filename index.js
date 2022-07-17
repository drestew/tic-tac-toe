const gameBoard = (() => {
    const board = ['topL', 'topC', 'topR', 'midL', 'midC', 'midR', 'botL', 'botC', 'botR']

    const topL = document.querySelector('.board__topL')
    const topC = document.querySelector('.board__topC')
    const topR = document.querySelector('.board__topR')
    const midL = document.querySelector('.board__midL')
    const midC = document.querySelector('.board__midC')
    const midR = document.querySelector('.board__midR')
    const botL = document.querySelector('.board__botL')
    const botC = document.querySelector('.board__botC')
    const botR = document.querySelector('.board__botR')

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

const selectSquare = function () {
    gameBoard.topL.textContent = "X"
}

const playGame = () => {
    gameBoard.topL.addEventListener('click', selectSquare)
}

playGame()