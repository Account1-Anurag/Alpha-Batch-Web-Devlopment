let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    // console.log("generate Random color");
    let h1=document.querySelector("h1");
    let randomcolor=getRandom();
    h1.innerText=randomcolor;

    let div=document.querySelector("div");
    div.style.backgroundColor=getRandom();

    console.log("color updated"); 
});

function getRandom(){
    let red=Math.floor(Math.random()*225);
    let blue=Math.floor(Math.random()*225);
    let green=Math.floor(Math.random()*225);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}