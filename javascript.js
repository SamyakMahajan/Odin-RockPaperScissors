console.log("Hello world");

function getComputerChoice(){
    let ans= Math.floor(Math.random() * 3);
    switch(ans){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
            }
}

function getPlayerChoice(){
    return prompt("Enter your choice");
}

function PlayRound(playerChoice,computerChoice){
    if(playerChoice=="Rock"){
        switch(computerChoice){
            case "Rock":
                return "It's a draw! Both chose Rock!"
            case "Paper":
                return "You Lose! Paper beats Rock"
            case "Scissors":
                return "You Won! Rock beats Scissors" 
        }
    }
    if(playerChoice=="Paper"){
        switch(computerChoice){
            case "Paper":
                return "It's a draw! Both chose Paper!"
            case "Rock":
                return "You Won! Paper beats Rock"
            case "Scissors":
                return "You Lose! Scissors beat Paper" 
        }
    }
    if(playerChoice=="Scissors"){
        switch(computerChoice){
            case "Scissors":
                return "It's a draw! Both chose Rock!"
            case "Paper":
                return "You Won! Scissors beat Paper"
            case "Rock":
                return "You Lose! Rock beats Scissors" 
        }
    }
}

function main(){
    let computerChoice=getComputerChoice()
    let str=getPlayerChoice()
    let playerChoice=str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log(PlayRound(playerChoice,computerChoice))
}
main()