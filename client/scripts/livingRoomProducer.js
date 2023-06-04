//wifi
if (document.getElementById("wifi_input")) {
  let wifiSwitch1 = document.getElementById("wifi_input");

  wifiSwitch1.addEventListener("change", function () {
    $(document).ready(function () {
      // Perform a GET request to retrieve the initial kitchen data
      $.ajax({
        url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/getLivingRoom.php",
        type: "GET",
        dataType: "json",
        success: function (data) {
          // the response is an array, access the first element (index 0) for id = 1
          let livingRoomData = data[1];
          // Perform a PUT request to update the kitchen data with the reversed wifi value
          $.ajax({
            url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/putLivingRoom.php?id=1",
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
              wifi: !livingRoomData.wifi,
            }),
            success: function (data, textStatus, jqXHR) {
              console.log("Response status: " + textStatus);
              console.log("Response data: " + JSON.stringify(data));
            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.log("Error status: " + textStatus);
              console.log("Error details: " + errorThrown);
            },
          });
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error status: " + textStatus);
          console.log("Error details: " + errorThrown);
        },
      });
    });
  });
}
//ac
if (document.getElementById("ac_input")) {
  let acSwitch = document.getElementById("ac_input");

  acSwitch.addEventListener("change", function () {
    $(document).ready(function () {
      // Perform a GET request to retrieve the initial kitchen data
      $.ajax({
        url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/getLivingRoom.php",
        type: "GET",
        dataType: "json",
        success: function (data) {
          // the response is an array, access the first element (index 0) for id = 1
          let livingRoomData = data[1];
          // Perform a PUT request to update the kitchen data with the reversed wifi value
          $.ajax({
            url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/putLivingRoom.php?id=1",
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
              ac: !livingRoomData.ac,
            }),
            success: function (data, textStatus, jqXHR) {
              console.log("Response status: " + textStatus);
              console.log("Response data: " + JSON.stringify(data));
            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.log("Error status: " + textStatus);
              console.log("Error details: " + errorThrown);
            },
          });
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error status: " + textStatus);
          console.log("Error details: " + errorThrown);
        },
      });
    });
  });
}
//tv
if (document.getElementById("tv_input")) {
  let tvSwitch = document.getElementById("tv_input");

  tvSwitch.addEventListener("change", function () {
    $(document).ready(function () {
      // Perform a GET request to retrieve the initial kitchen data
      $.ajax({
        url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/getLivingRoom.php",
        type: "GET",
        dataType: "json",
        success: function (data) {
          // the response is an array, access the first element (index 0) for id = 1
          let livingRoomData = data[1];
          // Perform a PUT request to update the kitchen data with the reversed wifi value
          $.ajax({
            url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/putLivingRoom.php?id=1",
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
              tv: !livingRoomData.tv,
            }),
            success: function (data, textStatus, jqXHR) {
              console.log("Response status: " + textStatus);
              console.log("Response data: " + JSON.stringify(data));
            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.log("Error status: " + textStatus);
              console.log("Error details: " + errorThrown);
            },
          });
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error status: " + textStatus);
          console.log("Error details: " + errorThrown);
        },
      });
    });
  });
}

//temperature

if (document.getElementById("temperature")) {
  let temperature = document.getElementById("temperature");
  temperature.addEventListener("input", function () {
    $.ajax({
      url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/putLivingRoom.php?id=1",
      type: "PUT",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        temperature: temperature.value,
      }),
      success: function (data, textStatus, jqXHR) {
        console.log("Response status: " + textStatus);
        console.log("Response data: " + JSON.stringify(data));
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error status: " + textStatus);
        console.log("Error details: " + errorThrown);
      },
    });
  });
}

//lights

if (document.getElementById("light1")) {
  let lightLevelInput = document.getElementById("light1");
  lightLevelInput.addEventListener("input", function () {
    $.ajax({
      url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/putLivingRoom.php?id=1",
      type: "PUT",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        light1: lightLevelInput.value,
      }),
      success: function (data, textStatus, jqXHR) {
        console.log("Response status: " + textStatus);
        console.log("Response data: " + JSON.stringify(data));
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error status: " + textStatus);
        console.log("Error details: " + errorThrown);
      },
    });
  });
}

if (document.getElementById("light2")) {
  let lightLevelInput = document.getElementById("light2");
  lightLevelInput.addEventListener("input", function () {
    $.ajax({
      url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/putLivingRoom.php?id=1",
      type: "PUT",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        light2: lightLevelInput.value,
      }),
      success: function (data, textStatus, jqXHR) {
        console.log("Response status: " + textStatus);
        console.log("Response data: " + JSON.stringify(data));
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error status: " + textStatus);
        console.log("Error details: " + errorThrown);
      },
    });
  });
}

if (document.getElementById("light3")) {
  let lightLevelInput = document.getElementById("light3");
  lightLevelInput.addEventListener("input", function () {
    $.ajax({
      url: "http://localhost/Web_Project_Home_Automation/server/LivingRoom/putLivingRoom.php?id=1",
      type: "PUT",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        light3: lightLevelInput.value,
      }),
      success: function (data, textStatus, jqXHR) {
        console.log("Response status: " + textStatus);
        console.log("Response data: " + JSON.stringify(data));
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error status: " + textStatus);
        console.log("Error details: " + errorThrown);
      },
    });
  });
}
