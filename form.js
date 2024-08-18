const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password1=document.getElementById("Password1");
const password=document.getElementById("Password");


String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}
String.prototype.isAlpha=function(){
    return !!this.match(/^[A-Za-z]+$/);
}


function checkRequired(inputs) {
    inputs.forEach(input => {
       
       if (input.value.trim() === "") {
            errorInput(input, `${getName(input)} is required`);
        } else {
            successInput(input);
        }
    });
}

function getName(input){
    // console.log(input);
    
    return input.id   //getAttribute("data-name");

}
function confrimPassword(password1,password){
    if(password1.value!= password.value){
        
        errorInput(password,`${getName(password)}is not correct password`);

    }
}


function checkLength(input,min,max){
    const data=input.value.trim().length;
    if (data<min) {
        errorInput(input, `${getName(input)} must be atleast grater than ${min} character`);
       
    }else if(data>max){
        errorInput(input , `${getName(input)} must be atleast lessthan than ${max} character`);

    }else{
        successInput(input)

    }

}

function errorInput(input,message){
    const formGroup=input.parentElement;
    formGroup.className="form-group error";
    const a=formGroup.querySelector("p");
    a.innerHTML = message;
    console.log(message);


}

function successInput(input){
    const formGroup=input.parentElement;
    formGroup.className="form-group success";
    const p=formGroup.querySelector("p");
    p.innerHTML="";
}

function checkEmail(input){
if(!input.value.trim().isEmail()){
    errorInput(input, `${getName(input)}  is not valid`);

}
}function checkUser(input){
    if (!input.value.trim().isAlpha()) {
        errorInput(input, `${getName(input)} only enter the alpha value`);

    }}

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired ([username,email,password1,password]);
   checkLength(username,5,10);
   checkLength(password1,5,10);
confrimPassword(password1,password);
checkEmail(email);
checkUser(username);

});
