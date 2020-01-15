$(document).ready(function () {
    // blogContainer holds all of our posts
    var blogContainer = $(".blog-container");
    var postCategorySelect = $("#category");



    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    postCategorySelect.on("change", handleCategoryChange);


    var posts;

    function getPosts(PetId) {
        var PetId = localStorage.getItem('pet_id');

        $.get("/api/pet/vaccs/" + PetId, function (data) {

        }).then(res => {
            console.log("Posts", res);
            posts = res;
            if (!posts || !posts.length) {
                displayEmpty();
            }
            else {
                initializeRows();
            }
        })
    }


    getPosts();

    function initializeRows() {
        blogContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(createNewRow(posts[i]));
        }
        blogContainer.append(postsToAdd);
    }


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
        // var newPostDate = $("<small>");

        var newPostCategory = $("<h5>");
        newPostCategory.css({
            "font-weight": "700",
            "margin-top":
                "14px"
        });
        newPostCategory.text("Vaccination Name: " + post.vac_name);

        var newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        var newPostBody = $("<p>");
        var newPostBody2 = $("<p>");
        newPostTitle.text("Vaccination: #" + post.id);
        // newPostTitle.text(post.vet_name + " ");
        // newPostBody.text("Does Your Pet Need Medication: " + post.needs_meds);

        newPostBody.text("Vaccination Status: " + post.vac_status);
        newPostBody2.text("Vaccination Due Date: " + post.vac_due_date);
        newPostCardHeading.append(deleteBtn);
        newPostCardHeading.append(editBtn);
        newPostCardHeading.append(newPostTitle);
        newPostCardHeading.append(newPostCategory);
        newPostCardBody.append(newPostBody);
        newPostCardBody.append(newPostBody2);
        newPostCard.append(newPostCardHeading);
        newPostCard.append(newPostCardBody);
        newPostCard.data("post", post);
        return newPostCard;
    }


    function handlePostDelete() {
        var currentPost = $(this)
            .parent()
            .parent()
            .data("post");
        deletePost(currentPost.id);
    }


    function handlePostEdit() {
        var currentPost = $(this)
            .parent()
            .parent()
            .data("post");
        window.location.href = "/cms?post_id=" + currentPost.id;
    }


    function displayEmpty() {
        blogContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No info yet for this section, navigate <a href='/pet'>here</a> in order to create a new vaccinations.");
        blogContainer.append(messageH2);
    }

    // This function handles reloading new posts when the category changes
    function handleCategoryChange() {
        var newPostCategory = $(this).val();
        getPosts(newPostCategory);
    }

    // Makes modal pop up
    // $('button').click(function () {
    //     $('#myModal').modal('show');
    // });



});
