const input = document.querySelector('#font-size-control');
const span =  document.querySelector('#text');

input.addEventListener("input", (event) => {
event.preventDefault();
span.style.fontSize = `${event.currentTarget.value}px`;
})