let divisors = [];
const sum = (a, b) => a + b;

function perfectNumber(number) {
  for (let i = 0; i <= number / 2; i++) {
    if (number % i == 0) {
      divisors.push(i);
    }
  }
  const sumDivisors = divisors.reduce(sum);
  if (sumDivisors !== 0 && sumDivisors == number) {
    console.log(`${number} is a perfect number`);
    console.log(`Since its positive divisors: ${divisors} sum up to ${number}`);
  } else {
    console.log(`${number} is not a perfect number, try another one.`);
  }
}

perfectNumber(28);
