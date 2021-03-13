// There must be one @ sign.
// The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not contain any other characters.
// The domain part must contain two or more components with a single dot (.) between each component. 
// Each component must contain one or more letters (A-Z, a-z) only.

function oneAtSign(email) {
  return email.split('').filter(letter=> letter=='@').length == 1;
}

function localValidation(localPart) {
  var indexes = localPart.split('').map(letter => letter.match(/[A-Za-z0-9]/));
  return indexes.filter(letter => letter == null).length == 0;
}

function checkDomainParts(domainPart) {
  var domainStr = domainPart.split('.');
  return domainStr.length > 1 && domainStr.filter(el => el == '').length == 0;
}

function domainValidation(domainPart) {
  if(checkDomainParts(domainPart)) {
    var firstDomainPart = domainPart.split('.')[0].split('').map(letter => letter.match(/[A-Za-z]/));;
    var secondDomainPart = domainPart.split('.')[1].split('').map(letter => letter.match(/[A-Za-z]/));;
    return firstDomainPart.filter(letter => letter == null).length == 0 && secondDomainPart.filter(letter => letter == null).length == 0;
  } else {
    return false;
  };
}

function isValidEmail(email) {
  var localPart = email.split('@')[0];
  var domainPart = email.split('@')[1];
  // console.log(domainPart);
  return oneAtSign(email) && localValidation(localPart) && domainValidation(domainPart);
}

// Or use this regex pattern
// return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);


console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false