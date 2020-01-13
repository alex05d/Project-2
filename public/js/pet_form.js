$(document).ready(function () {
    var tokenEmail = localStorage.getItem('email');
    var OwnerID = "";
    // pulls id from local storage, puts it into PetID variable
    var PetID = localStorage.getItem("pets_Id");

    $.get("/api/owner/" + tokenEmail, function (data) {

        localStorage.setItem("owner_id", data.id);
        OwnerID = data.id;
        console.log("NewOwnerID : ", OwnerID);
    });


    console.log("I'm loaded");
    $("#submit_pet").on("click", function (event) {
        event.preventDefault();
        console.log("foo")

        // var currentPet = '';

        // var newPet = {
        //     OwnerId: OwnerID,
        //     pets_name: $("#pet-name").val().trim(),
        //     pet_type: $("#pet-type").val().trim(),
        //     pet_weight: $("#pet-weight").val().trim(),
        //     pet_birthday: $("#pet-birthday").val().trim(),
        //     pet_gender: $("#pet-gender").val().trim(),
        //     pet_personality: $("#pet-personality").val().trim(),
        // };

        var feedingInfo = {
            PetId: PetID,
            pet_food: $("#pet_food").val().trim(),
            food_amount: $("#food_amount").val().trim(),
            morning_feeding: $("#morning-feeding").val().trim(),
            afternoon_feeding: $("#afternoon-feeding").val().trim(),
            night_feeding: $("#night-feeding").val().trim(),
        };

        var newVacc = {
            PetId: PetID,
            vac_name: $("#vac-name").val().trim(),
            vac_status: $("#vac-status").val().trim(),
            vac_due_date: $("#vac-due-date").val().trim(),
        };

        var newMeds = {
            PetId: PetID,
            needs_meds: $("#needs-meds").val().trim(),
            medication_name: $("#medication-name").val().trim(),
            medication_time: $("#medication_time").val().trim(),
            dosage: $("#dosage").val().trim(),
        };

        var newAppt = {
            PetId: PetID,
            vet_name: $("#vet_name").val().trim(),
            vet_address: $("#vet_address").val().trim(),
            appt: $("#appt").val().trim(),
        };

        var specInst = {
            PetId: PetID,
            instructions: $("#instructions").val().trim(),
            info: $("#info").val().trim(),
        };


        // console.log(newPet);
        // $.post("/api/pet", newPet, function (newPet) {

        //     PetID = newPet.id;
        //     localStorage.setItem("pets_id", PetID);
        // })
        // .then(res => {


        $.post("/api/pet/feeding", feedingInfo, function (data) {
        }).then(res => {
            console.log("pet Added");
        })

        $.post("/api/pet/vacc", newVacc, function (data) {
        }).then(res => {
            console.log("pet Added");
        })

        $.post("/api/pet/medication", newMeds, function (data) {
        }).then(res => {
            console.log("pet Added");
        })

        $.post("/api/pet/appt", newAppt, function (data) {
        }).then(res => {
            console.log("pet Added");
        })

        $.post("/api/pet/specInst", specInst, function (data) {
        }).then(res => {
            console.log("pet Added");
        })

            .then(res => {

                // redirects to OWNER Homepage
                window.location.href = "/";

            })

    })
    // console.log("this is the current pet id: " + currentPet);



});


