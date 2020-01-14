
$(document).ready(function () {

    $("#logoutButton").on("click", function () {

        localStorage.clear();

        window.location.href = "/start"

    })

    console.log("Owner Page loaded");

    $.get("/api/pet/specInsts", function (data) {
        console.log(data);

    });




    // STORE DATA IN LOCAL STORAGE ===========================
    // (refer to file: petProfileSetup.js )

    var petName = localStorage.getItem("pet-name");
    console.log("Pet Name: " + petName)
    $("#pet-name").text(petName);





});


// ======== jQUERY CREATES THUMBNAIL FOR EACH PET
// ================================================================

// petProfileThumbnails holds all of our posts
var petProfileThumbnails = $(".pet-thumbnail");


// This function grabs posts from the database and updates the view
function getPosts() {

    // findAll Pets
    $.get("/api/owner/pet/" + OwnerId, function (data) {
        console.log("Posts", data);
        posts = data;

        initializeRows();

    });
}

// Getting the initial list of posts
getPosts();

// InitializeRows handles appending all of our constructed post HTML inside
// petProfileThumbnails
function initializeRows() {
    petProfileThumbnails.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
    }
    petProfileThumbnails.append(postsToAdd);
}

// This function constructs a post's HTML
function createNewRow(post) {

    // pet card created
    var newPetCard = $("<div>");
    newPetCard.addClass("card");
    newPetCard.css({
        "margin-bottom": "10px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "15px",
        "padding-right": "15px",
        "background-color": "#585D6C"
    });

    // pet name div
    var newPetCardHeading = $("<div>");
    newPetCardHeading.addClass("card-header");
    newPetCardHeadin.css({
        "font-color": "#CCCCCC",
    })

    // pet name 
    var newPetName = $("<h5>");
    newPetName.css({
        float: "center",
        "font-weight": "700",
        "font-color": "#CCCCCC",
        "margin-bottom":
            "15px",
        "fontSize": "12px",
        "margin-right": "15px"
    });
    // pulls pet name from database
    newPetName.text(post.pets_name);

    // ======

    newPetCardHeading.append(newPetName);
    newPetCardBody.append(newPostBody);
    newPetCardBody.append(newPostBody);
    newPetCard.append(newPetCardHeading);
    newPetCard.append(newPetCardBody);
    newPetCard.data("post", post);
    return newPetCard;
}



