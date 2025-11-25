"use stict";
// Day 3 – Variables & Data Types

// 1. Using let (value can change)
let myName = "Ian Knight";        // replace with your name
let age = 24;                       // change to your age
console.log("Name:", myName);
console.log("Age:", age);

// 2. Using const (value NEVER changes)
const birthYear = 2001;             // you can't reassign this later
console.log("Born in:", birthYear);

// 3. Basic data types demo
let isLearning = true;              // boolean
let favoriteNumber = 11;             // number
let favoriteQuote = "Get It Done";   // string (quotes!)
let nothing = null;                 // intentional empty value
let notDefined;                     // undefined (not set yet)

console.log("Is learning?", isLearning);
console.log("Favorite number:", favoriteNumber);
console.log("Quote:", favoriteQuote);
console.log("Nothing:", nothing);
console.log("Not defined:", notDefined);

// 4. Quick experiment – try to break const (you'll see error)
// birthYear = 2000; 
// birthYear = birthYear + 1;  // ← uncomment this line → red error in console
// 5. Reassigning let (allowed)
age = age + 1;
console.log("Age next birthday:", age);



// ───── DAY 4: LOOPS & CONDITIONALS ─────

// 1. Simple for loop – count 1 to 10
console.log("Counting 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Even / Odd checker with if-else
console.log("\nEven or Odd (1-10):");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is EVEN");
  } else {
    console.log(i + " is ODD");
  }
}

// 3. Bonus: FizzBuzz (interview classic – do it in < 2 min)
console.log("\nFizzBuzz 1-15:");
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 4. While loop just for fun (counts backward)
console.log("\nCountdown with while:");
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
console.log("BLAST OFF 🚀");

// TODO: I will fully understand these tomorrow when I reach them in freeCodeCamp