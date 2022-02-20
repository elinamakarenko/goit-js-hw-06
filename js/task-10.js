function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
let amount = 0;

function createBoxes (amount) {
  let k=30;
 for (let i = 0; i < amount; i+=1) {
 let elem = document.createElement("div");
elem.style.height = `${k}px`;
elem.style.width = `${k}px`;
k+=10;
elem.style.backgroundColor = getRandomHexColor();
document.querySelector("#boxes").append(elem);
 }
}

function destroyBoxes () {
  document.querySelector("#boxes").innerHTML="";
}

input.addEventListener("input", (event)=>{
  amount = event.currentTarget.value;
})

buttonCreate.addEventListener("click", (event)=>{
  createBoxes(amount);
});

buttonDestroy.addEventListener("click", (event)=>{
  destroyBoxes();
});

