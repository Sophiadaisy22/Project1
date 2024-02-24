
const Button = document.getElementById("Button");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");

let min = 1;
let max = 6;
let randomNum1;
let randomNum2;

Button.onclick = function(){
   randomNum1= Math.floor(Math.random() * max) + min;
   randomNum2= Math.floor(Math.random() * max) + min;
   label1.textContent = randomNum1;
   label2.textContent = randomNum2;
}