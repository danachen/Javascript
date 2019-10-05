// Formatting bands
// Input: an array of hashes
// Change the countries to Canada, capitalize band names, remove dots from country names

// Solution 1: with side effects
// var bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// function processBands(data) {
//   data.map(function(band) {
//     changeCountry(band);
//     capitalizeNames(band);
//     removeDots(band);
//   });
//   return data;
// }

// function changeCountry(band) {
//   return band.country = 'Canada';
// } // Note value of a key can be changed

// function capitalizeNames(band) {
//   band.name = band.name.split(' ').map(function(word) {
//     return word = word[0].toUpperCase() + word.substring(1, word.length);
//   }).join(' ');
// } // problematic when using the same approach as changing the value of a key, strings can NOT be mutated so need to 
// // save the changed value in the same key-value pair

// function removeDots(band) {
//   return band.name = band.name.replace(/\W /g, '');
// } // same as above, string is not mutable

// console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

// Solution 2: without side effects

function processBands(data) {
  var newData = data.map(function(band) {
    var newCountry = changeCountry(band);
    var capitalizedName = capitalizeNames(band.name);
    var newName = removeDots(capitalizedName);
    return {
      name: newName,
      country: newCountry,
      active: band.active, 
    };
  });
  return newData;
}

function changeCountry(band) {
  return band.country = 'Canada';
}

function capitalizeNames(name) {
  var newWord = [];
  name.split(' ').forEach(function(word) {
    newWord.push(word[0].toUpperCase() + word.substring(1, word.length));
  });
  return newWord.join(' ');
}

function removeDots(name) {
  var newName = name.replace(/\./g, '')
  return newName;
}

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));
console.log(bands);