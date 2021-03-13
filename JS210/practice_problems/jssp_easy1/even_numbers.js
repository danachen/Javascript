// Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

function oddNumbers() {
  for(i = 1; i <= 99; i+=1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

oddNumbers();