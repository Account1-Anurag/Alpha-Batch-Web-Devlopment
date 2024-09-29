h1=document.querySelector("h1");

function changecolor(color,delay,nextcolorchange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolorchange) nextcolorchange();
    },delay);
}

changecolor("red",1000,()=>{
    changecolor("orange",1000,()=>{
        changecolor("blue",1000);
    });
});


// Promises

function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internet=Math.floor(Math.random()*10)+1;
        if(internet>4){
            success("success : data was saved");
        }else{
            failure("Failure : Weak Connection");
        }
    });
}


// Then Catch

savetoDB("apna college")
 .then(()=>{
    console.log("Promise was resolved");
 })
 .catch( () => {
    console.log("Promise was rejected");
 });