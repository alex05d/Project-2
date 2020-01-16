// ======== PET PROFILE SETUP FORM (1) ========
// ======== about_pet_setup_form.html  ========


$(document).ready(function () {



    var tokenEmail = localStorage.getItem('email');
    var OwnerID = "";

    $.get("/api/owner/" + tokenEmail, function (data) {

        localStorage.setItem("owner_id", data.id);
        OwnerID = data.id;
    });

    $("#submit_pet").on("click", function (event) {
        event.preventDefault();
        var newPet = {
            OwnerId: OwnerID,
            pets_name: $("#pet-name").val().trim(),
            pet_type: $("#pet-type").val().trim(),
            pet_weight: $("#pet-weight").val().trim(),
            pet_birthday: $("#pet-birthday").val().trim(),
            pet_gender: $("#pet-gender").val().trim(),
            pet_personality: $("#pet-personality").val().trim(),
        };

        $.post("/api/pet", newPet, function (newPet) {

            PetID = newPet.id;
            localStorage.setItem("pets_id", PetID);
        })
            .then(res => {
                window.location.href = "/pet"
            });

    });

});