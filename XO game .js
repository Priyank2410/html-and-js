let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector(".newgame");
let container = document.querySelector(".mesg-container");
let mesg = document.querySelector(".mesg");

let turnX = true;

let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnX === true) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

let checkwinner = () => {
    for (let pattern of winpattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                console.log("winner", position1);
                showWinner(position1);
            }
        }
    }
};

const showWinner = (winner) => {
    mesg.innerText = `Congratulations, Winner is ${winner}`;
    container.classList.remove("hide");
    disabledboxes();

};

let disabledboxes = (box)=>{
    for(let box of boxes){
        box.disabled = true;
        }

};

let enabledboxes = (box) =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetgame = ()=>{
    turnX = true;
    enabledboxes ();
    container.classList.add("hide");
}
 


newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
