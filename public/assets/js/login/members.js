$(document).ready(function () {
  // Adding event listener to the form to create a new room
  $(document).on("submit", "#room-form", handleRoomFormSubmit);

  // A function to handle what happens when the form is submitted to create a new Room
  function handleRoomFormSubmit(event) {
  	event.preventDefault();
  	var nameInput = $("#room-name");
  	var descInput = $("#room-description");
  	var userId = $("#user-id");
  	var roomData;

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
    .then(function () {
    	nameInput.val("");
    	descInput.val("");
    	location.reload();
    });
}


  // Adding event listeners to the forms to create new items in rooms
  $(".item-form").on("submit", function () {
  	event.preventDefault();
    // extract room id from the id of the first input field in the form
    var roomId = parseInt($(this).children("input[type='text']:first").attr('id').replace(/[^\d]/g, ''), 10);
    // find the item name and item description fields
    var nameInput = $("#room-" + roomId + "-item-name");
    var descInput = $("#room-" + roomId + "-item-description");
    var itemData;

    // Don't do anything if the name or description fields haven't been filled out
    if (!nameInput.val().trim() || !descInput.val().trim()) {
    	return;
    }

    // populate the object to post
    itemData = {
    	name: nameInput.val().trim(),
    	description: descInput.val().trim(),
    	RoomId: roomId
    };

    $.post("/api/items", itemData)
    .then(function () {
    	nameInput.val("");
    	descInput.val("");
    	location.reload();
    });
});

  $("#search-items-button").on("click", function() {
  	var itemSearch = $("#search-items-bar").val();
  	var itemNameAjaxUrl = `/api/items/name/${itemSearch}`;
  	// alert(itemNameAjaxUrl);
  	$.get(itemNameAjaxUrl, function(response) {
  		var roomsArray = [];
  		var roomsNamesArray = [];
  		$.each(response, function(key, value) {
  			var room = value.Room;
  			roomsArray.push(room);
  			roomsNamesArray.push(room.name);
  		});

  		alert(`Your item is in the following rooms: \n` +
  			roomsNamesArray.join(", "));
  	});
  })


  // Adding click handlers for the "Remove Item" buttons
  $(".item-remove-button").on("click", function () {
    // extract item id from the id of the button clicked
    var itemId = parseInt($(this).attr('id').replace(/[^\d]/g, ''), 10);

    // do an API call to delete the item with the specific id
    $.ajax({
      method: "DELETE",
      url: "/api/items/" + itemId
    })
        .done(function () {
          location.reload();
        });
  });

});
