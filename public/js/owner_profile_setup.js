//on click event to submit the form
$("#submit").on("click", function (event) {
    event.preventDefault();
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

        // this connects to database
        // (data.name.name) = response from database

        $.post("/api/new-profile", owner, function (data) {
            $("#owner-name").text(data.owner.first_name);
            $("#owner-phone").text(data.owner.phone_number);
            $('#owner-email').text(data.owner.email);
        })
        window.location.href = "/pet_profile_setup";
    } else {
        //
        alert("Please fill in all the fields!");
    }


});










