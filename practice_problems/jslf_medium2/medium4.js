function makeDoubler(caller) {
  return function doubler(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}
var doubler = makeDoubler('Victor');
console.log(doubler(5));