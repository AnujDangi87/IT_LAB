function validate_Signup(): boolean
{
    let value:boolean = true;

    let username:string = document.getElementById("username").value;
    let email:string = document.getElementById("email").value;
    let password:string = document.getElementById("password").value;
    let cpassword:string = document.getElementById("cpassword").value;

    let usernameRegEx = /^[0-9a-zA-z]{1,40}$/;
    let emailRegEx = /^([a-zA-Z0-9-_+.]+@[a-zA-Z0-9]+(\.{0,1}[a-z]{0,3}){0,1}\.[a-z]+).{1,60}$/;
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\\/\[\]\{\}"`~$&+,:;=?@#|'<>.-^*()%!]).{8}$/;

    if(!usernameRegEx.test(username))
    {
        alert("wrong username");
        value = false;
    }
    
    return value;
}