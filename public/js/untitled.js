// this grabs posts from database
function getInfo(vaccination) {
    var vacString = vaccination || "";
    if (vacString) {
        vacString = "/category/" + vacString;
    }
    $.get("/api/pet/vacc" + vacString, function (data) {
        console.log("Posts", data);

        if (!posts || !posts.length) {
            displayEmpty();
        }
        else {
            initializeRows();
        }
    });
}

getInfo();
