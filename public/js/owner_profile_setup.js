//on click event to submit the form
$("#submit").on("click", function (event) {
    event.preventDefault();

    var tokenEmail = $("#email").val().trim();
    // form validation
    function validForm() {
        var valid = true;
        // validation for name and photo link
        $(".from-control").each(function () {
            if ($(this).val() === "") {
                valid = false;
            }
        });

        // validation for drop down qestions
        $(".answers").each(function () {
            if ($(this).val() === "0") {
                valid = false;
            }
        });
        return valid;
    };
    // if validation is true capture information
    if (validForm()) {
        var owner = {
            first_name: $("#first-name").val().trim(),
            last_name: $("#last-name").val().trim(),
            email: $("#email").val().trim(),
            phone_number: $("#phone").val().trim(),
        };

        console.log(owner);
        $.post("/api/owner", owner, function () {

        }).then(
            $.get("/api/owners", function (data) {
                for (var i = 0; i < data.lenght; i++) {
                    if (data[i] == tokenEmail) {
                        console.log('this is the get call: ' + data[i].email);
                        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + tokenEmail);
                    }
                }
            })
        )


    }


});










