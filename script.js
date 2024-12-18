"use strict";

let ageInput = prompt("How old are you?");
let age = Number (ageInput)

if (age <18) {
   alert ("You're a Minor") 
}else if (age >=18 && age <=54){
    alert ("You're an Adult")
}else if (age >=55){
    alert ("You're a Senior Citizen")
}else{
    alert ('invalid')
}
    