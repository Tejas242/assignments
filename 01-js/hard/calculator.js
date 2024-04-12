/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running 

  ✓ addition (6 ms)
    ✓ subtraction (1 ms)
    ✓ multiplication (1 ms)
    ✓ division (28 ms)
    ✓ clear (2 ms)
    ✓ calculate addition and multiplication (2 ms)
    ✓ calculate division in expression (2 ms)
    ✓ calculate subtraction in expression (2 ms)
    ✓ calculate complex expression (2 ms)
    ✓ calculate complex expression with spaces (3 ms)
    ✕ calculate expression with decimals (3 ms)
    ✓ calculate expression with invalid characters (5 ms)
    ✕ calculate division by zero (3 ms)
    ✓ multiplication with negative numbers (2 ms)
    ✓ division with decimal numbers (5 ms)
    ✕ expression with invalid parentheses (4 ms)
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by 0");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    let tokens = expression.split(" ");
    let stack = [];
    let operators = ["+", "-", "*", "/"];
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        let num2 = stack.pop();
        let operator = stack.pop();
        let num1 = stack.pop();
        stack.pop(); // pop "("
        stack.push(this.calculateExpression(num1, num2, operator));
      } else if (operators.includes(token)) {
        stack.push(token);
      } else {
        stack.push(Number(token));
      }
    }
    return stack[0];
  }

  calculateExpression(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
    }
  }
}

module.exports = Calculator;
