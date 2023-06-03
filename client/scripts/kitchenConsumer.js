$(document).ready(function () {
  function getKitchenData() {
    $.ajax({
      url: "http://localhost/Web_Project_Home_Automation/server/getKitchen.php",
      type: "GET",
      dataType: "json",
      success: function (data) {
        var temperature = data[1].temperature;
        var acStatus = data[1].ac ? "ON" : "OFF";
        var compStatus = data[1].computer ? "ON" : "OFF";
        var washerStatus = data[1].washer ? "ON" : "OFF";
        var light1 = data[1].light1;
        var light2 = data[1].light2;
        var light3 = data[1].light3;

        $(".light1").text(light1);
        $(".light2").text(light2);
        $(".light3").text(light3);
        $(".statusAc h1").text(acStatus);
        $(".degree-value_room1 p").text(`${temperature} C°`);
        $(".statusComp1 h1").text(compStatus);
        $(".statusWasher h1").text(washerStatus);
      },
      error: function () {
        console.log("Error occurred when retrieving the data");
      },
    });
  }
  getKitchenData();
});
