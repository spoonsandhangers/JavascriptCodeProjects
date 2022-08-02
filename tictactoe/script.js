// runs immediately (because of the closure) and sets up the board
const board = (() => {
    const theboard = ['_','_','_','_','_','_','_','_','_'];
    const add = (token, position) => {if (theboard[position]=== '_'){
        theboard[position]= token;
        return true;
        } else {return false}};
    const full = false;
    const isFull = () => {if (theboard.includes('_')) { return false} else {return true}};
    const showBoard = () => {console.log(theboard);};
    return{
        add,
        showBoard,
        isFull
    };

    
})();

// sets up the 2 players
const Player = (name, token) => {
    const getName = () => name;
    const getToken = () => token;
    const score = 0;
    return {getName, getToken, score}
}

const game = (() => {
    const turn = () => "one";
    const validturns = () => 0;
    const pOneScore = () => 0;
    const pTwoScore = () => 0;
    const getScores = () => `player one: ${pOneScore} and player two: ${pTwoScore}`;
    return {turn, pOneScore, pTwoScore, getScores, validturns} 
})();




// will add the O or X image to the correct div.
function showToken(position, token){
    document.getElementById(position).innerHTML = `<img src="${token}.png"></img>`;

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
    //addListeners();
    let players = []
    players = getPlayers();
    console.log(`${players[0].getName()} player1 ${players[1].getName()} player2`);

    player1 = players[0];
    player2 = players[1];

    for (let i=1; i<=9; i++){
        // adds event listeners to each div on the board
        document.getElementById(i).addEventListener('click', function() {
            // when one of them is clicked this code runs
            // first the isFull method checks that the board has spaces.
            if (!board.isFull()){
                // if it is player 1s turn
                if (game.turn === "one"){
                    // check to see if there is already a token 
                    // in the space that was clicked.
                    if (board.add(player1.getToken(),i-1)){
                        // if the token was added to the board successfully 
                        // it will also be displayed on the board.
                        showToken(i,player1.getToken());
                        console.log(board.showBoard());
                        // the turn attribute of the game object is
                        // now set to "two"
                        game.turn = "two";
                    } else {
                        // if the token was not addedd successfully there must
                        // be a token there already.
                        console.log("position already taken!");
                    }
                    
                } else {
                    // if it's not player one's turn 
                    // it must be player 2s
                    // same is carried out here for player 2.
                    if (board.add(player2.getToken(),i-1)){
                        showToken(i,player2.getToken());
                        console.log(board.showBoard());
                        game.turn = "one";
                    } else {
                        console.log("position already taken!");
                    }
                }
            } else {
                // if there are no spaces left on the board the game is over.
                console.log("game over");
            }
                
            
            
        })
    }
    



}




//board.add('X',0,0);
//board.showBoard();