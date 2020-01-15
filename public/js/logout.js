$('#log-button').on("click", function (event) {
    event.preventDefault();

    storage.removeItem("owner_Phone");
    storage.removeItem("pet_id");
    storage.removeItem("email");

    window.location.href = "/start";
})