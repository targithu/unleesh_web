var number=0
var number1=0;
var number2=0;
let countE1=document.getElementById("ountE1")
let countE2=document.getElementById("ountE2")
let countE3=document.getElementById("ountE3")
function countdown() {
    if(number<=3500){
        number=number+400;
        countE1.innerText=number;
    }
    if(number1<=10){
        number1+=1;
        countE2.innerText=number1;
}
if(number2<=15){
    number2+=1;
    countE3.innerText=number2;
}
}