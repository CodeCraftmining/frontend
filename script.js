//practice Qs2
let gameNum = 25;

let userNum = prompt("Guess the game number :");

while(userNum != gameNum)  { //game
userNum = prompt("you entered wrong number. Gauess again :");
}


console.log("congratulations, you entered the right number");