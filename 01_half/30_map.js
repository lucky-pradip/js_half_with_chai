// const myNnumber=[1,2,3,4,5,6,7,8,9,10];

// //  const  newNums=myNnumber.map( (num)=> num+10)

// const newNums=myNnumber.map((num)=> num*10).map((num)=>num+1).filter((num)=> num>=40)
// console.log(newNums);

const myNum=[1, 2, 3]

//  const mytotal=myNum.reduce(function(acc,currval){
//     console.log(`accumulator: ${acc}, current value: ${currval}`);
//     return acc+currval;
//  },0)

// const mytotal=myNum.reduce((acc,curr)=>acc+curr,0)

// console.log(mytotal);

const shoppingCart=[
{
    itemName:"js cource",
    price: 199,
},
{
    itemName:"ph dev",
    price: 199,
},
{
    itemName:"data science",
    price: 199,
}
]

 const priceToPay=shoppingCart.reduce((acc,item)=>item.price,0)

console.log(priceToPay);
