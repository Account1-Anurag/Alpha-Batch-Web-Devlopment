console.log(1+1);
console.log(1+8);
console.log("Anurag");

// Template Literals

// We can use `` (back ticks) for printing
let a=1;
let b=4;

let output=`The total sum of the numbers is ${a+b} ruppes `;
console.log(output);


// Operators

let c=1;
let d=2;
console.log(c*d);

// alert message

// alert("This website is in danger");

// prompt message

// prompt("Enter your name");

// Trim Message
// this method is used to remove the spaces in the first and middle not in the middle.
// It is used like
let value="   Anurag   ";
let ans=value.trim();
console.log(ans); // we return only anurag not an spaces


// strings are immutable in JS

// There are two more method which is for lowercase and for uppercase

let v="AnurAG";
let v_upper=v.toUpperCase();
let v_lower=v.toLowerCase();

// to find the index of the string

let Value_of_string="IloveCoding";
Value_of_string.indexOf(Coding);