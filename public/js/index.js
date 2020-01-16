$(document).ready(function () {
    $("#signinSubmit").on("click", function (event) {
        event.preventDefault();

        var tokenEmail = $("#signinEmail").val().trim();
        localStorage.setItem("email", tokenEmail);

        $.get("/api/owner/" + tokenEmail, function (data) {

        }).then(res => {
            var OwnerID = res.id;
            var newPhone = res.phone_number;
            var newName = res.first_name;
            localStorage.setItem("owner_id", OwnerID);
            localStorage.setItem("owner_Phone", newPhone);
            localStorage.setItem("first_name", newName);


        }).then(res => {
            window.location.href = "/home"
        })

    });

});