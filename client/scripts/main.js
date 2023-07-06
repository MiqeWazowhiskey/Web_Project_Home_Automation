const addRoomButton = document.getElementById("add-room");

addRoomButton.addEventListener("click", () => {
  var inputElement = document.getElementById("room-name");
  var inputValue = inputElement.value;
  fetch(
    "http://localhost/Web_Project_Home_Automation/server/Rooms/postRoom.php",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: inputValue,
      }),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
});
