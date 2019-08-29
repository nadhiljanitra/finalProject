var head = document.querySelector(".header");
var title = document.createElement("h1");
title.innerHTML = "Uncle Joe Feedback Site";
head.appendChild(title);

var list = {
  "food" : ["Taste","Variety of Menu","Platting","Price"],
  "restaurant" : ["Sanitation","Ambience","Facility","Access Location"],
  "server" : ["Attentive and Quick","Knowledgable and Quick","knowledgeable and courteous","Attitude and Friendly"]
}

for (key in list){
  if (key == "food"){
    var f = document.querySelector("#food")
    for (var i = 0; i<list[key].length;i++){
      var f1 = document.createElement("div")
      f1.innerHTML = list[key][i] + ' :'
      f.appendChild(f1)
    }
  } else if (key == "restaurant"){
    var f = document.querySelector("#restaurant")
    for (var i = 0; i<list[key].length;i++){
      var f1 = document.createElement("div")
      f1.innerHTML = list[key][i] + ' :'
      f.appendChild(f1)
    }
  } else if (key == "server"){
    var f = document.querySelector("#server")
    for (var i = 0; i<list[key].length;i++){
      var f1 = document.createElement("div")
      f1.innerHTML = list[key][i] + ' :'
      f.appendChild(f1)
    }
  }
}

var coll = document.querySelectorAll(".category");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// var intro = document.querySelector("#intro");
// var button = document.createElement("button");
// button.setAttribute("class", "button");
// intro.appendChild(button);
// var jump1 = document.createElement("a");
// jump1.innerHTML = "Start the survey";
// jump1.setAttribute("href", "/index2.html");
// jump1.setAttribute("target", "_blank");
// button.appendChild(jump1);