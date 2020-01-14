$(document).ready(function () {

    // $(document).foundation();

    // blogContainer holds all of our posts
    var blogContainer = $(".blog-container2");
    var postCategorySelect = $("#category");



    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    postCategorySelect.on("change", handleCategoryChange);
    var posts;

    // This function grabs posts from the database and updates the view
    function getPosts(PetId) {
        var PetId = "2"

        $.get("/api/pet/medications/" + PetId, function (data) {

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

    // This function does an API call to delete posts
    // function deletePost(id) {
    //   $.ajax({
    //     method: "DELETE",
    //     url: "api/pet/vacc/" + id
    //   })
    //     .then(function() {
    //       getPosts(postCategorySelect.val());
    //     });
    // }

    // Getting the initial list of posts
    getPosts();
    // InitializeRows handles appending all of our constructed post HTML inside
    // blogContainer
    function initializeRows() {
        blogContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(createNewRow(posts[i]));
        }
        blogContainer.append(postsToAdd);
    }

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
        // var newPostDate = $("<small>");

        var newPostCategory = $("<h5>");
        newPostCategory.css({
            "font-weight": "700",
            "margin-top":
                "14px"
        });
        newPostCategory.text("Medication Name: " + post.medication_name);

        var newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        var newPostBody = $("<p>");
        var newPostBody2 = $("<p>");
        newPostTitle.text("Medication: #" + post.id);
        // newPostTitle.text(post.vet_name + " ");
        // newPostBody.text("Does Your Pet Need Medication: " + post.needs_meds);
        newPostBody.text("Medication Time: " + post.medication_time);
        newPostBody2.text("Dosage Amount: " + post.dosage);
        // var formattedDate = new Date(post.createdAt);
        // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        // newPostDate.text(formattedDate);
        // newPostTitle.append(newPostDate);
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
        blogContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({
            "text-align": "center",
            "margin-top": "50px",
            "margin-bottom": "50px"
        });
        messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
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
