document.addEventListener("DOMContentLoaded", function () {
  var rooms = [];
  let roomData = [];
  let devices = [];
  function updateUI() {
    var roomList = document.querySelector(".room-list");
    roomList.innerHTML = "";

    rooms.forEach(function (roomName) {
      var newRoomLink = document.createElement("a");
      newRoomLink.href = "#";
      newRoomLink.textContent = roomName;

      var deleteRoomButton = document.createElement("button");
      deleteRoomButton.textContent = "x";
      deleteRoomButton.addEventListener("click", function (event) {
        event.stopPropagation();
        if (confirm("Are you sure you want to delete this room?")) {
          delete rooms[roomName];
          newRoomLink.remove();
          document.querySelector(".room-page").style.display = "none";
        }
      });
      newRoomLink.appendChild(deleteRoomButton);

      newRoomLink.addEventListener("click", function () {
        document.querySelector("#room-title").textContent = roomName;
        document.querySelector(".room-page").style.display = "block";
        document.querySelector("#add-device").style.display = "block";
        const room = roomData.filter((v) => v.roomName === roomName);
        const roomId = room[0].roomId;
        fetch(
          `http://localhost/Web_Project_Home_Automation/server/Devices/getDevices.php?roomId=${roomId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((response) => response.json())
          .then((data) =>
            data.forEach((v) => {
              var newDeviceDiv = document.createElement("div");
              newDeviceDiv.className = "device";
              newDeviceDiv.textContent = v.deviceName.toUpperCase();
              newDeviceDiv.style.color = "white";
              document.querySelector(".device-list").appendChild(newDeviceDiv);

              var deleteDeviceButton = document.createElement("button");
              deleteDeviceButton.textContent = "x";
              deleteDeviceButton.addEventListener("click", function () {
                if (confirm("Are you sure you want to delete this device?")) {
                  var deviceIndex = rooms[roomName].indexOf(deviceType);
                  if (deviceIndex > -1) {
                    rooms[roomName].splice(deviceIndex, 1);
                  }
                  newDeviceDiv.remove();
                }
              });
              newDeviceDiv.appendChild(deleteDeviceButton);
            })
          );

        var deviceList = document.querySelector(".device-list");
        deviceList.innerHTML = "";
        var devices = rooms[roomName] || [];
        devices.forEach(function (deviceType) {
          addDeviceDiv(deviceType, roomName);
        });

        var roomLinks = document.querySelectorAll(".room-list a");
        roomLinks.forEach(function (roomLink) {
          roomLink.classList.remove("active");
        });
        newRoomLink.classList.add("active");
      });

      roomList.appendChild(newRoomLink);
    });
  }

  fetch(
    "http://localhost/Web_Project_Home_Automation/server/Rooms/getRooms.php",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        roomData = data;
        rooms = data.map((v) => v.roomName);
        updateUI();
      }
    })
    .catch((error) => {
      console.log(error);
    });

  function addRoomLink(roomName) {
    var newRoomLink = document.createElement("a");
    newRoomLink.href = "#";
    newRoomLink.textContent = roomName;

    var deleteRoomButton = document.createElement("button");
    deleteRoomButton.textContent = "x";
    deleteRoomButton.addEventListener("click", function (event) {
      event.stopPropagation();
      if (confirm("Are you sure you want to delete this room?")) {
        delete rooms[roomName];
        newRoomLink.remove();
        document.querySelector(".room-page").style.display = "none";
      }
    });
    newRoomLink.appendChild(deleteRoomButton);

    newRoomLink.addEventListener("click", function () {
      document.querySelector("#room-title").textContent = roomName;
      document.querySelector(".room-page").style.display = "block";
      document.querySelector("#add-device").style.display = "block";

      var deviceList = document.querySelector(".device-list");
      deviceList.innerHTML = "";
      var devices = rooms[roomName] || [];
      devices.forEach(function (deviceType) {
        addDeviceDiv(deviceType, roomName);
      });

      var roomLinks = document.querySelectorAll(".room-list a");
      roomLinks.forEach(function (roomLink) {
        roomLink.classList.remove("active");
      });
      newRoomLink.classList.add("active");
    });
    document.querySelector(".room-list").appendChild(newRoomLink);
  }

  function addDeviceDiv(deviceType, roomName) {
    var newDeviceDiv = document.createElement("div");
    newDeviceDiv.className = "device";
    newDeviceDiv.textContent = deviceType.toUpperCase();

    var deleteDeviceButton = document.createElement("button");
    deleteDeviceButton.textContent = "x";
    deleteDeviceButton.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this device?")) {
        var deviceIndex = rooms[roomName].indexOf(deviceType);
        if (deviceIndex > -1) {
          rooms[roomName].splice(deviceIndex, 1);
        }
        newDeviceDiv.remove();
      }
    });
    newDeviceDiv.appendChild(deleteDeviceButton);

    document.querySelector(".device-list").appendChild(newDeviceDiv);
  }

  document
    .querySelector(".add-room-btn")
    .addEventListener("click", function () {
      document.querySelector(".add-room-form").style.display = "block";
    });

  document.querySelector("#add-room").addEventListener("click", function () {
    var roomName = document.querySelector("#room-name").value;
    if (roomName) {
      addRoomLink(roomName);
      rooms[roomName] = [];

      document.querySelector("#room-name").value = "";
      document.querySelector(".add-room-form").style.display = "none";
    }
  });

  document
    .querySelector("#cancel-add-room")
    .addEventListener("click", function () {
      document.querySelector(".add-room-form").style.display = "none";
    });

  document.querySelector("#add-device").addEventListener("click", function () {
    document.querySelector(".add-device-form").style.display = "block";
  });

  document
    .querySelector("#cancel-add-device")
    .addEventListener("click", function () {
      document.querySelector(".add-device-form").style.display = "none";
    });

  document
    .querySelector("#add-device-to-room")
    .addEventListener("click", function () {
      var deviceType = document.querySelector("#device-type").value;
      if (deviceType) {
        var roomName = document.querySelector("#room-title").textContent;
        const data = roomData.filter((v) => v.roomName === roomName);
        const roomId = data[0].roomId;

        fetch(
          "http://localhost/Web_Project_Home_Automation/server/Devices/postDevice.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: deviceType,
              roomId: roomId,
            }),
          }
        ).catch((err) => {
          console.log(err);
        });

        document.querySelector("#device-type").value = "";
        document.querySelector(".add-device-form").style.display = "none";
      }
    });
});
