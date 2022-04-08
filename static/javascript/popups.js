function confirmCreationMessage() {
    document.getElementById("creation-message").innerHTML = "Your workout plan has been created."; // adds text to a p tag in the html //
    var fade = document.getElementById("creation-message");
    var intervalID = setInterval(
        function () {
            document.getElementById("plan-form").reset(); // clears the form // 
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.005;
            }
            else {
                clearInterval(intervalID);
                location.reload(); // reloads the page // 
            }
        }
    )
}

// creates an alert box pop-up // 
function confirmLoginMessage() {
    alert("Login Successful");

}

// creates an alert box pop-up //
function confirmSignupMessage() {
    alert("Account creation has been successful.");
    
}

function confirmChangePasswordMessage() {
    document.getElementById("password-change-message").innerHTML = "Your password has successfully been changed."; // adds text to a p tag in the html //
    var fade = document.getElementById("password-change-message");
    var intervalID = setInterval(
        function () {
            document.getElementById("change-password").reset(); // clears the form //
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.005;
            }
            else {
                clearInterval(intervalID);
                location.reload(); // reloads the page // 
            }
        }
    )
}
