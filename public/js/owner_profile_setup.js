//on click event to submit the form


$("#submit").on("click", function (event) {
    event.preventDefault();

    var tokenEmail = $("#email").val().trim();
    localStorage.setItem("email", tokenEmail);




    var owner = {
        first_name: $("#first-name").val().trim(),
        last_name: $("#last-name").val().trim(),
        email: $("#email").val().trim(),
        phone_number: $("#phone").val().trim(),
    };

    console.log(owner);
    $.post("/api/owner", owner, function () {

    }).then(res => {
        window.location.href = "/pet";

    })


});










