let leftInput=document.querySelector("#leftInput")
let leftSend=document.querySelector("#leftSend")
let leftBody=document.querySelector("#leftBody")
let leftBodyl=document.querySelector("#leftBodyl")

//left side
let rightInput=document.querySelector("#rightInput")
let rightSend=document.querySelector("#rightSend")
let rightBody=document.querySelector("#rightBody")
let rightBodyr=document.querySelector("#rightBodyr")

leftSend.addEventListener("click",function(){
 let text=document.createElement("div")
 text.innerHTML=leftInput.value
 let textRight=document.createElement("div")
 textRight.innerHTML=leftInput.value
 leftBody.appendChild(text)
 
 setTimeout(() => {
    let audio = new Audio("note.mp3");
    audio.play();
    rightBody.appendChild(textRight)

 }, 1000);
})

rightSend.addEventListener("click",function(){
    let text=document.createElement("div")
    text.innerHTML=rightInput.value
    let textLeft=document.createElement("div")
    textLeft.innerHTML=rightInput.value
    rightBodyr.appendChild(text)
    
    setTimeout(() => {
       let audio = new Audio("note.mp3");
       audio.play();
       leftBodyl.appendChild(textLeft);
   
    }, 1000);
   })