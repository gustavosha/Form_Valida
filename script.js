const form=document.querySelector("#form");
const nameInput=document.querySelector("#name");
const cpfInput=document.querySelector("#cpf");
const emailInput=document.querySelector("#email");
const passwordInput=document.querySelector("#password");
const jobSelector=document.querySelector("#job");
const messageTextarea=document.querySelector("#message");

form.addEventListener("submit",(event)=>{
    //console.log(nameInput,cpfInput,emailInput);

event.preventDefault();

if(nameInput.value===""){
    alert("Por favor preencha seu nome");
return;
}
if(cpfInput.value===""||! isCpfValid(cpfInput.value)){
    alert("Por favor preencha seu CPF");
return;
}
if(emailInput.value===""||!isEmailValid(emailInput.value)){
    alert("Por favor preencha seu E-mail");
return;
}
if(jobSelector.value===""){
    alert("Por favor selecione sua escolha");
return;
}
if(!validatePassword(passwordInputinput.value,8)){
    alert("Por favor preencha sua senha corretamente");
return;
}
if(messageTextarea.value===""){
    alert("Por favor escreva sua mensagem");
return;
}

form.submit();
});

function isEmailValid(email){
    //padrao de email
    //usuario12@servico.com
    const emaiRegex=new RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,0}/
    );
    if(emaiRegex.test(email)){
        return true;
    }
    return false;
  
}
function validatePassword(password,minDigits){
    if(password.lenght >=minDigits){
        return true;
    }
    return false;
}
function isCpfValid(cpf){
    const cpfRegex=new RegExp(
        //xxx.xxx.xxx-xx
        /^([0-9]){3})\.([0-9]){3}\.([0-9]){3}\-([0-9]){2}$)/
    );
    if(cpfRegex.test(cpf)){
        return true;
    }
    return false;
}