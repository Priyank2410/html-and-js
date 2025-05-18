
let ek = document.querySelector("div10");
console.log(ek);

let attriEk = document.querySelector("div10");
console.log(attriEk.getAttribute("id"))

//brake

let dooo = document.querySelector("div9");
console.log(dooo.setAttribute("class","dhandha"));

//brake

let div= document.querySelector("#box");
div.style.backgroundColor = "lightblue";

let button = document.createElement("button")
button.innerText = "vol69";
console.log(button);

let box= document.querySelector("#box");
div.append(button);

//second button

let buttion = document.createElement("button");
buttion.innerText = "vol++"
console.log(buttion);

let box2 = document.querySelector("#box");
div.prepend(buttion);

//before button

let bution = document.createElement("button");
button.innerText = "up button"
console.log(bution);

let box3 = document.querySelector("#box");
div.before(bution);

//heading

let heading = document.createElement("h1");
heading.innerText = "im using elemnrt"
console.log(heading);

let head = document.querySelector("body");
div.before(heading);

//delete div7

let divSeven = document.querySelector("div7");
divSeven.remove();

// practice question

let practiceButton = document.createElement("button");
practiceButton.innerText = "Click Me For Practice";
practiceButton.style.backgroundColor = "pink";
practiceButton.style.color = "red";
console.log(practiceButton);

let practice = document.querySelector("#box")
div.before(practiceButton)

//q2

let para = document.querySelector("p");
console.log(para);