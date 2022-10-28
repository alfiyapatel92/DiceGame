var player1 = prompt("Enter Player 1 name: ")
var player2 = prompt("Enter Player 2 name: ")

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
 document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");



document.querySelector(".dice .player1").innerHTML = player1;
document.querySelector(".dice .player2").innerHTML = player2;

if ( randomNumber1 >  randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩 " + player1 +" win "
}
else if ( randomNumber1 <  randomNumber2){
  document.querySelector("h1").innerHTML = player2+" win 🚩"
}
else{
  document.querySelector("h1").innerHTML = "Draw!"
}
