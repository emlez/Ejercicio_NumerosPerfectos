let divisibleNumbers = [];
const sum = (a, b) => a + b;

function perfectNumber(number) {
  for (let i = 0; i <= number / 2; i++) {
    if (number % i == 0) {
      divisibleNumbers.push(i);
    }
  }
  const sumDivisibleNumbers = divisibleNumbers.reduce(sum);
  if (sumDivisibleNumbers !== 0 && sumDivisibleNumbers == number) {
    console.log(`${number} is a perfect number.`);
  } else {
    console.log(`${number} is not a perfect number, try another one.`);
  }
}

perfectNumber(28);
