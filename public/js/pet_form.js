// ======== PET PROFILE SETUP FORM (2) ========
// ======== profile_setup.html  ========

$(document).ready(function () {

    // var PetID = localStorage.getItem("pet_id");

    $("#submit_pet").on("click", function (event) {
        var PetID = localStorage.getItem("pet_id");
        event.preventDefault();

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



        $.post("/api/pet/feeding", feedingInfo, function (data) {
        }).then(res => {
        })

        $.post("/api/pet/vacc", newVacc, function (data) {
        }).then(res => {
        })

        $.post("/api/pet/medication", newMeds, function (data) {
        }).then(res => {
        })

        $.post("/api/pet/appt", newAppt, function (data) {
        }).then(res => {
        })

        $.post("/api/pet/specInst", specInst, function (data) {
        }).then(res => {
        })


        $.post("/api/pet/specInst", specInst, function (data) {
        }).then(res => {
        })

            .then(res => {
                // redirects to Owner Profile
                window.location.href = "/home"
            })
    });
});
