while (true) {
    const num1 = prompt("Enter first number: ");
    const num2 = prompt("Enter second number: ");
    const operand = prompt("Enter The Action(+ ; - ; * ; / ): ");
    switch (operand)
                {
                    case "-":
                        answer = num1 - num2;
                        break;
                    case "+":
                        answer = num1 + num2;
                        break;
                    case "/":
                        answer = num1 / num2;
                        break;
                    case "*":
                        answer = num1 * num2;
                        break;
                    default:
                        answer = 0;
                        console.log("Invalid Action!!!");
                        break;
                }
    console.log("\n Result: " + num1 + " " + operand + " " + num2 + " = " + answer); 
    const status = prompt("\n Do you want new example?(Y/N)")
    if (status=="Y") {
        console.clear();
    }
    else if (status=="N") {
        break;
    } 

}