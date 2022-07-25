// runs immediately (because of the closure) and sets up the board
const board = (() => {
    const board = [['','',''],['','',''],['','','']];
    const add = (token, row, column) => {if (board[row][column]=== ''){board[row][column]= token;}};
    const showBoard = () => {console.log(board);};
    return{
        add,
        showBoard
    };

    
})();

// sets up the 2 players
const Player = (name, token) => {
    const getName = () => name;
    const getToken = () => token;
    const score = 0;
    return {getName, getToken, score}
}

// adds the listeners to the div s for the board.
function addListeners(){
    for (let i=1; i<=9; i++){
        document.getElementById(i).addEventListener('click', function() {
            addTokenPosition(i);
        })
    }
}

// runs when a div on the board is clicked.  
// a position is passed to it.
function addTokenPosition(id){
    console.log(id);

}

// will add the O or X image to the correct div.
function showToken(position, token){
    document.getElementById(position).innerHTML(`<img src="${token}.png"></img>`);

}

// collects the players names from the input elements
// and creates player objects.
function getPlayers(){
    var nameplayer1 = document.getElementById("player1name");
    var nameplayer2 = document.getElementById("player2name");

    
    const player1 = Player(nameplayer1.value, 'X');
    const player2 = Player(nameplayer2.value, 'O');

    console.log(player1.getName());
    console.log(player2.getName());

    return [player1, player2];

}

// runs when the button is clicked to start the game.
function startGame(){
    addListeners();
    let players = []
    players = getPlayers();
    console.log(`${players[0].getName()} player1 ${players[1].getName()} player2`);

}




//board.add('X',0,0);
//board.showBoard();