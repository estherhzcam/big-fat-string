"use strict";

let userText = "";

document.querySelector("form").addEventListener("submit", checkInput);

function checkInput(e) {
    e.preventDefault();
 userText = document.querySelector("#usertext").value
 console.log(userText)
}