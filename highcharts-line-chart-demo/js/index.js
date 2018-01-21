var data1 = [{
  "sale": "20",
  "date": "2014-06-09"
}, {
  "sale": "215",
  "date": "2014-09-09"
}, {
  "sale": "179",
  "date": "2014-12-09"
}, {
  "sale": "19",
  "date": "2015-03-09"
}, {
  "sale": "134",
  "date": "2015-06-09"
}, {
  "sale": "160",
  "date": "2015-09-09"
}];

var data2 = [{
  "sale": "100",
  "date": "2015-12-09"
}, {
  "sale": "200",
  "date": "2016-03-09"
}, {
  "sale": "300",
  "date": "2016-06-09"
}, {
  "sale": "250",
  "date": "2016-09-09"
}, {
  "sale": "350",
  "date": "2016-12-09"
}, {
  "sale": "400",
  "date": "2017-03-09"
}];

var data3 = [{
  "sale": "300",
  "date": "2015-12-09"
}, {
  "sale": "200",
  "date": "2016-03-09"
}, {
  "sale": "250",
  "date": "2016-06-09"
}, {
  "sale": "400",
  "date": "2016-09-09"
}, {
  "sale": "500",
  "date": "2016-12-09"
}, {
  "sale": "600",
  "date": "2017-03-09"
}];



function convert(array) {
  var parsed = [];
  array.forEach(function(d){
    var date = new Date(d["date"]);
    console.log(date)
    var utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    parsed.push([utc, parseInt(d["sale"])]);
  });
  return parsed;
}

var initialData = convert(data1);
var convertedData = convert(data1);
var convertedData2 = convert(data2);
var convertedData3 = convert(data3);

$(function () {
    $('#container').highcharts({
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
            data: initialData,
            color: '#00a657'
        }]
    });
});

function updateChart(i) {
  var newData;
  switch(i) {
    case 1:
      console.log(1)
      newData = convertedData;
      break;
    case 2:
      newData = convertedData2;
      break;
    case 3:
      newData = convertedData3;
      break;
    default:
  }
  var chart = Highcharts.charts[0];
  chart.series[0].setData(newData, true);
}