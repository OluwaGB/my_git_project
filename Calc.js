let firstNumber= prompt("enter the first number ");//This alows you to enter the first number of your choice

let op = prompt("enter first number"); //this gives room to the variable op being assigned any operator character of our choice
let secondNumber = prompt("enter second number");//This allow the entering of number of your choice
/* The below if and else if statement with various arguement,with each arguement performing depending on its operator.
The "op" variable which allows the input of the desired operator will then perform the entered operators's arguement,and if none of the ooerator is input then the if statement gets to end and the else statement is later print out
if(op == "+"){
	document.write ( +firstNumber + +secondNumber);
}
else if(op != "+" && op == "-"){
	document.write(+firstNumber - +secondNumber);
}
else if(op != "+" && op!= "-" && op == "*"){document.write(+firstNumber * secondNumber);
	
}
else if
	(op != "+" && op!= "-" && op!= "*" && op == "/"){document.write(+firstNumber/secondNumber);
	
}
else if(op != "+" && op!= "-" && op != "*" && op!= "/"){document.write("invalid operator")}

;
