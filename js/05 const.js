// 🚀 Welcome to the Const Keyword Exercise Module! Let's explore the power of constants! 🌟


// The const keyword was introduced in ES6 (2015)

// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope


// 🎯 Exercise 1: Declare Constants
const gravityOnEarth = 9.8;
const daysInAWeek = 7;

// 💡 Constants cannot be reassigned! Uncommenting the line below will result in an error.
// gravityOnEarth = 10;

// 🎯 Exercise 2: Use Constants in Calculations
const height = 20; // in meters
const time = 2; // in seconds

// Calculate the distance fallen under gravity using the formula: distance = 0.5 * gravity * time^2
const distanceFallen = 0.5 * gravityOnEarth * time ** 2;

// 🚀 Displaying Results: Let's see the calculated distance!
console.log(`The object fell ${distanceFallen} meters under gravity in ${time} seconds.`);

// 💡 Constants can be used in calculations just like variables!

// 🎯 Exercise 3: Constants in Arrays
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekendDays = ["Saturday", "Sunday"];

weekdays.push("ExtraDay");

console.log("Updated Weekdays:", weekdays);

const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
};

car.year = 2023;

console.log("Updated Car:", car);

