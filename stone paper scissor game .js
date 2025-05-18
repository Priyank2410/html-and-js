let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let userS = document.querySelector("#user-score");
let compS = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    
    choice.addEventListener("click",() =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);                           //1
    })
})

let playGame = (userChoice)=>{
    console.log("user-choice =" , userChoice)          
    let compChoice = gencompChoice();                    //2
    
    console.log("comp-choice =" , compChoice);          //4

    if(userChoice === compChoice){
        drawGame();                                     //5
    }else{
        let userwin = true;
        if(userChoice === "stone"){
            //paper //scissor
           userwin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //scissor //stone
            userwin = compChoice === "scissor" ? false : true;
        }else {
            //stone //paper
            userwin = compChoice === "stone" ? false :true;
        }
        showWinner(userwin , userChoice , compChoice);                           //7
    }
}

let gencompChoice = ()=>{
    let options = ["stone","paper","scissor"];
    let ranIdx = Math.floor (Math.random()*3);
    return options [ranIdx];                            //3
}



let drawGame = ()=>{
    console.log("The Game Was DRAW");                   //6
    message.innerText = `Ohhh DRAW ! Play Again`;
    message.style.backgroundColor = "black";

}

let showWinner = (userwin , userChoice , compChoice)=>{                          
    if(userwin === true){
        userScore++;
        userS.innerText = userScore;
        // console.log("You Win The Match");
        message.innerText = `You WIN ! ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }else{
        compScore++;
        compS.innerText = compScore;
        // console.log("You Lose!");
        message.innerText = `You LOSE ! ${compChoice} beats ${userChoice}`;                  //8
        message.style.backgroundColor = "red";
    }
}