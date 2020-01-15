
$(document).ready(function () {

    var ownerEmail = localStorage.getItem("email");
    var ownerPhone = localStorage.getItem("owner_Phone");
    var OWNERID = localStorage.getItem("owner_id");
    var ownerName = localStorage.getItem("first_name");
    ownerName = ownerName.toUpperCase();


    $("#owner-phone").text(ownerPhone);
    $("#owner-name").text(ownerName);
    $("#owner-email").text(ownerEmail);

    console.log("Owner Page loaded");
    console.log("Owner Email: " + ownerEmail);
    console.log("Owner Name: " + ownerName);
    console.log("Owner Phone: " + ownerPhone);



    /// logout button///////////
    $("#logoutButton").on("click", function () {

        localStorage.clear();
        window.location.href = "/index"
    });


    // ownerContainer holds all of our posts
    var ownerContainer = $(".ownerContainer");
    ownerContainer.css({
        "float": "left",
        "justify-content": "center",
        "width": "120%"
    })




    // This function grabs posts from the database and updates the view
    function getPets(posts) {
        $.get("/api/owner/pet/" + OWNERID, function (data) {

        }).then(res => {
            posts = res;
            console.log(res);
            initializeRows(posts);
        });

    }



    // Getting the initial list of posts
    getPets();
    // InitializeRows handles appending all of our constructed post HTML inside
    // ownerContainer
    function initializeRows(posts) {
        ownerContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(myPetButton(posts[i]));
        }
        ownerContainer.append(postsToAdd);
    }


    function myPetButton(posts) {
        var newPetCard = $("<div>");
        newPetCard.addClass("card");
        newPetCard.attr('href', "https://www.google.com/");
        newPetCard.attr('data-id', posts.id);
        newPetCard.css({
            "border-width": "10px",
            "border-color": "black",
            "background": "#585d6c",
            "float": "left",
            "width": "300px",
            "height": "400px",
            "margin": "10px",
            "padding": "1rem",
            "position": "relative",
            "justify-content": "center",
            "text-align": "center",
        });

        var newPostCardHeading = $("<div>");
        newPostCardHeading.addClass("card-body");

        var petImage = $("<div>");
        petImage.css({
            "width": "270px",
            "margin": "auto"
        })
        petImage.append('<img id="theImg" src="https://cdn.pixabay.com/photo/2012/04/11/11/39/footprint-27615_960_720.png" />');


        var petName = $("<h3>");
        petName.text(posts.pets_name);
        petName.css({
            "font-family": "'Raleway', sans-serif'",
            "letter-spacing": ".2rem",
            "font-size": "25px",
            "text-align": "center",
            "color": "white",
            "text-transform": "uppercase"
        })

        var petType = $("<h4>");
        petType.text(posts.pet_type);
        petType.css({
            "font-family": "'Crimson Pro', serif'",
            "letter-spacing": ".2rem",
            "font-size": "15px",
            "text-align": "center",
            "color": "white",
            "text-transform": "uppercase"
        })

        var petGender = $("<h4>");
        petGender.text(posts.pet_gender);
        petGender.css({
            "font-family": "'Crimson Pro', serif'",
            "letter-spacing": ".2rem",
            "font-size": "15px",
            "text-align": "center",
            "color": "white",
            "text-transform": "uppercase"
        })

        newPostCardHeading.append(petImage);
        newPostCardHeading.append(petName);
        newPostCardHeading.append(petType);
        newPostCardHeading.append(petGender);
        newPetCard.append(newPostCardHeading);



        return newPetCard;

    }

    $(document).on("click", ".card", function () {

        var newPetID = $(this).attr('data-id');
        localStorage.setItem("pet_id", newPetID);
        window.location.href = "/profile_page";
    });





});
