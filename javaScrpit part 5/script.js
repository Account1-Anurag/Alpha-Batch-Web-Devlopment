// // // // let student ={
// // // //     name: "Anurag",
// // // //     Age: "22",
// // // //     marks: "8.5Cgpa"
// // // // };

// // // // // In the object We can declare array

// // // // const items={
// // // //     Name: "Biscuit",
// // // //     price: "10",
// // // //     variant:["spicy","Sweet"]
// // // // };

// // // const post={
// // //     UserName:"@devil_boy_ff890",
// // //     likes:"150",
// // //     repost:"5",
// // //     tags:["@its_aryan_7549","@sitara__00"]
// // // }

// // // Maths Random Number between 1 to 10

// // let random=Math.floor(Math.random()*10)+1;




// let intro=["My","Name","is","Anurag"];
// function concat(intro){
//   let result;
//   for(let i=0;i<intro.length(),i++){
//     result+=intro[i];
//   }
//   return result;
// }

// This Keyword

// const student = {
//   name: "Anurag",
//   age: "20",
//   eng: "96",
//   maths:"78",
//   phy:"76",
//   get_avg(){
//     let avg=(this.eng+this.maths+this.phy)/3;
//     console.log(`${this.name}`)
//   }
// }

// Arrow Function

// const sum= (a,b)=>{
//   return (a+b);
// }
// const cube=n=>{
//   return n*n*n;
// }

// const pow=(a,b)=>{
//   return a**b;
// }

// // Set Time Out Function

// console.log("Hi EveryOne");

// setTimeout(()=>{
//   console.log("Anurag");
// },4000);

// // setTimeout(()=>{},(?=Time delay));

// console.log("My Name is ");


// Set interval 

// let id1=setInterval(()=>{
//   console.log("Hi!! There is C++");
// },4000);

// console.log(id1);

// let id2=setInterval(()=>{
//   console.log("Heloo World");
// },2000);

// console.log(id2);
// THis keyword


// const student={
//   name:"Anurag",
//   age:34,
//   marks:34,
//   getName: function(){
//     console.log(this);
//     return this.name;
//   },
//   getmarks:()=>{
//     console.log(this);
//     return this.marks;
//   },
//   getinfo1: function(){
//     setTimeout(()=>{
//       console.log(this);
//     },2000);
//   },
//   getinfo2: function(){
//     setTimeout(function(){
//       console.log(this);
//     },2000);
//   },



// };

// Practice Question 

// Q1. Write an arrow Function that returns the square of the number

// const square=(n)=>{
//   return n*n;
// };

// Q2. Write a function that prints "Hello World" 5 times in 2 sec

// let id=setInterval(()=>{
//     console.log("Hello World");
  
// },2000);
// setTimeout(()=>{
//   clearInterval(id);
// },10000);


// For- Each Loop

// let arr=[{
//   name:"Anu",
//   marks:87,
// },
// {
//   name:"Shubham",
//   marks:58,
// },
// {
//   name:"Pradeep",
//   marks:76,
// }
// ];
// arr.forEach(element => {
//   console.log(element.marks);
// });

// map /**/ */

// let arr=[1,2,3,4];
// let double=arr.map((el)=>{
//   return el*2;
// });
// let square=arr.map((el)=>{
//   console.log(el*el);
// });


// let arr=[{
//   name:"Anu",
//   marks:87,
// },
// {
//   name:"Shubham",
//   marks:58,
// },
// {
//   name:"Pradeep",
//   marks:76,
// }
// ];

// let cgpa=arr.map((el)=>{
//   return el.marks/10;
// });


// filter

// let nums=[1, 2, 3, 4, 4, 5, 7 ];
// let even=nums.filter((el)=>{
//   return el%2==0;
// });


// Every Function

// let arr=[2,4,7 ,8];
// console.log(arr.some((el)=>el%2!=0));


// Reduce Method

// let arr=[1,2,3,4];
// let final_val=arr.reduce((ans,el)=>{
//    res+el;
// });
// console.log(final_val);



