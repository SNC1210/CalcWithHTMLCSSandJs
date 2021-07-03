/*
A simple Js Calculator using DOM manipulation

1.Listen and capture all the buttons events
2.When an event occurs,depending on the button ,I will do +,-,*,/,%
3.For any Operartion ,I have to get Values from the text boxes to0

*/

//Plus Operation
addButton = document.getElementById("addButton");
addOperation = function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    sum= parseInt(number1.value)+ parseInt(number2.value);

    result= document.getElementById("result");
    result.innerText=sum;
} 
addButton.addEventListener("click",addOperation);

//Subtraction operation
subButton = document.getElementById("subButton");
subOperation = function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    sub= parseInt(number1.value) - parseInt(number2.value);

    result= document.getElementById("result");
    result.innerText=sub;
} 
subButton.addEventListener("click",subOperation);

//Multiplication operation
mulButton = document.getElementById("mulButton");
mulOperation = function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    mul= parseInt(number1.value) * parseInt(number2.value);

    result= document.getElementById("result");
    result.innerText=mul;
} 
mulButton.addEventListener("click",mulOperation);

//Divison Operation
divButton = document.getElementById("divButton");
divOperation = function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    div= parseInt(number1.value) / parseInt(number2.value);

    result= document.getElementById("result");
    result.innerText=div;
} 
divButton.addEventListener("click",divOperation);

// Modulo operation
moduloButton = document.getElementById("moduloButton");
moduloOperation = function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    modulo= parseInt(number1.value) % parseInt(number2.value);

    result= document.getElementById("result");
    result.innerText=modulo;
} 
moduloButton.addEventListener("click",moduloOperation);