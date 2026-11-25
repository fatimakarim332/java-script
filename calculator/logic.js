let value1 = document.getElementById("input")
let value2 = document.getElementById("input1")
// console.log(value1);




// console.log(value3);
// addition
let addition = document.getElementById("add")
//  console.log(addition);

addition.addEventListener("click", function () {
    // console.log("click");
    let value3 = +value1.value
    let value4 = +value2.value
    let results = value3 + value4
    console.log(results);

})



// subtraction
let subtraction =document.getElementById("subt")
subtraction.addEventListener("click",function () {
      let value3 = +value1.value
    let value4 = +value2.value
    let results = value3 - value4
    console.log(results);

})


// divide
let divide =document.getElementById("div")
divide.addEventListener("click",function () {
      let value3 = +value1.value
    let value4 = +value2.value
    let results = value3 / value4
    console.log(results);

})

// multiplication
let multiplication =document.getElementById("multi")
multiplication.addEventListener("click",function () {
      let value3 = +value1.value
    let value4 = +value2.value
    let results = value3 * value4
    console.log(results);

})

// modules
let modules=document.getElementById("module")
modules.addEventListener("click",function () {
      let value3 = +value1.value
    let value4 = +value2.value
    let results = value3 % value4
    console.log(results);

})


// clear

let clears =document.getElementById("clear1")
// console.log(clears);
clears.addEventListener("click",function () {
    value1 .value =" "
    value2 .value =" "


})