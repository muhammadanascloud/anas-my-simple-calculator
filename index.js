#!/usr/bin/env node
import inquirer from "inquirer";
// 1)ask user to add 1st number
// 2)ask user to add 2nd number
// 3)ask user to selection one operation (Addition,subtraction,multiplciation,division)
// 4)once user selects an operation perform the operation
// 5)give result
// 1)ask user to add 1st number
let number1 = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Please enter your first number",
    },
]);
// 2)ask user to add 2nd number
let number2 = await inquirer.prompt([
    {
        name: "secondNumber",
        type: "number",
        message: "Please enter your second number",
    },
]);
// 3)ask user to selection one operation (Addition,subtraction,multiplication,division)
let options = await inquirer.prompt([
    {
        name: "operator",
        type: "list",
        message: "Please choose one of the following:",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//condition
// "ADDITION"
if (options.operator === "ADDITION") {
    console.log(number1.firstNumber + number2.secondNumber);
}
// "SUBTRACTION"
if (options.operator === "SUBTRACTION") {
    console.log(number1.firstNumber - number2.secondNumber);
}
// "MULTIPLICATION"
if (options.operator === "MULTIPLICATION") {
    console.log(number1.firstNumber * number2.secondNumber);
}
// "DIVISION"
if (options.operator === "DIVISION") {
    console.log(number1.firstNumber / number2.secondNumber);
}
