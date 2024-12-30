// function hello(){
//     console.log("Hello")
// }
// setTimeout(hello,5000)

// --> Call back

// function sum(a,b){
//     console.log("a+b=",a+b)
// }

// x(1,2,sum)

//  function calculator (a,b,sumCallback){
//     sumCallback(a,b)
//  }

//  let calculator=(a,b,sumCallback)=>{
//     sumCallback(a,b)

//  }

//  calculator(1,2,(a,b)=>console.log('a+b=',a+b))

function getData(dataID,getNextData){
    setTimeout(()=>{
        
        console.log("data",dataID)
        if(getNextData)
        {
            getNextData()
        }
    },2000)
}

getData(1,()=>{
    console.log("Getting data 2")
    getData(2,()=>{
        console.log("Getting data 3")
      getData(3)
})

})