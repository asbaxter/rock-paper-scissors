var playAgain = true;

function game (){

    while (playAgain = true){

    var validChoice = false;

    while (validChoice === false){

        var playerChoice = window.prompt("Type rock, paper, or scissors: ")


        if (playerChoice === 'rock' || playerChoice === 'ROCK' || playerChoice == 'Rock'){
            var choice = 0;
            validChoice = true;
        }
        else if (playerChoice === 'paper' || playerChoice === 'PAPER' || playerChoice === 'Paper'){
            var choice = 1;
            validChoice = true;
        } 
        else if (playerChoice === 'scissors' || playerChoice === 'SCISSORS' || playerChoice === 'Scissors'){
            var choice = 2;
            validChoice = true;
        }
        else {
            alert(playerChoice + " is not a valid option, try again")
        }
    };

    var compChoice = Math.floor(Math.random() * 3)

        if (compChoice === 0){
            var computerChoice = 'rock';
        }
        else if (compChoice === 1){
            computerChoice = 'paper';
        }
        else {
            computerChoice = 'scissors'
        }

    if (compChoice === choice){
        alert("You picked " + playerChoice + " the computer picked " + computerChoice)
        alert("Its a Tie")
    }
    else if (compChoice === 0 && choice === 1){
        alert("You picked " + playerChoice + " the computer picked " + computerChoice)
        alert("You Win!!!")
    }
    else if (compChoice === 0 && choice === 2){
        alert("You picked " + playerChoice + " the computer picked " + computerChoice)
        alert("You Lose :(")
    }
    else if (compChoice === 1 && choice === 0){
        alert("You picked " + playerChoice + " the computer picked " + computerChoice)
        alert("You Lose :(")
    }
    else if (compChoice === 1 && choice === 2){
        alert("You picked " + playerChoice + " the computer picked " + computerChoice)
        alert("You Win!!!")
    }
    else if (compChoice === 2 && choice === 0){
        alert("You picked " + playerChoice + " the computer picked " + computerChoice)
        alert("You Win!!!")
    }
    else {
        alert("You picked " + playerChoice + " the computer picked " + computerChoice)
        alert("You Lose :(")
    }

    validChoice = false;

    while (validChoice === false) {

        again = window.prompt("Would you like to play again? yes/no");
    
        if (again === 'no' || again === 'NO' || again === 'No'){
            return playAgain = false;
        }
        else if (again === 'yes' || again === 'YES' || again === 'Yes') {
            validChoice = true;
        }   
        else {
            alert(again + " is not a valid selection, try again");
        }
    }

};
};

game();




