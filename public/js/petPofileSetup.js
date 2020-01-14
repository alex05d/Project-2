// ======== PET PROFILE SETUP FORM (1) ========
// ======== about_pet_setup_form.html  ========


$(document).ready(function () {

    // var newpetId = "2";

    var tokenEmail = localStorage.getItem('email');
    var OwnerID = "";
    // var PetID = "";



    // $.get("/api/pet/vaccs/" + newpetId, function (data) {

    //     // for (var i = 0; i < data.length; i++) {
    //     //     console.log("this is the vaccs: " + data[i].vac_name);
    //     // }
    // }).then(res => {
    //     // this is the respone needed
    //     console.log(res);
    // });

    $.get("/api/owner/" + tokenEmail, function (data) {

        localStorage.setItem("owner_id", data.id);
        OwnerID = data.id;
        console.log("NewOwnerID : ", data);
    });

    console.log("I'm loaded");
    $("#submit_pet").on("click", function (event) {
        event.preventDefault();
        console.log("foo")

        // var currentPet = '';

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