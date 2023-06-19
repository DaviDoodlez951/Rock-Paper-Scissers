function getComputerChoice()
{
let array = ["rock", "paper","scissers"];
let indexItems = Math.floor(Math.random() * array.length);
let randomIndex = array[indexItems];
return randomIndex;
}
function playRound(playerSelection, computerSelection)
{
console.log(computerSelection);

    if
(  (playerSelection === "rock" && computerSelection === "scissers")
||
(playerSelection === "scissers" && computerSelection === "paper")
||
(playerSelection === "paper" && computerSelection === "rock"))
{
    console.log(incrementPlayer());
    console.log("You won, Computer loss, cuz you chose " + playerSelection + " and computer chose " + computerSelection);
   }
else if
(  (playerSelection === "scissers" && computerSelection === "rock")
||
   (playerSelection === "paper" && computerSelection === "scissers")
||
   (playerSelection === "rock" && computerSelection === "paper"))
   {
    

    console.log(incrementComputer());
    console.log("You lose, Computer Wins, cuz you chose " + playerSelection + " and computer chose " + computerSelection);
}
else if 
(playerSelection === computerSelection)
{
    console.log("It's a tie match")
} 
else
{
    console.log("this is not a valid option and here is the user input = " + playerSelection + " and here is the computer input = " + computerSelection ) + "." ;
}
}  
let playerScores = 0;
let computerScores = 0;
function incrementPlayer()
{
    let  playerScore = playerScores++;
   return playerScore;
console.log("helo testing");
}
function incrementComputer()
{
    let computerScore = computerScores++
        return computerScore;
}

let playAgain = true;

while (playAgain) {
console.log(getComputerChoice());
let computerSelection = getComputerChoice();
let playerSelection = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
playRound(playerSelection, computerSelection);

console.log("Player-Score: " + playerScores);
console.log("Computer-Score: " + computerScores);

playAgain = confirm("Do you want to play again?");
}