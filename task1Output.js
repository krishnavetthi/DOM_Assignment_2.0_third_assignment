let username = document.querySelector(".userName");
let email = document.querySelector(".userEmail");
let message = document.querySelector(".userMessage");

let entername = document.querySelector(".enterName");
let entermail = document.querySelector(".enterMail");
let entermessage = document.querySelector(".enterMessage");

let buttons = document.querySelectorAll("button");
let submit = buttons[2];


submit.addEventListener("click",(event)=>{
    localStorage.setItem('namekey', username.value);
    localStorage.setItem('emailkey', email.value);
    localStorage.setItem('messagekey', message.value); 
});

entername.value = localStorage.getItem('namekey');
entermail.value = localStorage.getItem('emailkey');
entermessage.value = localStorage.getItem('messagekey');
localStorage.clear();

