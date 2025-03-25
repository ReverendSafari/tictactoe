//STATE
/*
const gameState = Array(9).fill("")


*/

//LOGIC
/*
Event listener on each box?
    event: Onclick
        If box isn't filled
            Update array and fill
        If box is filled
            DO NOTHING

*/

//Create Array to hold game state 
let gameActive = true;
const gameBoard = document.querySelector('.gameBoard');
const turnBox = document.querySelector('.turnBox');
let gameState = Array(9).fill("");
const Marker = {
    state: 'X',
    switchState() {
        this.state == 'X' ? (this.state = 'O') : (this.state = 'X');
    },
    getState() {
        return this.state;
    }
};

//Check if rows indicate victory
const checkRows = () => {
    return (
        ((gameState[0] + gameState[1] + gameState[2] == 'XXX') || (gameState[0] + gameState[1] + gameState[2] == 'OOO')) ||
        ((gameState[3] + gameState[4] + gameState[5] == 'XXX') || (gameState[3] + gameState[4] + gameState[5] == 'OOO')) ||
        ((gameState[6] + gameState[7] + gameState[8] == 'XXX') || (gameState[6] + gameState[7] + gameState[8] == 'OOO')) 
    );
}

const checkCols = () => {
    return (
        ((gameState[0] + gameState[3] + gameState[6] == 'XXX') || (gameState[0] + gameState[3] + gameState[6] == 'OOO')) ||
        ((gameState[1] + gameState[4] + gameState[7] == 'XXX') || (gameState[1] + gameState[4] + gameState[7] == 'OOO')) ||
        ((gameState[2] + gameState[5] + gameState[8] == 'XXX') || (gameState[2] + gameState[5] + gameState[8] == 'OOO')) 
    );
}

const checkDiags = () => {
    return (
        ((gameState[0] + gameState[4] + gameState[8]) == 'XXX' || (gameState[0] + gameState[4] + gameState[8] == 'OOO')) ||
        ((gameState[2] + gameState[4] + gameState[6]) == 'XXX' || (gameState[2] + gameState[4] + gameState[6] == 'OOO'))
    );
}

//Check victory
const checkVictory = () => {
    if (checkRows() || checkCols() || checkDiags()) {
        turnBox.textContent = `Player ${Marker.getState()} Wins!`;
        gameActive = false //Disable game
    }
}

const resetGame = () => {
    gameState = Array(9).fill("") //Reset Logical State
    for (let i = 0; i < 9; i++) { //Reset Visual State of Board
        let currentBox = document.querySelector(`.b${i}`);
        currentBox.textContent = ""
    }
    turnBox.textContent = "Player X's Turn" //Reset Dialogue
    gameActive = true; //Reactivate game
    
}

gameBoard.addEventListener('click', (event) => {
    if (!gameActive) { return }; //Make sure game is active

    const clickedObject = event.target; //Get the element
    if (!clickedObject.classList.contains("gameBox")) { return }; //Make sure element is game tile

    const boxNumber = clickedObject.classList[1][1]; //Get box number
    if (gameState[boxNumber] != "") { return }; //Only continue if empty

    gameState[boxNumber] = Marker.getState(); //Update logical state
    clickedObject.textContent = Marker.getState(); //Update DOM state
    turnBox.textContent = Marker.getState() == 'X' ? "Player O's Turn":"Player X's Turn"
    checkVictory(); //Check for victory
    Marker.switchState(); //Switch marker

        
})

