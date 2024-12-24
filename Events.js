let btn1 = document.querySelector('#btn1');
// btn1.onclick = () =>{
 
//     console.log("Button was clciked ")
//     let a =25;
//     a++
//     console.log(a);
// }

// let div1 = document.querySelector('#div1')

// div1.onmouseover =() =>{

//     console.log("you are inside the div box")
// }

// btn1.onclick =(e) =>{

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target)
//     console.log(e.clientX,e.clientY)

btn1.addEventListener("click",()=>{

    console.log("Button was clicked in listner 1")
})

btn1.addEventListener("click",()=>{

    console.log("Button was clicked in handler 2")
})