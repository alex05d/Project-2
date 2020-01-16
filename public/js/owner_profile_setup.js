// ======== OWNER PROFILE SETUP FORM ========
// ===== owner_profile_setup.html ==========



//on click event to submit the form
$("#submit").on("click", function (event) {
    event.preventDefault();


    // FIRST NAME : stored into LOCAL storage
    var ownerFirstName = $("#first-name").val().trim();
    localStorage.setItem("first_name", ownerFirstName);

    // EMAIL : stored into LOCAL storage
    var tokenEmail = $("#email").val().trim();
    localStorage.setItem("email", tokenEmail);


    // PHONE : stored into LOCAL storage
    var ownerPhone = $("#phone").val().trim();
    localStorage.setItem("owner_Phone", ownerPhone);




    var owner = {
        first_name: $("#first-name").val().trim(),
        last_name: $("#last-name").val().trim(),
        email: $("#email").val().trim(),
        phone_number: $("#phone").val().trim(),
    };

    $.post("/api/owner", owner, function () {

    }).then(res => {
        window.location.href = "/about_pet_setup_form";

    })

});

