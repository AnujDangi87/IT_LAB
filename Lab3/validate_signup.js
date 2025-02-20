function validate_Signup() {
    var value = true;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var usernameRegEx = /^[0-9a-zA-z]{1,40}$/;
    var emailRegEx = /^([a-zA-Z0-9-_+.]+@[a-zA-Z0-9]+(\.{0,1}[a-z]{0,3}){0,1}\.[a-z]+).{1,60}$/;
    var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\\/\[\]\{\}"`~$&+,:;=?@#|'<>.-^*()%!]).{8}$/;
    if (!usernameRegEx.test(username)) {
        alert("wrong username");
        value = false;
    }
    return value;
}
