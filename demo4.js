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

class Toyota{

    start(){
        console.log("Start");
    }
    stop(){
        console.log("stop")
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new Toyota();
fortuner.setBrand("fortuner");

let lexus = new Toyota();
lexus.setBrand("lexus");