
$(document).ready(function () {
    console.log("this is loaded")



    $('.my_button').click(function () {
        var newPetID = $(this).val();
        localStorage.setItem("pet_id", newPetID);
        window.location.href = "/profile_page";
    });


    var ownerEmail = localStorage.getItem("email");
    var ownerPhone = localStorage.getItem("owner_Phone");
    var OWNERID = localStorage.getItem("owner_id");
    var ownerName = localStorage.getItem("first_name");


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
            // "border-radius": "150px",
            // "background-image": "url('https://cdn.pixabay.com/photo/2012/04/11/11/39/footprint-27615_960_720.png')",
            // "background-size": "auto"
        });

        var newPostCardHeading = $("<div>");
        newPostCardHeading.addClass("card-body");

        var petImage = $("<div>");
        //petImage.addValue(posts.id);
        petImage.css({
            "width": "270px",
            //"overflow": "hidden",
            "margin": "auto"
        })
        petImage.append('<img id="theImg" src="https://cdn.pixabay.com/photo/2012/04/11/11/39/footprint-27615_960_720.png" />');
        //petImage.$(".my_button");

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



        // var petInfo = $("<div>")
        return newPetCard;

    }




    /*
     // This function constructs a post's HTML
     function createNewRow(post) {
         var newPostCard = $("<div>");
         newPostCard.addClass("card");
         newPostCard.css({
             "margin-bottom": "10px"
         });
         var newPostCardHeading = $("<div>");
         newPostCardHeading.addClass("card-header");
         var deleteBtn = $("<button>");
         deleteBtn.text("x");
         deleteBtn.addClass("delete btn btn-danger");
         deleteBtn.css({
             float: "right"
         });
         var editBtn = $("<button>");
         editBtn.css({
             float: "right"
         });
         editBtn.text("EDIT");
         editBtn.addClass("edit btn btn-default");
         var newPostTitle = $("<h5>");
         newPostTitle.css({
             float: "center",
             "font-weight": "700",
             "font-color": "#CCCCCC",
             "margin-bottom":
                 "15px",
             "fontSize": "12px",
             "margin-right": "15px"
         });
         var newPostDate = $("<small>");
 
         var newPostCategory = $("<h5>");
         newPostCategory.css({
             "font-weight": "700",
             "margin-top":
                 "14px"
         });
         newPostCategory.text("Food Name: " + post.pet_food);
 
         var newPostCardBody = $("<div>");
         newPostCardBody.addClass("card-body");
         var newPostBody = $("<p>");
         var newPostBody2 = $("<p>");
         var newPostBody3 = $("<p>");
         var newPostBody4 = $("<p>");
         newPostTitle.text("Food Brand: #" + post.id);
         newPostTitle.text(post.vet_name + " ");
         newPostBody.text("Does Your Pet Need Medication: " + post.needs_meds);
         newPostBody.text("Food Amount per Serving: " + post.food_amount);
         newPostBody2.text("Morning Feeding Time " + post.morning_feeding);
         newPostBody3.text("Afternoon Feeding Time " + post.afternoon_feeding);
         newPostBody4.text("Evening Feeding Time " + post.night_feeding)
         // var formattedDate = new Date(post.createdAt);
         // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
         // newPostDate.text(formattedDate);
         newPostTitle.append(newPostDate);
         newPostCardHeading.append(deleteBtn);
         newPostCardHeading.append(editBtn);
         newPostCardHeading.append(newPostTitle);
         newPostCardHeading.append(newPostCategory);
         newPostCardBody.append(newPostBody);
         newPostCardBody.append(newPostBody2);
         newPostCardBody.append(newPostBody3);
         newPostCardBody.append(newPostBody4);
         newPostCard.append(newPostCardHeading);
         newPostCard.append(newPostCardBody);
         newPostCard.data("post", post);
         return newPostCard;
     }
 
     // This function figures out which post we want to delete and then calls
     // deletePost
     function handlePostDelete() {
         var currentPost = $(this)
             .parent()
             .parent()
             .data("post");
         deletePost(currentPost.id);
     }
 
     // This function figures out which post we want to edit and takes it to the
     // Appropriate url
     function handlePostEdit() {
         var currentPost = $(this)
             .parent()
             .parent()
             .data("post");
         window.location.href = "/cms?post_id=" + currentPost.id;
     }
 
     // This function displays a message when there are no posts
     function displayEmpty() {
         ownerContainer.empty();
         ownerContainer.css({
 
             "background-color": "#AE9E41"
         });
         var messageH2 = $("<h2>");
         messageH2.css({
             "text-align": "center",
             "margin-top": "30px",
 
         });
         messageH2.html("No posts yet for this category");
         ownerContainer.append(messageH2);
     }
 
     // This function handles reloading new posts when the category changes
     // function handleCategoryChange() {
     //     var newPostCategory = $(this).val();
     //     getPets(newPostCategory);
     // }
 
     // Makes modal pop up
     // $('button').click(function () {
     //     $('#myModal').modal('show');
     // });
 
     */


});
