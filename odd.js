const isOdd  = function (num) {
  return num % 2 === 1;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

/*

Original attempt: tried to just replace the 2 from isEven with 1 but it said both numbers were true (3, 8)
Second attempt: replaced the remainder of '0' with '1'

test
*/
