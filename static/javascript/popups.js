function confirmCreationMessage() {
    document.getElementById("creation-message").innerHTML = "Your workout plan has been created.";
    var fade = document.getElementById("creation-message");
    var intervalID = setInterval(
        function () {
            document.getElementById("plan-form").reset();
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.005;
            }
            else {
                clearInterval(intervalID);
                location.reload();
            }
        }
    )
}

function confirmLoginMessage() {
    alert("Login Successful");

}

function confirmSignupMessage() {
    alert("Account creation has been successful.");
    
}

function confirmChangePasswordMessage() {
    document.getElementById("password-change-message").innerHTML = "Your password has successfully been changed.";
    var fade = document.getElementById("password-change-message");
    var intervalID = setInterval(
        function () {
            document.getElementById("change-password").reset();
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.005;
            }
            else {
                clearInterval(intervalID);
                location.reload();
            }
        }
    )
}
