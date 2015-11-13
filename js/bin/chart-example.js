

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "IMDB",
            fillColor: "transparent",
            strokeColor: "#999",
            pointColor: "#f5de50",
            pointStrokeColor: "#fff",
            //pointHighlightFill: "#fff",
            pointHighlightStroke: "#f5de50",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "ROTTEN TOMATOES",
            fillColor: "transparent",
            strokeColor: "#3A9425",
            pointColor: "#E8372C",
            pointStrokeColor: "#fff",
            //pointHighlightFill: "#fff",
            pointHighlightStroke: "#E8372C",
            data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
            label: "META CRITIC",
            fillColor: "transparent",
            strokeColor: "#1b81a0",
            pointColor: "#6c3",
            pointStrokeColor: "#fff",
            //pointHighlightFill: "#fff",
            pointHighlightStroke: "#6c3",
            data: [8, 38, 90, 67, 26, 7, 80]
        }
    ]
};


var options =
{

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: true,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : false,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var context = $('#lineChart').get(0).getContext('2d');
var chart = new Chart(context).Line(data, options);



var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Facebook Likes",
            fillColor: "#dfe3ee",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "#8b9dc3",
            pointStrokeColor: "#3b5998",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 75, 80]
        }
    ]
};


var context = $('#fblineChart').get(0).getContext('2d');
//var chart = new Chart(context).Pie(data, options);
var chart = new Chart(context).Line(data, options);


var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Twitter Followers",
            fillColor: "#e1e8ed",
            strokeColor: "#292f33",
            pointColor: "#55acee",
            pointStrokeColor: "#3b5998",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [5, 9, 8, 8, 5, 7, 8]
        }
    ]
};

var context = $('#twitterlineChart').get(0).getContext('2d');
var chart = new Chart(context).Line(data, options);


var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Klout Followers",
            fillColor: "#e1e8ed",
            strokeColor: "#292f33",
            pointColor: "#55acee",
            pointStrokeColor: "#3b5998",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [4, 9, 3, 1, 1, 0, 1]
        }
    ]
};

var context = $('#kloutlineChart').get(0).getContext('2d');
var chart = new Chart(context).Line(data, options);




