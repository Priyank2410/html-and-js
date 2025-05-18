//using objects and prototypes

//example 1

let cars ={
    brand: "mahindra",
    modle: "Thar thunder",
    colours: "black ,white ,grey ,red",
    type: "4X4 and RDW",
    fuel: "diesel and petrole",
    print: function(){
        console.log("Thar only based on =",this.fuel);
    },
};  











//example 2

let employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

let neelesh = {
    salary: 50000,
};

let tejasve = {
    salary: 75000,
    calcTax(){
        console.log("tax rate is 20%");
    }
};

let pari = {
    salary: 20000,
};

let paddu = {
    salary: 5000,
};

neelesh.__proto__ = employee;
tejasve.__proto__ =employee;
pari.__proto__ = employee;
paddu.__proto__ = employee;


//using classes








//example 3

class toyotoCar {

    constructor(vibes , milege){
        console.log//("premium designes only available");
        this.vibes = vibes
        this.milege = milege
      
    }

    stop(){
        console.log("stop");
    }

    start(){
        console.log("start");
    }

    bootSpace(){
        console.log("boot space open and close");
    }

    autoPiloteMode(){
        console.log("APM is activated")
    }
}

let fortuner = new toyotoCar("5 seater ,with luxerius ,VIP and politicens vivbe",12);
// fortuner.setbrand("fortuner");
let inova = new toyotoCar("8 seater ,with luxerious vibes",15);
let glanze = new toyotoCar("5 seater ,with classic and compect vibes",20);












//example 4

class canerBank {

    constructor(surname , age){
        console.log//("get your orignal and two photocoppies of documents")//;
        this.surname = surname;
        this.age = age;
    }

    adharcard(){
        console.log("adharcard");
    }

    pancard(){
        console.log("pancard");
    }

    passportsizePhotos(){
        console.log("photos");
    }

    signature(){
        console.log("sign");
    }
}

let ayush = new canerBank("batham",20);
let satvik = new canerBank("rout",21);
let rajveer = new canerBank("wankhede",19);
let dhruv = new canerBank("saxena",19);
let monica = new canerBank("ariyal",18);
let ankita = new canerBank("sharma",18);
let shashank = new canerBank("pandey",21);
let arush = new canerBank("jain",17);


//Inheritance in js










//example 5

class parent {
    hello(){
        console.log("sey hello to someone");
    }
}

class child extends parent{}
let obj = new child();













//example 6

class human {

    constructor(){
       this.humanbeing = " A good persone is not decleared by graduation but by good habbits";
    }

    wakeup(){
        console.log("wakeup early in the morning");
    }

    workout(){
        console.log("do some exercise in morning");
    }

    bath(){
        console.log("freshup and bath daily");
    }

    prey(){
        console.log("prey to bhagwan for each and every thing");
    }

    lunch(){
        console.log("eat healthy food and take heavy dite every day");
    }
}

class engineer extends human {
     
    constructor(branch){
        super();
        this.branch
    }

    work(){
        console.log("they build their society more emprove and beter then before");
    }
}

let IAMobj = new engineer("Compter Sciencea And Engineering");

//if child and parent have same methode ,child methode will be used//











//practice question 1

let Data = "abc";

class user{

    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    data(){
        console.log("Data",Data);
    }
}

let student1 = new user("shreya","shreya231@gamil.com");
let student2 = new user("sheetal","sheetal132@gmail.com");
let student3 = new user("anubhav","anubhav243@gamil.com");
let student4 = new user("vedant","vedant4231@gmail.com");









//practice question 2

class Admin extends user{
    constructor(name , email){
        super(name , email)
    }
}

let admin1 = new Admin("priyansh","priyanshjoshi24102003@gmail.com");