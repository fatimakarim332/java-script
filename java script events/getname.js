
let para= document.getElementById("hi")

export let name =() =>{
let  students1 =["ayesha","fabiha","amna ","maryam"]
students1.forEach((element)=>{
para.innerText += element

})};

// sychronous
console.log("task1");
console.log("task2");
console.log("task3");

// asychronous
console.log("task1");
setTimeout(()=>{
    console.log("task2");
}, 2000);
console.log("task3");




// // asychrouns counter
// let count = document.getElementById("button")
// count.addEventListener("click",function () {
//     setTimeout(()=>{
//     // console.log(1 ,2,3 ,4,5,6);
// for(let i=50;i<=100;i++){
// console.log(i);
// }
// }, 1000);  
// });

// setInterval

// let count1 = document.getElementById("button")
// count1.addEventListener("click",function () {
//     setInterval(()=>{
//     console.log(1 ,2,3 ,4,5,6);
// // for(let i=20;i<=100;i++){
// // console.log(i);
// // }
// }, 1000);  
// });

// let count3 =0
// let myinterval =setInterval(()=>{
//     count3++
//     if (count3<=5) {
//        console.log("hello!");
        
//     }else{
// clearInterval(myinterval)
//     } }, 1000);



// .value

// calculator




// new Promise
// syntax
// let promises =new Promise((resolve,reject)=>{
// let order =false;
// if (order) {
//     resolve("order successfull")
// }
// else{
// reject("order fail!")
// }
// })
// promises.then((results)=>{
// console.log(results);

// })
// .catch((error)=>{
// console.log(error);

// })
// then
// catch

















// setTimeout
let promises1 =new Promise((resolve,reject)=>{

setTimeout(()=>{

    let order =false;

    if (order) {

    resolve("order successfull")
}
else{

reject("order fail!")
}

},3000);

});

console.log(promises1);


promises1.then((results)=>{

console.log(results);

})
.catch((error)=>{

console.log(error);

});
setTimeout(()=>{
console.log(promises1);

},5000)

























