var head = document.querySelector(".header");
var title = document.createElement("h1");
title.innerHTML = "Uncle Joe Feedback Site";
head.appendChild(title);
var isi = document.querySelector(".isi");
var result = document.querySelector(".result");
var list = {
  food: ["Taste", "Variety of Menu", "Platting"],
  restaurant: ["Sanitation", "Ambience", "Facility", "Access Location"],
  server: [
    "Attentive and Quick",
    "Coordinated With Timing of Meals",
    "Knowledgeable and Courteous",
    "Attitude and Friendly"
  ]
};

// Create list of feedback
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

// Create stars (Ratings)
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
var jumlah = 0;
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
    nilai.push(parseInt(e.target.getAttribute("value")));
  });
}

// Accordions
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

// Create submit feedback and jump into result
var h2 = document.getElementsByTagName("h2");
h2[0].addEventListener("click", function() {
  if (nilai.length < 1) {
    alert("input your feedback please");
    return false;
  }
  var jumlah = 0;
  for (i = 0; i < nilai.length; i++) {
    jumlah = jumlah + nilai[i];
  }

  // bintang
  var starOut = document.createElement("div");
  starOut.setAttribute("class", "stars-outer");
  var starIn = document.createElement("div");
  starIn.setAttribute("class", "stars-inner");
  starOut.appendChild(starIn);
  var result = document.createElement("div");
  result.setAttribute("class", "result");
  var h1 = document.createElement("h1");
  h1.innerHTML = "Your Feedback Result :";
  result.appendChild(h1);
  result.appendChild(starOut);
  document.getElementsByClassName("box2")[0].appendChild(result);

  // finalScore
  var nilaiMaks = 5;
  var rerata = jumlah / test.length;
  var nilaiAkhir = Math.round(rerata * 10) / 10;
  var rerataPersenRounded = `${Math.round((rerata / nilaiMaks) * 100)}%`;
  document.querySelector(".stars-inner").style.width = rerataPersenRounded;
  var text = document.createElement("h3");
  text.innerHTML = nilaiAkhir + " / 5";
  result.appendChild(text);

  // thankYouNotes
  var notes = document.createElement("div");
  notes.setAttribute("id", "notes");
  var p = document.createElement("p");
  p.innerHTML =
    "Thank you for the feedback on your experience with our restaurant. We sincerely appreciate your insight because it helps us build a better improvement.<br>If you have any more questions, comments or concern or compliments, please feel welcome to reach back out as we would be more than happy to assist.<br><br>Best,<br><br>Uncle Joe.";
  notes.appendChild(p);
  result.appendChild(notes);

  isi.style.display = "none";
  result.style.display = "initial";
});

