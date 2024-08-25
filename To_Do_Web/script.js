let todo=[];

let req=prompt("Enter the operation");

while(true){
    if(req=="quit"){
        console.log("Quitting App");
        break;
    }
    if(req=="list"){
        console.log("_________________");
        for(list of todo){
            console.log(list);
        }
        console.log("_________________");
    }else if(req=="add"){
        let task=prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    }else if(req=="del"){
        let inx=prompt("Enter the index value you want ot delete ");
        todo.splice(inx,1);
    }
    else{
        console.log("You did the Wrong Input");
        req=prompt("Please Enter the Operation Again");
    }
    req=prompt("Enter the operation");
}