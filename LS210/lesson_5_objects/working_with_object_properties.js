/* 1. Write a function named objectHasProperty that takes two arguments: an Object and a String. 
The function should return true if the Object contains a property with the name given by the String, false otherwise. */

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// Solution 1
var petKeys = Object.keys(pets);
console.log(petKeys);
function objectHasProperty(pets, animal) {
  for (var i = 0; i < petKeys.length; i++) {
    if (petKeys[i] == animal) {
      return true;
    }
  }
  return false;
}

// Solution 2
// If iterating over keys have the problem that the `for..in` loop returns the index of element instead of element itself
// var petKeys = Object.keys(pets); // this can't be used in this case
function objectHasProperty(pets, animal) {
  // iterate over every key in the object
  for (key in pets) {
    // if the item being searched is found in the key anywhere
    if (animal.indexOf(key) != -1) {
      // then return true immediately
      return true;
    }
  }
  // otherwise false
  return false;
}

// Official solution
// No need to iterate over the object since there's only one element getting checked
function objectHasProperty(object, propertyName) {
  var keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

/* 2. Write a function named incrementProperty that takes two arguments: an Object and a String. 
If the Object contains a property with the specified name, the function should increment the value of that property. 
If the property does not exist, the function should add a new property with a value of 1. 
The function should return the new value of the property.

- If the key doesn't already exist, add the key and value
- If the key does exist, increment the value based on input
*/

var wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(winIncrement, name) {
  winsKeys = Object.keys(wins);
  // can't run for (var win in wins) since it will iterate over the object x times, also not necessary since we are only checking for one name
  if (winsKeys.indexOf(name) == -1) {
    // wins.name won't work here
    wins[name] = 1;
  } else {
    console.log(wins[name]);
    wins[name] += 1;
  }
return wins[name];
}

// Official solution
function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

/* 3. Write a function named copyProperties that takes two Objects as arguments. 
The function should copy all properties from the first object to the second. 
The function should return the number of properties copied.
*/


// ?Buggy solution: `sal` does not hold on to the value assigned to it
var hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(source, destination) {
  destination = Object.assign({}, source);
  size = Object.keys(destination).length;
  return size;
}

// Official solution
function copyProperties(source, destination) {
  var count = 0;
  var property;
  for (property in source) {
    destination[property] = source[property];
    count += 1;
  }

  return count;
}

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

// Buggy code debugged
// val sal; is hosited to the top but undefined, the value of `sal` is set to equal local var `destination`
// assign() returns a new object, so destination and sal are unconnected
var hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(source, destination) {
  destination = Object.assign({}, source);
  size = Object.keys(destination).length;
  sal = destination;
  return size;
}

var sal;
console.log(copyProperties(hal, sal));  // 2
sal;                       // { model: 9000, enabled: true }

/* 4. Write a function named wordCount that takes a single String as an argument. 
The function should return an Object that contains the counts of each word that appears in the provided String. 
In the returned Object, you should use the words as keys, and the counts as values.
- iterate over the string
- each element becomes the key, the count becomes the value
*/

function wordCount(input) {
  var counted = {};
  var inputArray = input.split(" ");

  for (var i = 0; i < inputArray.length; i++ ) {
    // check to see if the key already exists
    if (!counted[inputArray[i]]) {
      counted[inputArray[i]] = 0;
    }
    counted[inputArray[i]]+= 1;
  }
  return counted;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }