$(document).ready(function () {
    console.log("I'm loaded");
    $("#submit_pet").on("click", function (event) {
        event.preventDefault();
        console.log("foo")

        // var currentPet = '';

        var newPet = {
            owner_id: "1",
            pets_name: $("#pet-name").val().trim(),
            pet_type: $("#pet-type").val().trim(),
            pet_weight: $("#pet-weight").val().trim(),
            pet_birthday: $("#pet-birthday").val().trim(),
            pet_gender: $("#pet-gender").val().trim(),
            pet_personality: $("#pet-personality").val().trim(),
        };

        var feedingInfo = {
            pets_id: '1',
            pet_food: $("#pet_food").val().trim(),
            food_amount: $("#food_amount").val().trim(),
            morning_feeding: $("#morning-feeding").val().trim(),
            afternoon_feeding: $("#afternoon-feeding").val().trim(),
            night_feeding: $("#night-feeding").val().trim(),
        };

        var newVacc = {
            pets_id: '1',
            vac_name: $("#vac-name").val().trim(),
            vac_status: $("#vac-status").val().trim(),
            vac_due_date: $("#vac-due-date").val().trim(),
        };

        var newMeds = {
            pets_id: '1',
            needs_meds: $("#needs-meds").val().trim(),
            medication_name: $("#medication-name").val().trim(),
            medication_time: $("#medication_time").val().trim(),
            dosage: $("#dosage").val().trim(),
        };

        var newAppt = {
            pets_id: '1',
            vet_name: $("#vet_name").val().trim(),
            vet_address: $("#vet_address").val().trim(),
            appt: $("#appt").val().trim(),
        };

        var specInst = {
            pets_id: '1',
            instructions: $("#instructions").val().trim(),
            info: $("#info").val().trim(),
        };



        console.log(newPet);
        $.post("/api/pet", newPet, function (data) {
        }).then(res => {
            console.log("pet Added")
            // window.location.href = "/pet_profile_setup";
        })

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


        // console.log("this is the current pet id: " + currentPet);

    });




})