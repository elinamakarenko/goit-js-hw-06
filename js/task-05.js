const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener("input", (event) => {
    event.preventDefault();
    if(event.currentTarget.value===""){
        output.textContent="Anonymous";
    }
    else{
    output.textContent=event.currentTarget.value;}
    
});



    // document.querySelector('#name-output').innerHTML=input;
  