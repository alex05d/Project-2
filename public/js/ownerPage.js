
$(document).ready(function () {

    $("#logoutButton").on("click", function () {

        localStorage.clear();

        window.location.href = "/start"

    })

    console.log("Owner Page loaded");

    $.get("/api/pet/specInsts", function (data) {
        console.log(data);

    });

    // ownerContainer holds all of our posts
    // var ownerContainer = $(".blog-container4");

    // var postCategorySelect = $("#category");

    // var ownerId = localStorage.getItem("owner_id");


    //===========================  STORE DATA IN LOCAL STORAGE ===========================
    // reference: owner_profile_setup.js

    var ownerName = localStorage.getItem("first_name");
    console.log("Owner Name: " + ownerName)
    $("#owner-name").text(ownerName);

    var ownerEmail = localStorage.getItem("email");
    console.log("Owner Email: " + ownerEmail)
    $("#owner-email").text(ownerEmail);

    var ownerPhone = localStorage.getItem("owner_Phone");
    console.log("Owner Phone: " + ownerPhone)
    $("#owner-phone").text(ownerPhone);

    //===========================

    // ownerName.append("#owner-name");

    // Click events for the edit and delete buttons
    // $(document).on("click", "button.delete", handlePostDelete);
    // $(document).on("click", "button.edit", handlePostEdit);
    // postCategorySelect.on("change", handleCategoryChange);
    // var posts;

    // This function grabs posts from the database and updates the view
    // function getPets(category) {
    //     var categoryString = category || "";
    //     if (categoryString) {
    //         categoryString = "/category/" + categoryString;
    //     }


    // $.get("/api/owner/pet/" + ownerId, function (data) {
    //     console.log(data, + "owner id: " + ownerId);
    // posts = data;
    // if (!posts || !posts.length) {
    //     displayEmpty();
    // }
    // else {
    //     initializeRows();
    // }
    // });
    // }

    // This function does an API call to delete posts
    // function deletePost(id) {
    //   $.ajax({
    //     method: "DELETE",
    //     url: "api/pet/vacc/" + id
    //   })
    //     .then(function() {
    //       getPets(postCategorySelect.val());
    //     });
    // }

    // Getting the initial list of posts
    // getPets();
    // InitializeRows handles appending all of our constructed post HTML inside
    // ownerContainer
    // function initializeRows() {
    //     ownerContainer.empty();
    //     var postsToAdd = [];
    //     for (var i = 0; i < posts.length; i++) {
    //         postsToAdd.push(createNewRow(posts[i]));
    //     }
    //     ownerContainer.append(postsToAdd);
    // }

    // This function constructs a post's HTML
    // function createNewRow(post) {
    //     var newPostCard = $("<div>");
    //     newPostCard.addClass("card");
    //     newPostCard.css({
    //         "margin-bottom": "10px"
    //     });
    //     var newPostCardHeading = $("<div>");
    //     newPostCardHeading.addClass("card-header");
    //     var deleteBtn = $("<button>");
    //     deleteBtn.text("x");
    //     deleteBtn.addClass("delete btn btn-danger");
    //     deleteBtn.css({
    //         float: "right"
    //     });
    //     var editBtn = $("<button>");
    //     editBtn.css({
    //         float: "right"
    //     });
    //     editBtn.text("EDIT");
    //     editBtn.addClass("edit btn btn-default");
    //     var newPostTitle = $("<h5>");
    //     newPostTitle.css({
    //         float: "center",
    //         "font-weight": "700",
    //         "font-color": "#CCCCCC",
    //         "margin-bottom":
    //             "15px",
    //         "fontSize": "12px",
    //         "margin-right": "15px"
    //     });
    // var newPostDate = $("<small>");

    //         var newPostCategory = $("<h5>");
    //         newPostCategory.css({
    //             "font-weight": "700",
    //             "margin-top":
    //                 "14px"
    //         });
    //         newPostCategory.text("Food Name: " + post.pet_food);

    //         var newPostCardBody = $("<div>");
    //         newPostCardBody.addClass("card-body");
    //         var newPostBody = $("<p>");
    //         var newPostBody2 = $("<p>");
    //         var newPostBody3 = $("<p>");
    //         var newPostBody4 = $("<p>");
    //         newPostTitle.text("Food Brand: #" + post.id);
    //         // newPostTitle.text(post.vet_name + " ");
    //         // newPostBody.text("Does Your Pet Need Medication: " + post.needs_meds);
    //         newPostBody.text("Food Amount per Serving: " + post.food_amount);
    //         newPostBody2.text("Morning Feeding Time " + post.morning_feeding);
    //         newPostBody3.text("Afternoon Feeding Time " + post.afternoon_feeding);
    //         newPostBody4.text("Evening Feeding Time " + post.night_feeding)
    //         // var formattedDate = new Date(post.createdAt);
    //         // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    //         // newPostDate.text(formattedDate);
    //         // newPostTitle.append(newPostDate);
    //         newPostCardHeading.append(deleteBtn);
    //         newPostCardHeading.append(editBtn);
    //         newPostCardHeading.append(newPostTitle);
    //         newPostCardHeading.append(newPostCategory);
    //         newPostCardBody.append(newPostBody);
    //         newPostCardBody.append(newPostBody2);
    //         newPostCardBody.append(newPostBody3);
    //         newPostCardBody.append(newPostBody4);
    //         newPostCard.append(newPostCardHeading);
    //         newPostCard.append(newPostCardBody);
    //         newPostCard.data("post", post);
    //         return newPostCard;
    //     }

    //     // This function figures out which post we want to delete and then calls
    //     // deletePost
    //     function handlePostDelete() {
    //         var currentPost = $(this)
    //             .parent()
    //             .parent()
    //             .data("post");
    //         deletePost(currentPost.id);
    //     }

    //     // This function figures out which post we want to edit and takes it to the
    //     // Appropriate url
    //     function handlePostEdit() {
    //         var currentPost = $(this)
    //             .parent()
    //             .parent()
    //             .data("post");
    //         window.location.href = "/cms?post_id=" + currentPost.id;
    //     }

    //     // This function displays a message when there are no posts
    //     function displayEmpty() {
    //         ownerContainer.empty();
    //         ownerContainer.css({

    //             "background-color": "#AE9E41"
    //         });
    //         var messageH2 = $("<h2>");
    //         messageH2.css({
    //             "text-align": "center",
    //             "margin-top": "30px",

    //         });
    //         messageH2.html("No posts yet for this category");
    //         ownerContainer.append(messageH2);
    //     }

    //     // This function handles reloading new posts when the category changes
    //     function handleCategoryChange() {
    //         var newPostCategory = $(this).val();
    //         getPets(newPostCategory);
    //     }

    //     // Makes modal pop up
    //     // $('button').click(function () {
    //     //     $('#myModal').modal('show');
    //     // });

    // )
});
