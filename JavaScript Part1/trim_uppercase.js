// // // let msg="   hello  ";
// // // // we have to trim and Uppercase of the msg

// // // // then we can use two method at one time.

// // // let value=msg.trim().toUpperCase();
// // // console.log(value);

// // // slice

// // let msg="Hellow";
// // msg.slice(2,4);

// // // replace

// // msg.replace("H","T");

// // // repeat

// // msg.repeat(5);

// for(let i=0;i<10;i++){
//     console.log(i);
// }

let fav_movie = "Stree";
let guess = prompt("Enter Your Fav Movie");
while (guess != fav_movie) {
  if (guess == "quit") {
    console.log("Thank you for Playing");
    break;
  }

  console.log("Wrong Answer");
  guess = prompt("Enter Your Fav Movie");
}
