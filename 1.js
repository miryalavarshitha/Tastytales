console.log("hello world")
let a 
console.log(a)
a=10
console.log(typeof(a))
a="strf"
console.log(typeof(a))
//funtion
function sumOf(a,b)
{
    let sum=a+b
    return sum
}
let result=sumOf(10,20)
console.log(result)
let sumOf2=function(a,b){
    let s=a+b
    return s
}
let re=sumOf2(100,200)
console.log(re)
//arrow function
let sumOF3=(a,b)=>a+b;
let sm=sumOF3(35,35)
console.log(sm)
//arrays
let arr=[10,20,30,40]
for(let x=0;x<arr.length;x++)
{
    console.log(arr[x]);
}
let person ={
    firstname:"varshitha",
    secondname:"miryala",
    age:19
};
for (let k in person){
    console.log(person[k])
}