const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
    counterValue-=1;
    document.querySelector('#value').innerHTML=counterValue;
  });
  buttonIncrement.addEventListener("click", () => {
    counterValue+=1;
    document.querySelector('#value').innerHTML=counterValue;
  });
 