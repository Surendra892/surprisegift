
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
    }, 8000);
  } else {
    alert("correct name and pin enter chey madam");
    document.getElementById("getInput").value = "";
  }
}

let choklate=''

function getPrompt(){
  choklate= prompt("Mana favorite choklate: ").toLowerCase();
  getVideo()
}

function inkaKavali() {
  getPrompt();
}
function getVideo(){

  if (choklate == "snikers") {
    document.getElementById("myVideo").style.display = "block";
    document.getElementById("inkaKavalBtn").style.display = "none";
    return;
  }else if (choklate == "snickers" || choklate=="snicker" ||choklate=="sniker") {
    alert("Spelling chudu..!!, question lo chudu baga");
    getPrompt();
    return;
  }else if(choklate=='' || choklate==null){
    alert("cheppu, marchipova enti?");
    getPrompt()
    return;
  }else{
    alert("try again...");
    getPrompt()
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
