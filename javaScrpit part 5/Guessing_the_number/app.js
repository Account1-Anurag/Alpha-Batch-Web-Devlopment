const max=prompt("Enter the maximum Number to generate the random value");
console.log(max);
const random = Math.floor(Math.random()*max)+1;
// console.log(random);
let guess=prompt("Enter the Number");
while(true){
    if(guess=="quit"){
        console.log("quitting Game");
        break;
    }

    if(guess==random){
        console.log("You choose the correct number !! Congratulation !! The random no. is", random);
        break;
    }else if(guess<random){
        guess=prompt("Your guess is too Small!! please check the larger number");
    }
    else if(random<guess){
        guess=prompt("Your guess is too Small!! please check the larger number");
    }
}

