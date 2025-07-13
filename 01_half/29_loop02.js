//for of loop

// ["","",""]
// // [{},{},{}]
// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
    
// }
// const greetings="hello world";
// for (const greet of greetings) {
//     console.log(`Character: ${greet}`);
// }

// Maps

const myMap = new Map()
myMap.set('IN', "India");
myMap.set('USA', "United States of America");
myMap.set('Fr', "France");
myMap.set('IN', "India");
// console.log(myMap);

// for (const [key,value] of myMap) {
//     console.log(key ,':-', value);
// }

const myObj={
    game1: 'cricket',
    game2: 'football'
}

// for (const [key,value] of myObj) {
//     console.log(key ,':-', value);
    
// }

const myObject={
    js:'JavaScript',
    py:'Python',
    rb:'Ruby',
    c:'C++',
    swift:'Swift'
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }

// const programing=["JavaScript", "Python", "Ruby", "C++", "Swift"];
// for (const key in programing) {
//     console.log(programing[key]);
// }

// for (const key in Map) {
//     console.log(key);
// }

const coding=["JavaScript", "Python", "Ruby", "C++", "Swift"];

// coding.forEach(function(val){
//     console.log(val);
    
// })

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function ptintMe(item){
//     console.log(item);
// }
// coding.forEach(ptintMe);

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding=[
    {
        languageName: "JavaScript",
        languageFileName:"js",
    },
    {
        languageName: "python",
        languageFileName:"py",
    },
    {
        languageName: "cpp",
        languageFileName:"c",
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName, item.languageFileName);
})

