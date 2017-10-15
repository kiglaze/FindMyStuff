$(document).ready(function() {
    // Adding event listeners to the form to create a new room
    $(document).on("submit", "#room-form", handleRoomFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Room
    function handleRoomFormSubmit(event) {
        event.preventDefault();
        var nameInput = $("#room-name");
        var descInput = $("#room-description");
        var userId = $("#user-id");
        var roomData = {};

        // Don't do anything if the name or description fields haven't been filled out
        if (!nameInput.val().trim() || !descInput.val().trim()) {
            return;
        }

        roomData = {
            name: nameInput.val().trim(),
            description: descInput.val().trim(),
            UserId: parseInt(userId.val())
        };

        $.post("/api/rooms", roomData)
            .then(function() {
                nameInput.val("");
                descInput.val("");
                location.reload();
            });
    }

    $("#search-items-button").on("click", function() {
    	alert($("#search-items-bar").val());
    })
});
