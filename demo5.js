// function hello(){
//     console.log("Hello")
// }
// setTimeout(hello,5000)

// --> Call back

function sum(a,b){
    console.log("a+b=",a+b)
}

 calculator(1,2,sum)

 function calculator (a,b,sumCallback){
    sumCallback(a,b)
 }
