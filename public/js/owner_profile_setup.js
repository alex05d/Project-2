//on click event to submit the form
$("#submit").on("click", function (event) {
    event.preventDefault();

    var tokenEmail = $("#email").val().trim();
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

        console.log(owner);
        $.post("/api/owner", owner, function () {

        }).then(
            $.get("/api/owners", function (data) {
                for (var i = 0; i < data.lenght; i++) {
                    if (data[i] == tokenEmail) {
                        console.log('this is the get call: ' + data[i].email);
                        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + tokenEmail);
                    }
                }
            })
        )


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









