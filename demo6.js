// let promise = new Promise((reject,resolve)=>{
//     console.log("I am promise")
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     resolve("fulfilled")
// })

let promise = new Promise((resolve,reject)=>{
    console.log("I am promise")
    reject("error 404")
})