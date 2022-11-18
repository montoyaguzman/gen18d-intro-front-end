import { sum, substract } from "./modules/sum-substract.js";
import * as Operator from "./modules/multipli-divide.js";

function main() {
  const num1 = 20;
  const num2 = 5;
  const sumResult = sum(num1, num2);
  console.log(sumResult);

  const substractResult = substract(num1, num2);
  console.log(substractResult);

  const multiplyResult = Operator.multiply(num1, num2);
  console.log(multiplyResult);

  const divideResult = Operator.divide(num1, num2);
  console.log(divideResult);
}

main();
