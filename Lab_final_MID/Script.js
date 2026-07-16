const form = document.getElementById("form")
 
let wrongTry = 0;
let isLocked = false;
 
form.addEventListener("submit", function(event){
    event.preventDefault()
    clearErrors()
 
        if (isLocked) {
        document.getElementById("passwordError").innerHTML =
            "Password is locked. Try again after 1 minute.";
        return;
    }
 
 
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let gender = document.querySelector('input[name="gender"]:checked');
    let interests = document.querySelectorAll('input[name="interests"]:checked');
    let department = document.getElementById("department");
    let about = document.getElementById("about");
 
    let valid = true;
 
        if(fname.value.trim() == ""){
        showError(fname, "fnameError", "First name is required");
        valid = false;
    }
    else if(!/^[A-Za-z ]+$/.test(fname.value.trim())){
        showError(fname, "fnameError", "Only letters are allowed.");
        valid = false;
    }
    else{
        showSuccess(fname);
    }
 
 
    if(lname.value.trim() == ""){
        showError(lname, "lnameError", "Last name is required");
        valid = false;
    }
    else if(!/^[A-Za-z ]+$/.test(lname.value.trim())){
        showError(lname, "lnameError", "Only letters are allowed.");
        valid = false;
    }
    else{
        showSuccess(lname);
    }
 
        if (email.value.trim() == "") {
 
        showError(email, "emailError", "Email is required.");
        valid = false;
 
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
 
        showError(email, "emailError", "Invalid email address.");
        valid = false;
 
    }
    else {
 
        showSuccess(email);
 
    }
   if (password.value == "") {
 
        showError(password, "passwordError", "Password is required.");
        valid = false;
 
    }
    else if (password.value != "abc1122") {
 
        wrongTry++;
 
        showError(password, "passwordError", "Incorrect Password! Attempt " + wrongTry + " of 3.")
 
        valid = false
        if (wrongTry >= 3) {
            isLocked = true;
            document.getElementById("passwordError").innerHTML="Too many attempts. Try again after 1 minute!"
            password.disabled = true
            setTimeout(function(){
                isLocked = false
                wrongTry = 0
                password.disabled = false
                document.getElementById("passwordError").innerHTML="Password is unlocked now"
            }, 60000);
        }
    }
   
       else {
        wrongTry = 0;
        showSuccess(password);
    }
   
    if(gender == null){
        document.getElementById("genderError").innerHTML="Select Gender"
        valid = false
    }
 
    if(interests.length == 0){
        document.getElementById("interestError").innerHTML="At Least One Interest is required"
        valid = false
    }
 
    if(department.value == ""){
        showError(department, "departmentError", "Please select your department")
    }
 
        if (about.value.trim() == "") {
 
        showError(about, "aboutError", "About is required.");
        valid = false;
 
    }
    else if (about.value.trim().length < 20) {
 
        showError(
            about,
            "aboutError",
            "About must be at least 10 characters."
        );
 
        valid = false;
 
    }
    else {
 
        showSuccess(about);
 
    }
 
    if (valid) {
 
        alert("uccessful! Thank you for registering.");
 
        form.reset();
 
        clearErrors();
 
    }
 
})
 
 
 
function showError(input, errorId, message){
    input.classList.add("errorBorder")
    input.classList.remove("successBorder")
    document.getElementById(errorId).innerHTML = message
}
 
function showSuccess(input){
    input.classList.remove("errorBorder")
    input.classList.add("successBorder")
   
}
 
function clearErrors(){
    let error = document.querySelectorAll(".error")
    error.forEach(function(item){
        item.innerHTML = ""
    })
 
    let fields = document.querySelectorAll("input, select, textarea")
    fields.forEach(function(fields){
        fields.classList.remove("errorBorder")
        fields.classList.remove("successBorder")
    })
}
 