"use strict";

const li_email = document.getElementById('li_email_input');
const li_pw = document.getElementById('li_pw_input');
const li_loginBtn = document.getElementById('login_box');

function highlightBorder(event) {
    li_email.style.borderColor = "";
    li_pw.style.borderColor = "";
    
    event.target.style.borderColor = "#7D08D9";
}

function moveToMain() {
    if (li_email.value && li_pw.value) {
        location.replace("./main.html");
    }
}

function checkInputFields() {
    if (li_email.value && li_pw.value) {
        li_loginBtn.disabled = false;
        li_loginBtn.style.backgroundColor = "#7D08D9";
        li_loginBtn.style.cursor = "pointer";
    } else {
        li_loginBtn.disabled = true;
        li_loginBtn.style.backgroundColor = "#919191";
        li_loginBtn.style.cursor = "default";
    }
}


li_email.addEventListener('focus', highlightBorder);
li_pw.addEventListener('focus', highlightBorder);

li_email.addEventListener('input', checkInputFields);
li_pw.addEventListener('input', checkInputFields);

li_loginBtn.addEventListener('click', (event) => {
    if (li_loginBtn.disabled) {
        event.preventDefault();
    } else {
        moveToMain();
    }
});


checkInputFields();