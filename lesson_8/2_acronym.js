// Acronym
// First need to cut the text along space or -
// Then grab the first letter of every word

function acronym(string) {
  var stringArr = string.split(/\-| / );
  return stringArr.map(function(word) {
    return word[0].toUpperCase();
  }).join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"