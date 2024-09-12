function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber ===0) {
        return 'rock';
    }
    else if (randomNumber ===1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getPlayerChoice (){
    let userChoice = prompt('rock, paper or scissors?');
    return userChoice
}






function game() {
    function playRound() {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        if (computerChoice===playerChoice) {
            return 'its a tie';
        }
        if (computerChoice === 'rock' && playerChoice === 'scissors') {
            computerScore++;
            return 'Computer wins';
        }
        else if (computerChoice ==='rock' && playerChoice === 'paper') {
            playerScore++;
            return 'Player wins';
        }
        else if (computerChoice ==='scissors' && playerChoice === 'rock'){
            playerScore++;
            return 'Player wins';
        }
        else if (computerChoice ==='scissors' && playerChoice === 'paper'){
            computerScore++;
            return 'Computer wins';
        }
        else if (computerChoice ==='paper' && playerChoice === 'rock'){
            computerScore++;
            return 'Computer wins';
        }
        else if (computerChoice ==='paper' && playerChoice === 'scissors'){
            playerScore++;
            return 'Player wins';
        }
        else {
            return 'Invalid input';
        }
    }
    let computerScore = 0;
    let playerScore = 0;
    for (let i=0; i<5; i++) {
        console.log(playRound());
    }
    console.log('Computer score: ' + computerScore);
    console.log('Player score: ' + playerScore);
}

console.log(game());