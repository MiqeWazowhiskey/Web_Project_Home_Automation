document.addEventListener("DOMContentLoaded", function () {
  const deviceDivs = document.querySelectorAll(".device");

  const showDevices = () => {
    deviceDivs.forEach((div, index) => {
      setTimeout(() => {
        div.style.animationDelay = `${index * 0.2}s`;
        div.classList.add("visible");
      }, 100);
    });
  };

  const title = document.getElementById("room-title");
  const observer = new MutationObserver(showDevices);
  const observerConfig = {
    characterData: true,
    subtree: true,
  };
  observer.observe(title, observerConfig);

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

      newRoomLink.addEventListener("click", function () {
        document.querySelector("#room-title").textContent = roomName;
        document.querySelector(".room-page").style.display = "block";
        document.querySelector("#add-device").style.display = "block";
        document.querySelector("#save-button").style.display = "block";

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
              console.log(v.status);
              var newDeviceDiv = document.createElement("div");
              newDeviceDiv.className = "device";
              newDeviceDiv.style.width = "20%";
              newDeviceDiv.style.height = "300px";
              newDeviceDiv.style.display = "flex";
              newDeviceDiv.style.justifyContent = "center";
              newDeviceDiv.style.alignItems = "center";
              newDeviceDiv.style.rowGap = "24px";
              newDeviceDiv.style.flexDirection = "column";
              newDeviceDiv.style.marginLeft = "auto";
              newDeviceDiv.style.marginRight = "auto";

              var icon = document.createElement("i");
              icon.style.color = "white";
              if (v.deviceName === "tv") {
                icon.className = "fa-solid fa-tv";
              } else if (v.deviceName === "light") {
                icon.className = "fa-solid fa-sun";
              } else if (v.deviceName === "pc") {
                icon.className = "fa-solid fa-computer-speaker";
              } else if (v.deviceName === "ac") {
                icon.className = "fas fa-snowflake";
              } else if (v.deviceName === "washing machine") {
                icon.className = "fa-solid fa-shirt";
              } else if (v.deviceName === "fridge") {
                icon.className = "fa-solid fa-kitchen-set";
              }
              icon.style.fontSize = "48px";
              newDeviceDiv.appendChild(icon);

              let deviceName = document.createElement("div");
              deviceName.textContent = v.deviceName.toUpperCase();
              deviceName.style.color = "white";
              newDeviceDiv.appendChild(deviceName);

              let deviceStatus = document.createElement("div");
              deviceStatus.style.color = "yellow";
              deviceStatus.style.fontWeight = "bold";
              deviceStatus.textContent =
                v.status !== null ? v.status.toUpperCase() : "No info";
              newDeviceDiv.appendChild(deviceStatus);

              document.querySelector(".device-list").appendChild(newDeviceDiv);
            })
          );

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
});
