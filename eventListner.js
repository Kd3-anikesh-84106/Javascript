let mode = document.querySelector("#mode")
let currMode = 'light';
let body = document.querySelector("body")
mode.addEventListener("click",()=>{
    
    if(currMode ==="light")
       { currMode ="dark";
       // document.querySelector("body").style.background='black';
       body.classList.add("dark")
       body.classList.remove("light")
       }
    else
        {currMode="light";
         //   document.querySelector("body").style.background='white';
         body.classList.add("light")
         body.classList.add("dark")
        }
    
        console.log(currMode);
})