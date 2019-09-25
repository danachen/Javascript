// Transformation

// Ex 1: how map is used

// var count = [1, 2, 3, 4, 5];
// var doubled = count.map(function(number, index, array) {
//   return number * 2;
// });
// console.log(doubled);

// Ex 2: building it

function myMap(array, func) {
  var newArr = [];
  array.forEach(function(element) {
    newArr.push(func(element));
  });
  return newArr;
}

// var plusOne = function (n) { return n + 2; };
// console.log(myMap([1, 2, 3, 4], plusOne));

// Ex 3: another example

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

var books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

var getTitle = function (book) {
  return book['title'];
};

console.log(getBooksTitle(books));
/* console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]
*/