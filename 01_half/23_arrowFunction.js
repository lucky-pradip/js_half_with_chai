const user ={
    username:"Pradip",
    price:134,
    welcomeMsg:function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }

}
// user.welcomeMsg()

// user.username="sam"
// user.welcomeMsg()

// console.log(this)

// function chai(){
//     let username="Pradiip"
//     console.log(this.username)
    
// }
// chai()

const chai =() =>{
    let username="Pradip"
    console.log(this)
}



// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// const addTwo=(num1,num2)=>  num1+num2
// const addTwo=(num1,num2)=>  (num1+num2)

const addTwo=(num1,num2)=>  ({username:"Prdaip"})

console.log(addTwo(8,9))


