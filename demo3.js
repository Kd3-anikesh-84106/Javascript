// let div = document.querySelector("div")
// console.log(div)

// let id =div.getAttribute('id')
// console.log(id)
// let getid = div.setAttribute("id","hemant")
// console.log(getid)
// console.log(div.setAttribute('name','Vanmanush'))

// let name = div.getAttribute('name')
// console.log(name)

//  let para=document.querySelector('p')
//  console.log(para.getAttribute('class'))
//  console.log()

//  let id = document.querySelector('#Box')
//  id.style.backgroundColor="green"
//  id.style.color="blue"
//  id.style.fontSize= "30px"
// id.innerText = "Hello" 

// let newBtn = document.createElement("Button")
// newBtn.innerText ="Click ME!"

// let div = document.querySelector("div")
// div.append(newBtn)
// div.prepend(newBtn)
// div.before(newBtn)
// div.after(newBtn)

let btn = document.createElement("Button")
btn.innerText ="Click Me!"
btn.style.color="white"
btn.style.backgroundColor="Red"

let body = document.querySelector("body")
body.prepend(btn)

let paragraph=document.querySelector('p')
paragraph.classList.add("newClass")