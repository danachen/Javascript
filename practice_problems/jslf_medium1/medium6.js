function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger(); // calls the logger function, which logs variable status, which is debuggin
  // deBugIt creates a local scope called status, function logger, the inner function logger has access to the var declared in the scope of
  // its outer function, due to lexical scoping rules
}

debugIt();