const input = document.querySelector('#validation-input');
input.addEventListener("blur", (event) => {
    event.preventDefault();
  if(Number(event.currentTarget.value.length)===Number(event.currentTarget.dataset.length))
  {
      input.classList.add('valid');
}
    else{
        input.classList.add('invalid');
    }
});