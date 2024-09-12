let inp=document.querySelector("inp");

inp.addEventListener("keyup",function(event){
    console.log("Key =", event.key);
    console.log("code =", event.code);
    console.log("key was pressed");
});


let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted");
});
