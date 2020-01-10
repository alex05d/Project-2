//click event to submit the form
$(document).ready(function () {


    $("#submit-pet").on("click", function (event) {
        event.preventDefault();

        //1) captures information

        // ABOUT PET
        var aboutPet = {
            pets_name: $("#pet-name").val().trim(),
            pet_type: $("#pet-type").val().trim(),
            pet_weight: $("#pet-weight").val().trim(),
            pet_birthday: $("#pet-birthday").val().trim(),
            pet_gender: $("#pet-gender").val().trim(),
            pet_personality: $("#pet-personality").val().trim(),
        };

        // 2) connects to database
        // (data.name.name) = response from database

        $.post("/api/new-pet-profile", aboutPet, function (data) {
            $("#pet-name").text(data.Pet.pets_name);
            $("#pet-type").text(data.Pet.pet_type);
            $("#pet-weight").text(data.Pet.pet_weight);
            $("#pet-birthday").text(data.Pet.pet_birthday);
            $("#pet-gender").text(data.Pet.pet_gender);
            $("#pet-personality").text(data.Pet.pet_personality);
        })

        /// FEEDING

        var petFeeding = {
            pets_food: $("#pet-food").val().trim(),
            food_amount: $("#food_amount").val().trim(),
            morning_feeding: $("#morning-feeding").val().trim(),
            afternoon_feeding: $("#afternoon-feeding").val().trim(),
            night_feeding: $("#night-feeding").val().trim(),
        };

        $.post("/api/new-pet-profile", petFeeding, function (data) {
            $("#pet-food").text(data.Pet_feeding.pets_food);
            $("food_amount").text(data.Pet_feeding.food_amount);
            $("#morning-feeding").text(data.Pet_feeding.morning_feeding);
            $("#afternoon-feeding").text(data.Pet_feeding.afternoon_feeding);
            $("#night-feeding").text(data.Pet_feeding.night_feeding);
        })

        // VACCINATIONS
        var petVaccination = {
            vac_name: $("#vac-name").val().trim(),
            vac_status: $("#vac-status").val().trim(),
            vac_due_date: $("#vac-due-date").val().trim(),

        };

        $.post("/api/new-pet-profile", petVaccination, function (data) {
            $("#vac-name").text(data.Pet_vaccination.vac_name);
            $("vac-status").text(data.Pet_vaccination.vac_status);
            $("#vac-due-date").text(data.Pet_vaccination.vac_due_date);
        })


        // MEDICATION
        var petMedication = {
            needs_meds: $("#needs_meds").val().trim(),
            medication_name: $("#medication_name").val().trim(),
            medication_time: $("#medication_time").val().trim(),
            dosage: $("#dosage").val().trim(),

        };

        $.post("/api/new-pet-profile", petMedication, function (data) {
            $("#needs_meds").text(data.Medication.needs_meds);
            $("medication_name").text(data.Medication.medication_name);
            $("#medication_time").text(data.Medication.medication_time);
            $("#dosage").text(data.Medication.dosage);
        })

        // APPOINTMENTS
        var petAppt = {
            vet_name: $("#vet_name").val().trim(),
            vet_address: $("#vet_address").val().trim(),
            appt: $("#appt").val().trim(),
        };

        $.post("/api/new-pet-profile", petAppt, function (data) {
            $("#vet_name").text(data.Appt.vet_name);
            $("vet_address").text(data.Appt.vet_address);
            $("#appt").text(data.Appt.appt);
        })

        // SPECIAL INSTRUCTIONS
        var petInstructions = {
            instructions: $("#instructions").val().trim(),
            info: $("#info").val().trim(),
        };

        $.post("/api/new-pet-profile", petInstructions, function (data) {
            $("#instructions").text(data.Special_instruction.instructions);
            $("info").text(data.Special_instruction.info);

        })




        // loads homepage
        window.location.href = "/";



    });

}
