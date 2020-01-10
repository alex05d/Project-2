
//on click event to submit the form
$("#submit-pet").on("click", function (event) {
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
        var aboutPet = {
            pets_name: $("#first-name").val().trim(),
            pet_type: $("#last-name").val().trim(),
            pet_weight: $("#email").val().trim(),
            pet_birthday: $("#phone").val().trim(),
            pet_gender: $("#phone").val().trim(),
            pet_personality: $("#phone").val().trim(),
        };

        // this connects to database
        // (data.name.name) = response from database

        $.post("/api/new-pet-profile", aboutPet, function (data) {
            $("#owner-name").text(data.owner.first_name);
            $("#owner-phone").text(data.owner.phone_number);
            $('#owner-email').text(data.owner.email);
        })
    } else {
        //
        alert("Please fill in all the fields!");
    }


});










