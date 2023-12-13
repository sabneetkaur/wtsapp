let s=document.querySelector("#status")
let chat= document.querySelector(".chat-container")
let ss=document.querySelector("#ss")
var c2=document.querySelector(".c2")
var c3=document.querySelector(".c3")
var c4=document.querySelector(".c4")
var c5=document.querySelector(".c5")
var clas=document.querySelector(".clas")
let call=document.querySelector(".call")
let a=document.querySelector("#cal")


function page(){
    clas.style.display="block";
    s.style.borderBottom="3px solid white";
    ss.style.borderBottom="none";
    chat.style.display="none";
    c2.style.display="none";
    c3.style.display="none";
    c4.style.display="none";
    c5.style.display="none";
    a.style.borderBottom="none";
    call.style.display="none";
};
function cc(){
    ss.style.borderBottom="3px solid white";
    a.style.borderBottom="none";
    clas.style.display="none";
    s.style.borderBottom="none";
    chat.style.display="flex";
    c2.style.display="flex";
    c3.style.display="flex";
    c4.style.display="flex";
    c5.style.display="flex";
    chat.style.marginTop="flex";
    call.style.display="none";
}
function kl(){
    call.style.display="block";
    a.style.borderBottom="3px solid white";
    s.style.borderBottom="none";
    clas.style.display="none";
   chat.style.display="none";
   c2.style.display="none";
   c3.style.display="none";
   c4.style.display="none";
   c5.style.display="none";
}