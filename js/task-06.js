const input = document.querySelector('#validation-input');
input.addEventListener("blur", (event) => {
    event.preventDefault();
    input.classList.add('invalid');
  if(Number(event.currentTarget.value.length)===Number(event.currentTarget.dataset.length))
  {
      input.classList.replace('invalid', 'valid');
     
}
});