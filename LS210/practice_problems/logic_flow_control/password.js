/* Write a password guessing program that tracks how many times the user enters the wrong password. 
If the user enters the password wrong three times, log 'You have been denied access.' 
and terminate the program. If the password is correct, log 'You have successfully logged in.' and end the program.
*/

function guessPassword() {
  password = 'password';
  user_input = '';
  logger = 0;

  for (logger = 1; logger <= 3; logger +=1) {
    user_input = window.prompt('Enter the password: ');
    if (user_input != password) {
      continue;
    }
    else {
      console.log('You have successfully logged in.');
      return;
    }
  }
  console.log('You have been denied access.');
}

guessPassword();