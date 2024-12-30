// let promise = new Promise((reject,resolve)=>{
//     console.log("I am promise")
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     resolve("fulfilled")
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     reject("error 404")
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     resolve("Successfull")
// })

// let getPromise = promise
// getPromise.then((res)=>{
//     console.log("promise fulfilled",res)
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     reject("network error")
// })

// let getPromise = promise
// getPromise.catch((err)=>{
//     console.log("rejected",err)
// })

/* Parallel processing of data


function asyncFunc1() {
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Some data1.......")
        resolve("done")
       },2000)
    })
    
}

function asyncFunc2() {
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Some data2....")
        resolve("done")
       },4000)
    })
    
}

console.log("Fetching data1....")

let p1 = asyncFunc1()

p1.then((res)=>{
    console.log("promise fulfilled",res)

})

console.log("Fetching data2....")

let p2 = asyncFunc2()

p2.then((res)=>{
    console.log("promise fulfilled",res)

})
    */

/* calling function one after another


function asyncFunc1() {
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Some data1.......")
        resolve("done")
       },2000)
    })
    
}

function asyncFunc2() {
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Some data2....")
        resolve("done")
       },4000)
    })
    
}

console.log("Fetching data1....")

let p1 = asyncFunc1()

p1.then((res)=>{
    console.log("promise fulfilled",res)
    let p2 = asyncFunc2()
    console.log("Fetching data2....")
    p2.then((res)=>{
        console.log("promise fulfilled",res)
    
    })

})
*/