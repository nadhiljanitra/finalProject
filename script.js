var head = document.querySelector(".header");
var title = document.createElement("h1");
title.innerHTML = "Uncle Joe Feedback Site";
head.appendChild(title);
var isi = document.querySelector(".isi")
var result = document.querySelector(".result")
var list = {
  food: ["Taste", "Variety of Menu", "Platting", "Price"],
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
for (i = 0; i < rate.length; i++) {
  var sibling = rate[i].previousElementSibling;
  for (j = 0; j < sibling.children.length; j++) {
    var eachRate = document.createElement("div");
    eachRate.setAttribute("id", "rate");
    rate[i].appendChild(eachRate);
  }
}
var sRate = document.querySelectorAll("#rate");
var test = Array.from(sRate);
var nilai = [];
var jumlah = 0
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
    }
    // console.log(parseInt(e.target.getAttribute("value")));
    nilai.push(parseInt(e.target.getAttribute("value")))
    
  });
}
var h2 = document.getElementsByTagName("h2")
h2[0].addEventListener("click",function(){
  if (nilai.length<1){
    alert("input your feedback please")
    return false;
  }
  var jumlah = 0
  for (i=0;i<nilai.length;i++){
    jumlah = jumlah + nilai[i]
  }
  finalScore(jumlah)
  isi.style.display = "none"
  result.style.display = "initial"
  console.log(nilai);
})

function finalScore(jumlah){
  var nilaiMaks = 5;
  var rerata = jumlah/test.length
  var nilaiAkhir = Math.round(rerata*10)/10
  var rerataPersenRounded = `${Math.round((rerata/nilaiMaks)*100)}%`
  document.querySelector(".stars-inner").style.width = rerataPersenRounded;
  var score = document.createElement("div")
  score.setAttribute("id","score")
  score.innerHTML = nilaiAkhir+ " / 5"
  document.getElementsByClassName("box2")[0].appendChild(score)
}


var coll = document.querySelectorAll(".category");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
var kotak2 = document.getElementsByClassName("content");
var form = document.createElement("form");
var pesan = document.createElement("textarea");
kotak2[3].appendChild(form);
form.appendChild(pesan);

var starOut = document.createElement("div")
starOut.setAttribute("class","stars-outer")
var starIn = document.createElement("div")
starIn.setAttribute("class","stars-inner")
starOut.appendChild(starIn)
var result = document.createElement("div")
result.setAttribute("class","result")
result.appendChild(starOut)
document.getElementsByClassName("box2")[0].appendChild(result)


