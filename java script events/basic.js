// CLICK
let button =document.getElementById("btn")
button.addEventListener("click",function(){
    Swal.fire({
  title: "Sweet!",
  text: "work work.",
  imageUrl: "https://i.makeagif.com/media/6-27-2024/ckg-SQ.gif",
  imageWidth: 200,
  imageHeight: 100,
  imageAlt: "Custom image",
  
  
});
})

let sub =document.getElementById("button")
sub.addEventListener("click",function() {
Swal.fire({
  title: "Custom width, padding, color, background.",
  width: 600,
  padding: "5em",
  color: "#dd6ac4",
  background: "#fff url(https://i.pinimg.com/originals/75/6b/d7/756bd7847ca37724cacc1cd274451d28.gif)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://i.pinimg.com/originals/15/db/e2/15dbe2c4f2fd5e5446eeda977cd8d14f.gif")
    left top
    no-repeat
  `
});
})


// MOUSEOVER

let hover=document.getElementById("box1")
hover.addEventListener("mouseover" ,function() {
hover.style.backgroundColor="red";
hover.style.border= "10px,solid,brown";
hover.style.margin="20px";

// MOUSEOut

})
hover.addEventListener("mouseout" ,function() {
  hover.style.backgroundColor="black";
 hover.style.padding ="30px";
 hover.style.height="200px";
 hover.style.width="100px";
})




// keydown

let input =document.getElementById("user")
input.addEventListener("keydown",function (event) {
  
  
})






// counter increament
let count = 0
let countdis=document.getElementById("count")
let increse1 =document.getElementById("increase")
let decrease1 =document.getElementById("decrease")
let reset1 =document.getElementById("reset")
increse1.addEventListener("click",function () {
  count++
  countdis.innerText=count
 })

decrease1.addEventListener("click",function () {
  count--
  countdis.innerText =count
 })


 reset1.addEventListener("click",function () {
  
 })

// forEach     get karna ho return nhi karta
let fruits =["apple","mango","guva","orange","pinapple","kiwi"]                  

fruits.forEach((element,index)=>{
 console.log(`${index}:${element}`);     // concatination 

});  
  // 0:apple  
// 1:mango
//  2:guva
// 3:orange
// 4:pinapple
// // 5:kiwi                                       

let number=[10 ,20 ,30,40 ,50 ]
number.forEach((elemnts)=>{
  // return elemnts*2      return nhi karta 
   console.log(elemnts*2);
})

// Map
let number2=[10 ,43,54,34,22 ,65 ]
 let num=number.map((elemnts)=>{
 return elemnts*2        
 
})
console.log(num);       //  yeah return karta hn 



























