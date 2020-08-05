// Note: to test, one block must be deleted due to dual declaration of 'chorus' 
// 1st block in section

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");


// 2nd block in section

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

/* 
"The while statement, similar to an if, takes a condition, and as long as this condition evaluates to true, the code inside the block will be executed again and again. 
To make sure we don't execute this code forever, we've declared a repeat variable that starts at 0 and increments by 1 at every repetition of the block."
...
"Like blocks following if statements, any code can go inside the block following a while"
*/ 

