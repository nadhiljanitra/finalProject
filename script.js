var head = document.querySelector(".header");
var title = document.createElement("h1");
title.innerHTML = "Uncle Joe Feedback Site";
head.appendChild(title);

var list = {
  food: ["Taste", "Variety of Menu", "Platting", "Price", "hygine"],
  restaurant: ["Sanitation", "Ambience", "Facility", "Access Location"],
  server: [
    "Attentive and Quick",
    "Knowledgable and Quick",
    "knowledgeable and courteous",
    "Attitude and Friendly"
  ]
};

for (key in list) {
  if (key == "food") {
    var f = document.querySelector("#food");
    for (var i = 0; i < list[key].length; i++) {
      var f1 = document.createElement("div");
      f1.innerHTML = list[key][i] + " :";
      f.appendChild(f1);
    }
  } else if (key == "restaurant") {
    var f = document.querySelector("#restaurant");
    for (var i = 0; i < list[key].length; i++) {
      var f1 = document.createElement("div");
      f1.innerHTML = list[key][i] + " :";
      f.appendChild(f1);
    }
  } else if (key == "server") {
    var f = document.querySelector("#server");
    for (var i = 0; i < list[key].length; i++) {
      var f1 = document.createElement("div");
      f1.innerHTML = list[key][i] + " :";
      f.appendChild(f1);
    }
  }
}
var rate = document.getElementsByClassName("rating");
console.log(rate);
for (i = 0; i < rate.length; i++) {
  var sibling = rate[i].previousElementSibling;
  console.log(sibling.children);
  for (j = 0; j < sibling.children.length; j++) {
    var eachRate = document.createElement("div");
    eachRate.setAttribute("id", "rate");
    rate[i].appendChild(eachRate);
  }
}
var sRate = document.querySelectorAll("#rate");
var test = Array.from(sRate);
console.log(sRate);
console.log(test);
for (i = 0; i < test.length; i++) {
  for (j = 1; j < 6; j++) {
    var star = document.createElement("span");
    star.setAttribute("value", `${j}`);
    test[i].appendChild(star);
  }
  test[i].addEventListener("click", function(e) {
    let action = "add";
    for (const span of this.children) {
      span.classList[action]("active");
      if (span === e.target) {
        action = "remove";
      }
      var val = document.querySelector("span").getAttribute("value");
      console.log(val);
    }
    console.log(e.target.getAttribute("value"));
  });
}


// var bintangSatuan = createElement("span")
// before = rate[0].previousElementSibling;
// console.log(before)

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
