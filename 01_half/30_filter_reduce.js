const coding=["JavaScript", "Python", "Ruby", "C++", "Swift"];

const values=coding.forEach( (item)=>{
    // console.log(item);
    return item;
});

// console.log(values);
// const myNnumber=[1,2,3,4,5,6,7,8,9,10];
//  const newNums =myNnumber.filter((num)=>{
//     return num>4;
//  })
const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=[]
myNums.forEach((num)=>{
    if(num > 4) {
        newNums.push(num);
    }
})


console.log(newNums);

