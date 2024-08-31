/* Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.*/

let nums=[1,2,3,4,5];

const Square = nums.map((el)=>el*el);
console.log(Square);

let sum=Square.reduce((res,el)=>res+el);

let avg=sum/nums.length();
console.log(avg);


/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.*/

let numbers=[2,3,4,5,6,78];
console.log(numbers.map((el) => el+5));

/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array.*/

let strings=["Anurag","Adarsh","pradeep","Shubham","Priya"];
console.log(strings.map((el)=>el.toUpperCase()));

/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/

const doubleAndreturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((el)=>el*2),

]

/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.*/

const mergeObjects=(obj1,obj2)=>({
    ...obj1,...obj2
});
mergeObjects({a:1,b:2,},{c:3,d:4});