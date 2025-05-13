var initalVal;
function validateUser() {
  initalVal = document.getElementById("getInput").value;
  if (initalVal == "" || initalVal == null) {
    alert("Oye name and pin enter chey..");
    return;
  }
  initalVal = initalVal.toLowerCase();
  if (
    initalVal == "maha8813" ||
    initalVal == "maha 8813" ||
    initalVal == "8813maha" ||
    initalVal == "8813 maha"
  ) {
    document.getElementById("validationBlock").style.display = "none";
    document.getElementById("main").style.display = "block";

    setTimeout(() => {
      alert("Kindha Chudu Daling bottom right korner.");
      document.getElementById("inkaKavalBtn").style.display = "block";
    }, 6000);
  } else {
    alert("correct name and pin enter chey madam");
    document.getElementById("getInput").value = "";
  }
}

let choklate = "";

function getPrompt() {
  choklate = prompt("Mana favorite choklate: ");
  choklate = choklate ? choklate.toLowerCase() : "";
  getVideo();
}

function inkaKavali() {
  getPrompt();
}
function getVideo() {
  const myVideo = document.getElementById("myVideo");

  if (choklate == "snikers") {
    myVideo.style.display = "block";
    myVideo.innerHTML = ` <video id="snikersVideo" width="320" height="240" poster="images/img14.jpg" controls  oncontextmenu="return false;">
            <source src="video/surprise.mp4" type="video/mp4">
        </video>`;
    document.getElementById("inkaKavalBtn").innerHTML = "Inko Choklate";
    return;
  } else if (
    choklate == "5star" ||
    choklate == "five star" ||
    choklate == "fivestar"
  ) {
    myVideo.style.display = "block";
    myVideo.innerHTML = ` <video id="fiveStarVideo" width="320" height="240" poster="images/thumbnail.jpg" controls  oncontextmenu="return false;">
            <source src="video/project_m8813.mp4" type="video/mp4">
        </video>`;
    document.getElementById("inkaKavalBtn").innerHTML = "Inko Choklate";
    return;
  } else if (
    choklate == "snickers" ||
    choklate == "snicker" ||
    choklate == "sniker"
  ) {
    alert("Spelling chudu..!!, question lo chudu baga");
    getPrompt();
    return;
  } else if (choklate == "" || choklate == null) {
    alert("cheppu, marchipova enti?");
    getPrompt();
    return;
  } else {
    alert("try again...");
    getPrompt();
  }
}

const container = document.querySelector(".image-container");

function createImageOne() {
  const img = document.createElement("img");
  img.src = `images/img${Math.floor(Math.random() * 14) + 1}.jpg`;
  img.style.left = "50%";
  img.style.bottom = "40px";
  img.classList.add("heart-shaped");
  container.appendChild(img);

  const angle = Math.random() * 1 * Math.PI;
  const distance = window.innerWidth * 1 + Math.random() * 1000; // reach farther
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance + window.innerHeight * 0.5;

  img.animate(
    [
      { transform: "translate(-50%, 0)", opacity: 1 },
      { transform: `translate(calc(-50% + ${x}px), -${y}px)`, opacity: 0.3 },
    ],
    {
      duration: 18000,
      easing: "ease-out",
    }
  );

  setTimeout(() => img.remove(), 4000);
}


function createImageTwo() {
  const img = document.createElement("img");
  img.src = `images/img${Math.floor(Math.random() * 14) + 1}.jpg`;

  img.classList.add("heart-shaped");
  img.style.position = "absolute";

  // Random position along full width
  const randomLeft = Math.random() * window.innerWidth;
  img.style.left = `${randomLeft}px`;
  img.style.bottom = "0px";

  container.appendChild(img);

  const angle = Math.random() * Math.PI;
  const distance = window.innerWidth + Math.random() * 400;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance + window.innerHeight * 0.5;

  img.animate(
    [
      { transform: "translate(0, 0)", opacity: 1 },
      { transform: `translate(${x}px, -${y}px)`, opacity: 0 },
    ],
    {
      duration: 18000,
      easing: "ease-out",
    }
  );

  setTimeout(() => img.remove(), 10000); // match animation duration
}



setInterval(() => {
  if (initalVal == 'maha8813') {
    for (let i = 0; i < 5; i++) {
      createImageTwo();
    }
  }
  if (initalVal == 'maha 8813') {
    for (let i = 0; i < 5; i++) {
      createImageOne();
    }
  }
}, 400);

function forgotPINAlert() {
  alert("heheheee.... Gurthutechuko Maha");
}
