var config = {
  chart: {
    type: 'spline',
    height: 400,
    width: 800
  },
  title: {
    text: 'Highcharts vs. D3 Comparison'
  },
  subtitle: {
    text: 'Irregular time data in Highcharts JS'
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      month: '%e. %b',
      year: '%b'
    },
    title: {
      text: 'Date'
    }
  },
  yAxis: {
    title: {
      text: 'Sales'
    },
    min: 0
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: '{point.x:%e. %b}: ${point.y:.2f}'
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: true
      }
    }
  },
  series: [{
    name: 'data1',
    data: [[1402272000000, 20]
      , [1410220800000, 215]
      , [1418083200000, 179]
      , [1425859200000, 19]
      , [1433808000000, 134]
      , [1441756800000, 160]],
    color: '#00a657'
  }]
};

var scriptConfig = {
  "css": ".highcharts-color-0 {	fill: pink; 	stroke: #7cb5ec;} .highcharts-axis.highcharts-color-0 .highcharts-axis-line { 	stroke: #7cb5ec; }.highcharts-axis.highcharts-color-0 text {	fill: #7cb5ec;}.highcharts-color-1 {	fill: #90ed7d;	stroke: #90ed7d;}.highcharts-axis.highcharts-color-1 .highcharts-axis-line {	stroke: #90ed7d;} .highcharts-axis.highcharts-color-1 text { 	fill: #90ed7d; }",
};


var print = function () {
  var dataString = encodeURI('async=true&type=jpeg&width=1000&options=' + JSON.stringify(config) + '&resources=' + JSON.stringify(scriptConfig));
  var exportUrl = "http://localhost:8001/";
  $.ajax({
    type: 'POST',
    data: dataString,
    url: exportUrl,
    success: function (data) {
      $('#printed').html('<img src="' + exportUrl + data + '"/>');
    },
    error: function (err) {
      console.log('error', err.statusText)
    }
  });
}


$(function () {
  $('#container').highcharts(config);
});
