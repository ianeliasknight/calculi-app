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