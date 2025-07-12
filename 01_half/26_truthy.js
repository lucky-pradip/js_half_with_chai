const userEmail=[]

if(userEmail){
    console.log("Truthy");
}else{
    console.log("Falsy");
}

//falsy values
// 0, "", null, undefined, NaN, false,-0,0n,BigInt(0)

//truthy values
// "0", " ", [], {}, true, 1, -1, BigInt(),'false', function(){}, 

if(userEmail.length==0){
    console.log("Array is empty")

}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

let vall;

val1=5?? 10
console.log(val1); 

// condition? trueValue : falseValue
