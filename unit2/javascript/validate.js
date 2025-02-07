function clear()
{
    let element = document.getElementsByClassName("error");

    for(x in element)
    {
        element[x].innerHTML = "";
    }
}

function error(id, message)
{
    document.getElementById(id).innerHTML = message;
}

function validate()
{
    clear();
    var value = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let phoneNumber = document.getElementById("phonenumber").value;

    let nameRegExp = /^[a-zA-Z\s]+$/;
    let emailRegExp = /^[a-zA-Z0-9-_+.]+@[a-zA-Z0-9]+(\.{0,1}[a-z]{0,3}){0,1}\.[a-z]+$/;
    let passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\\/\[\]\{\}"`~$&+,:;=?@#|'<>.-^*()%!]).{8,}$/;
    let phoneNumberRegExp = /^[1-9][0-9]{9}$/;
    let dobRegExp = /^[0-3][0-9][\/|-][0-1][0-2][\/|-][0-9]{4}$/;

    let newDob = new Date(dob);
    let curDate = new Date();
    let age = (curDate-newDob)/(365*24*60*60*1000);
    
    if (!nameRegExp.test(name))
    {
        error("error-name", "Name should only contain alpahbets and space");
        value = false;
    }
    if(!emailRegExp.test(email))
    {
        error("error-email", "Email should be in this format 'username@domainname.topdomain'");
        value = false;
    }
    if(!passwordRegExp.test(password))
    {
        error("error-password", "Password should contain atleast one lowecase, one upercase, one digit and special character with atleast 8 length");
        value = false;
    }
    if(!phoneNumberRegExp.test(phoneNumber))
    {
        error("error-phonenumber", "Phone number should be of 10 digit and should only contain digits");
        value = false;
    }
    if(!dobRegExp.test(dob))
    {
        error("error-dob", "Dob should be in DD-MM-YYYY or DD/MM/YYYY format");
    }
    else if(newDob > curDate)
    {
        error("error-dob", "Dob can't be in future")
    }
    else if(Math.floor(age) < 18)
    {
        error("error-dob", "Age should be greter than 18 years");
        value = false;
    }

    return value;
}