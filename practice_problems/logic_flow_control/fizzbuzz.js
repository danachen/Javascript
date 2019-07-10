/* Write a function that iterates over the integers from 1 to 100, inclusive. 
For multiples of three, log "Fizz" to the console. 
For multiples of five, log "Buzz". 
For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.
*/

function fizzBuzz() {
  for (i = 0; i <=100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Another more concise option

function fizzbuzz() {
  var message;
  var i;

  for (i = 1; i <= 100; i += 1) {
    message = '';

    if (i % 3 === 0) {
      message += 'Fizz';
    }

    if (i % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || i);
  }
}
