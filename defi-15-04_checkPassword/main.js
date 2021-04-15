const password = document.getElementById("password") ;
const checkPassword = document.getElementById("check-password") ;
const alert = document.getElementById("alert") ;

console.log(checkPassword.value);
console.log(password.value);

password.addEventListener('keyup', function() {
    if (password.value.length < 8) {
    alert.innerHTML = "Password must contains at least 8 characters";
    alert.style.color = 'red';
    } else if (password.value.search(/[a-z]/) < 0) {
    alert.innerHTML = "Password needs at least one lower case letter";
    alert.style.color = 'red';
    } else if(password.value.search(/[A-Z]/) < 0) {
    alert.innerHTML = "Password needs at least one upper case letter";
    alert.style.color = 'red';
    } else  if (password.value.search(/[0-9]/) < 0) {
    alert.innerHTML = "Password needs at least one number"; 
    alert.style.color = 'red';
    } 
    else  if (password.value.search(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) < 0) {
    alert.innerHTML = "Your password needs at least one special character !?#"; 
    alert.style.color = 'red';
    }
    else {
    alert.innerHTML = "GOOD LENGTH & GOOD WRITING !";
    alert.style.color = 'green';
    }
});
checkPassword.addEventListener('keyup', function() {
    if (password.value !== checkPassword.value) {
        alert.innerHTML = "TSS TSS, passwords don't match...";
        alert.style.color = 'red';
    }
    else if (password.value === checkPassword.value) {
        alert.innerHTML = "Great ! Passwords match !";
        alert.style.color = 'green';
    }
});