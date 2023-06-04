$(document).ready(function () {
  function getKitchenData() {
    $.ajax({
      url: "http://localhost/Web_Project_Home_Automation/server/Kitchen/getKitchen.php",
      type: "GET",
      dataType: "json",
      success: function (data) {
        const temperature = data[1].temperature;
        const acStatus = data[1].ac ? "ON" : "OFF";
        const compStatus = data[1].computer ? "ON" : "OFF";
        const washerStatus = data[1].washer ? "ON" : "OFF";
        const light1 = data[1].light1;
        const light2 = data[1].light2;
        const light3 = data[1].light3;

        $("#light1 h2").text(`${light1}%`);
        $("#light2 h2").text(`${light2}%`);
        $("#light3 h2").text(`${light3}%`);
        $("#kitchen_ac h2").text(acStatus);
        $("#kitchen_ac p").text(`${temperature} C°`);
        $("#kitchen_computer h2").text(compStatus);
        $("#kitchen_washer h2").text(washerStatus);
      },
      error: function (xhr, status, error) {
        console.log("Error occurred when retrieving the data");
        console.log("Status: " + status);
        console.log("Error: " + error);
        console.log(xhr.responseText);
      },
    });
  }
  getKitchenData();
});
