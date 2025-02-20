function initial_alert()
{
    alert("The following fields must be filed out:\nEmail:\nUsername:\nPassword:\nPassword has to be 8 charcters long!\nConfirm password:");
}

function validate_signup()
{
    let value = true;
    let str = "";

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("c-password").value;

    let usernameRegEx = /^[0-9a-zA-z]{1,40}$/;
    ///let emailRegEx = /^[a-zA-Z0-9-_+.]+@[a-zA-Z0-9]+(\.{0,1}[a-z]{0,3}){0,1}\.[a-z]+$/;
    //let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\\/\[\]\{\}"`~$&+,:;=?@#|'<>.-^*()%!]).{8}$/;

    if(!usernameRegEx.test(username))
    {
        str = "User name can only be of alphamnumeric and less 40 characters.\n";
        value = false;
    }
    if(!emailRegEx.test(email))
    {
        str = "Email should be in form of 'abc@domin.topleveldomain' and less than 60 characters.\n";
        value = false;
    }
    if(!password.test(password))
    
    return value;
}