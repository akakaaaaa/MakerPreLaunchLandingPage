$("#email").css("border", "2px solid #080c20");


$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();

        
        let emailInput = $("#email");

        let userEmail = $("#email").val();
        
        let errorMessage = "";


        if(!userEmail){


            $("#email").css("border", "2px solid #FF2965");
            $("#error-message").css("color", "#FF2965");
            errorMessage = "Email is required";

        } else if(userEmail.includes("@")) {
            $("#email").css("border", "");
            $("#email").css("border", "2px solid #3EE9E5");
            errorMessage = "Your email is submited";
            $("#error-message").css("color", "#3EE9E5");

        } else {

            $("#error-message").css("color", "#FF2965");
            $("#email").css("border", "2px solid #FF2965");
            errorMessage = "Oops! That doesn’t look like an email address";

        }

        
        $("#error-message").text(errorMessage);
        
    });
});