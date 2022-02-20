const formRef = document.querySelector(".login-form");
const login = {
    email: "",
    password: "",
};
formRef.addEventListener("submit", (event)=>{
    event.preventDefault(); 
    if(event.currentTarget.elements.email.value==="" || event.currentTarget.elements.password.value===""){
        alert("Заполните все поля!");
    }
    else{
login.email=event.currentTarget.elements.email.value;
login.password=event.currentTarget.elements.password.value;
console.log(login);
formRef.reset();
    }
})
