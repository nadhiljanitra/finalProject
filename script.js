var head = document.querySelector(".header")
var title = document.createElement("h1")
title.innerHTML = "Uncle Joe Feedback Site"
head.appendChild(title)
var intro = document.querySelector("#intro")
var button = document.createElement('button')
button.setAttribute("class", "button")
intro.appendChild(button)
var jump1 = document.createElement("a")
jump1.innerHTML = "Start the survey"
jump1.setAttribute("href","/index2.html")
jump1.setAttribute("target","_blank")
button.appendChild(jump1)
