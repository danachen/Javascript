function fibonacci(input) {
  var firstNum = 1;
  var secondNum = 1;
  for (i = 2; i <= input; i++) {
    console.log(`first number is ${firstNum}`);
    console.log(`second number is ${secondNum}`);
    firstNum = secondNum;
    secondNum += firstNum;
    
  }
  return secondNum;
}

console.log(fibonacci(4));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050


// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	F11	F12	F13	F14	F15	F16	F17	  F18	  F19	  F20
// 0	 1	1	  2	   3	 5	8	  13	21	34	55	 89	144	233	377	610	987	1597	2584	4181	6765