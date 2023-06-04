$(document).ready(function () {
  function getKitchenData() {
    $.ajax({
      url: "http://localhost/Web_Project_Home_Automation/server/Usage/getUsage.php",
      type: "GET",
      dataType: "json",
      success: function (data) {
        const day1 = data[1].day1;
        const day2 = data[1].day2;
        const day3 = data[1].day3;
        const day4 = data[1].day4;
        const day5 = data[1].day5;
        const day6 = data[1].day6;
        const day7 = data[1].day7;
        new Morris.Line({
          // ID of the element in which to draw the chart.
          element: "myfirstchart",
          // Chart data records -- each entry in this array corresponds to a point on
          // the chart.
          lineColors: ["#00A36C"],
          data: [
            { day: "1", value: day1 },
            { day: "2", value: day2 },
            { day: "3", value: day3 },
            { day: "4", value: day4 },
            { day: "5", value: day5 },
            { day: "6", value: day6 },
            { day: "7", value: day7 },
          ],
          // The name of the data record attribute that contains x-values.
          xkey: "day",
          // A list of names of data record attributes that contain y-values.
          ykeys: ["value"],
          // Labels for the ykeys -- will be displayed when you hover over the
          // chart.
          labels: ["Value"],
        });
        Morris.Donut({
          element: "donut-example",
          data: [
            { label: "day1", value: day1 },
            { label: "day2", value: day2 },
            { label: "day3", value: day3 },
            { label: "day4", value: day4 },
            { label: "day5", value: day5 },
            { label: "day6", value: day6 },
            { label: "today", value: day7 },
          ],
          labelColor: "#ffffff",
          colors: ["#00A36C", "#274C77", "orange", "#274C77", "#E6E6FA"],
        });
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
