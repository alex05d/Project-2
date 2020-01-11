//on click event to submit the form
$("#submit").on("click", function (event) {
    event.preventDefault();

    // form validation
    function validForm() {
        var valid = true;
        // validation for name and photo link
        $(".from-control").each(function () {
            if ($(this).val() === "") {
                valid = false;
            }
        });

        // validation for drop down qestions
        $(".answers").each(function () {
            if ($(this).val() === "0") {
                valid = false;
            }
        });
        return valid;
    };
    // if validation is true capture information
    if (validForm()) {
        var owner = {
            first_name: $("#first-name").val().trim(),
            last_name: $("#last-name").val().trim(),
            email: $("#email").val().trim(),
            phone_number: $("#phone").val().trim(),
        };

        // this connects to database
        // (data.name.name) = response from database

        $.post("/api/new-profile", owner, function (data) {
            $("#owner-name").text(data.owner.first_name);
            $("#owner-phone").text(data.owner.phone_number);
            $('#owner-email').text(data.owner.email);
        })
        window.location.href = "/pet_profile_setup";

    } else {
        //
        alert("Please fill in all the fields!");
    }

});

// ======== CREATE, GET, POST ========

// create data in actual database
// db.owners.create({
//     first_name: $("#first-name").val().trim(),
//     last_name: $("#last-name").val().trim(),
//     email: $("#email").val().trim(),
//     phone_number: $("#phone").val().trim(),
// })
//     .then(newUser => {
//         console.log(`New user ${newUser.first_name}, with id ${newUser.id} has been created.`);
//     });


// GET one owner by id
// app.get('/owner/:id', (req, res) => {
//     const id = req.params.id;
//     db.owners.find({
//         where: { id: id }
//     })
//         .then(owner => {
//             res.json(owner);
//         });
// });

// POST single owner
// app.post('/owner', (req, res) => {
//     const name = req.body.name;
//     const role = req.body.role;
//     db.owners.create({
//         name: name,
//         role: role
//     })
//         .then(newOwner => {
//             res.json(newOwner);
//         })
// });









