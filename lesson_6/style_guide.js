// Style Guide

// # 1
var title = "The Three-Body Problem";
// single quotes instead of double quotes

// # 2
var title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;
// one var declaration per variable

// # 3
var completed = lastPageRead == 400;
// use strict equality

// # 4
if (finishedBook())
  console.log('You have finished reading this book');
// use { } to wrap around multi-line statements

// # 5
function read(pages) {
  console.log('You started reading.');
  for (var i=0; i<pages; i++) {
          var message = 'You read page '+i;
          console.log(message);
  }
}

read(400);
// two spaces for indentation
// all var declared top of function
// show explicit string coersion
// avoid ++ or --
// use named function expressions instead of function declarations

var read = function read(pages) {
  var i;
  var message;

  console.log('You started reading.');
  for (i = 0; i < pages; i += 1) {
    message = 'You read page ' + String(i);
    console.log(message);
  }
};

read(400);

