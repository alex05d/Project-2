$(document).ready(function () {
    console.log("I'm loaded");
    $("#submit_pet").on("click", function (event) {
        event.preventDefault();
        console.log("foo")
        // // form validation
        // function validForm() {
        //     var valid = true;
        //     // validation for name and photo link
        //     $(".from-control").each(function () {
        //         if ($(this).val() === "") {
        //             valid = false;
        //         }
        //     });

        //     // validation for drop down qestions
        //     $(".answers").each(function () {
        //         if ($(this).val() === "0") {
        //             valid = false;
        //         }
        //     });
        //     return valid;
        // };
        // // if validation is true capture information
        // if (validForm()) {
        var newPet = {
            owner_id: "1",
            pets_name: $("#pet-name").val().trim(),
            pet_type: $("#pet-type").val().trim(),
            pet_weight: $("#pet-weight").val().trim(),
            pet_birthday: $("#pet-birthday").val().trim(),
            pet_gender: $("#pet-gender").val().trim(),
            pet_personality: $("#pet-personality").val().trim(),
        };

        console.log(newPet);
        $.post("/api/pet", newPet, function (data) {
            console.log(data);
        })
        // .then(res => {
        // window.location.href = "/pet_profile_setup";
        // })

        // } else {
        //     //
        //     alert("Please fill in all the fields!");
        // }


    });




})