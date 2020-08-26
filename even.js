// "isEven" Fx takes as its parameter a number and returns a Boolean value 
// representing whether or not the number is even.


const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));


/*
  Above is simplified (best practice, convention)
  
  Below is alternative. We "set our fx return values to new variables" 

    const tenIsEven = isEven(10);
    const elevenIsEven = isEven(11);

    console.log(tenIsEven);
    console.log(elevenIsEven);
*/