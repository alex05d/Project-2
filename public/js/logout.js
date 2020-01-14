$('#log-button').on("click", function (event) {
    event.preventDefault();

    storage.removeItem("owner_Phone");

    window.location.href = "/start";
})