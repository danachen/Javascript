// Modify the function from the previous exercise so that it ignores non-alphabetic characters 
// when determining whether a letter should be upper or lower case.
// Non-alphabetic characters should still be included in the output string, 
// but should not be counted when determining the appropriate case.

// the empty space does not count when it comes to indexes

function staggeredCase(input) {

}


console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
