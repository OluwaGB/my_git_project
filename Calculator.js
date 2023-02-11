window.onload = function() {
  
  let btn = document.getElementById("btn");
let display= document.getElementById("display");
let clear = document.getElementById("clear");
let calc = document.getElementById("calc");


	clear.onclick = function displa(){
		display.value = "0"; 
	}
	btn.onclick = function dispay(){
		display.value = "4";
	}
	calc.onclick = function calculate(){
    display.value = "6" + 4;
}
};

