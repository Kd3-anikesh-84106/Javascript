// const employee = {
//     calcTax(){
//         console.log("Tax rate is 10%")
//     },

//     // calcTax2:function(){
//     //     console.log("tax rate is 10%")
//     // }

// }

// const karanArjun ={
//     salary:50000
// } 

// // if we want 
//  karanArjun.__proto__=employee;

// class Toyota{

//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("stop")
//     }

//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new Toyota();
// fortuner.setBrand("fortuner");

// let lexus = new Toyota();
// lexus.setBrand("lexus");

// class Person{
//     constructor(name){

//         console.log("Enter parent constructor")
//         this.species="Homo spaiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat")
//     }
// }

// class Engineer extends Person{

//     constructor(){

//         console.log("Enter child Constructor")
//         super(name) //to invoke parent constructor
       
//     }
//     work(){
//         console.log("Solve prb,build something")
//     }
// }

// let Engobj = new Engineer("Anikesh")

class college{

    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("name =",this.name)
        console.log("email =",this.email)
        
    }
}

class Admin extends college{

    editData(){
        
    }
}

let studObj = new college("Anikesh","anikesh@ymail.com")