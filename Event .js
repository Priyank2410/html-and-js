// js methode

let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log("btn 1 was clicked");
    let a = 24;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("yeh i make noise already");

}

// addEventListener methode

magic.addEventListener("mouseover",()=>{
    console.log("shree ram");
})

// revision

let name = document.querySelector("#name");
name.onclick = ()=>{
    console.log("joshi");
}

art.addEventListener("mouseover",()=>{
    console.log("because you touches the heart or canvs with brush tools")
})

// practice question

let mode = document.querySelector("#mode");
let currmode = "light";
mode.onclick=()=>{
    if (currmode === "light"){
        currmode = "dark"
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currmode = "light"
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currmode,"(pls click to change the mode)");
}