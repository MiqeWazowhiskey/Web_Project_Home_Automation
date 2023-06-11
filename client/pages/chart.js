new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    lineColors: ['#00A36C'],
    data: [
        { year: '2019', value: 1.576 },
        { year: '2020', value: 1.500 },
        { year: '2021', value: 2.000 },
        { year: '2022', value: 1.500 },
        { year: '2023', value: 0.350 }

    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
Morris.Donut({
    element: 'donut-example',
    data: [
        { label: "Television", value: 41 },
        { label: "Washing machine", value: 28 },
        { label: "Computer", value: 21 },
        { label: "Lights", value: 6 },
        { label: "Fridge", value: 22 }
    ],
    labelColor: '#ffffff',
    colors: ['#00A36C', '#274C77', 'orange', '#274C77',  '#E6E6FA']
});