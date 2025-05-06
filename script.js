function validateUser() {
  let val = document.getElementById("getInput").value;
  if (val == "" || val == null) {
    alert("Oye name and pin enter chey..");
    return;
  }
  val = val.toLowerCase();
  if (
    val == "maha8813" ||
    val == "maha 8813" ||
    val == "8813maha" ||
    val == "8813 maha"
  ) {
    document.getElementById("validationBlock").style.display = "none";
    document.getElementById("main").style.display = "block";

    setTimeout(() => {
      alert("Kindha Chudu Daling bottom right korner.");
      document.getElementById("inkaKavalBtn").style.display = "block";
    }, 1000);
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
    myVideo.innerHTML = ` <video id="fiveStarVideo" width="320" height="240" poster="images/img14.jpg" controls  oncontextmenu="return false;">
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

function createImage() {
  const img = document.createElement("img");
  img.src = `images/img${Math.floor(Math.random() * 14) + 1}.jpg`;
  img.style.left = "50%";
  img.style.bottom = "40px";
  img.classList.add("heart-shaped");
  container.appendChild(img);

  const angle = Math.random() * 1 * Math.PI;
  const distance = window.innerWidth * 0.8 + Math.random() * 200; // reach farther
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance + window.innerHeight * 0.5;

  img.animate(
    [
      { transform: "translate(-50%, 0)", opacity: 1 },
      { transform: `translate(calc(-50% + ${x}px), -${y}px)`, opacity: 0.3 },
    ],
    {
      duration: 10000,
      easing: "ease-out",
    }
  );

  setTimeout(() => img.remove(), 4000);
}

// Emit more images simultaneously
setInterval(() => {
  for (let i = 0; i < 5; i++) {
    createImage();
  }
}, 400);

function forgotPINAlert() {
  alert("heheheee.... Gurthutechuko Maha");
}
