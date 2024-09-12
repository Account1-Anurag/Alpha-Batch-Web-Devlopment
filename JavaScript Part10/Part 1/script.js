// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=function () {
//     console.log("button was clicked");
// };

// To select Multiple Button

// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onClick=sayhello;
//     btn.onmouseenter=function(){
//         console.log("Mouse Get Enter");
//     }
// }
// function sayhello(){
//     alert("Hello!");
// }
// function sayName(){
//     alert("Anurag Vasu");
// }

// Event listner Property


let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListner("click",sayhello);
    btn.addEventListner("click",sayName);
    btn.addEventListner("dbclick",function(){
        console.log("You Double Clicked me");
    });
}
function sayhello(){
    alert("Hello!");
}
function sayName(){
    alert("Anurag Vasu");
}

