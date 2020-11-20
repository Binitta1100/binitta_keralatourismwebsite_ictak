let name = document.getElementById("name");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let num = document.getElementById("num");
let error = document.getElementById("error");

function Validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(name.value.trim()=="" || email.value.trim()=="" || pwd.value.trim()=="" || num.value.trim()==""){
        alert("Fields cannot be empty");
        return false;
    }
    else if(pwd.value.length<=8 || pwd.value.search(/[A-Z]+/)==-1 || pwd.value.search(/[a-z]+/)==-1 || pwd.value.search(/[0-9]+/)==-1){
        alert("Password should contain minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number.");
        return false;
    }
    else if(!regexp.test(email.value)){
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        return false;
    }
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if(phoneno.test(num.value)){
        return true;
    }
    else{
        alert("Enter a valid Phone number");
        return false;
    }
}
