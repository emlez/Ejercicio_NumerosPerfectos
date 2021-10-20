const sum = (a, b) => a + b;

function perfectNumber() {
  // Brings the input from the user.
  let number = document.getElementById("perfectInput");
  number = number.value;

  // Paragraph to display discount to the user.
  let result = document.getElementById("result");
  result.className = "showResult";

  // Array for aliquot sum.
  let divisors = [];

  if (number <= 1) {
    result.innerText = "Try with a something greater than one.";
  } else {
    // Original perfectNumber function.
    for (let i = 0; i <= number / 2; i++) {
      if (number % i == 0) {
        divisors.push(i);
      }
    }
    const sumDivisors = divisors.reduce(sum);
    if (sumDivisors !== 0 && sumDivisors == number) {
      result.innerText = `${number} is a perfect number
    
      Since its positive divisors: ${divisors} sum up to ${number}`;
    } else {
      result.innerText = `${number} is not a perfect number, try another one.`;
    }
  }
}
