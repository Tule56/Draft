Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});

$.ajax({
    dataType: "json",
    url: "json.json",
    mimeType: "application/json",
    success: function(result){
        $.each(result, function(i, obj) {
            $("form").append($('<label for="'+i+'">'+obj.title+'</label>'));
            $("form").append($('<input id="'+i+'" value="'+obj.value+'" type="text"/><br>'));
        });
    }
});

"use strict";

$(".dropdown-trigger").dropdown();

$(function() {


var chartEduGirlsCamp;
var last_camp_name;
var edugirls_ngo_data;
var edugirls_mosque_data;

var data_edugirls_camp = {
  'Camp 10' : [[0,0.7167,0.56],[0,0.6333,0.44]],
  'Camp 11' : [[0,0.72,0.3636],[0,0.8,0.7576]],
  'Camp 12' : [[0.0303,0.8824,0.5526],[0.0303,0.7794,0.3947]],
  'Camp 13' : [[0,0.8313,0.6176],[0,0.6627,0.3529]],
  'Camp 14' : [[0,0.8,0.5429],[0,0.7,0.2857]],
  'Camp 15' : [[0.0667,0.7813,0.52],[0.0667,0.7656,0.6]],
  'Camp 16' : [[0.1111,0.6806,0.6],[0.1667,0.7361,0.6]],
  'Camp 17' : [[0,0.6786,0.5172],[0,0.5357,0.4138]],
  'Camp 18' : [[0.0769,0.7736,0.7419],[0.0769,0.6981,0.7419]],
  'Camp 19' : [[0.0476,0.6986,0.5714],[0,0.6849,0.3469]],
  'Camp 1E' : [[0.0526,0.6935,0.6471],[0,0.4516,0.3529]],
  'Camp 1W' : [[0,0.7887,0.5556],[0,0.5915,0.4074]],
  'Camp 20' : [[0,0.8689,0.6667],[0,0.7213,0.5238]],
  'Camp 21' : [[0,0.6883,0.5],[0,0.6364,0.3438]],
  'Camp 22' : [[0,0.75,0.5946],[0,0.7667,0.5135]],
  'Camp 23' : [[0.0909,0.72,0.5417],[0,0.72,0.625]],
  'Camp 24' : [[0,0.6944,0.5652],[0,0.6389,0.3913]],
  'Camp 25' : [[0,0.7248,0.5962],[0,0.6789,0.4808]],
  'Camp 26' : [[0,0.7879,0.575],[0,0.6566,0.3]],
  'Camp 27' : [[0.0588,0.7321,0.5455],[0.0588,0.5714,0.3864]],
  'Camp 2E' : [[0,0.7191,0.6552],[0,0.5393,0.3103]],
  'Camp 2W' : [[0.0455,0.7465,0.4444],[0,0.5634,0.1852]],
  'Camp 3' : [[0.0556,0.7681,0.6957],[0.0556,0.5652,0.3478]],
  'Camp 4' : [[0,0.8033,0.5455],[0.0909,0.7869,0.5]],
  'Camp 5' : [[0,0.807,0.75],[0,0.4211,0.1786]],
  'Camp 6' : [[0.1,0.7609,0.6923],[0,0.4565,0.3077]],
  'Camp 7' : [[0.0435,0.8333,0.4815],[0,0.5833,0.1481]],
  'Camp 8E' : [[0,0.7018,0.6316],[0,0.5614,0.6316]],
  'Camp 8W' : [[0.0588,0.7273,0.6538],[0.0588,0.7045,0.5385]],
  'Camp 9' : [[0.0588,0.7213,0.4545],[0,0.5574,0.3939]],
  'Nayapara RC' : [[0.0385,0.6267,0.4375],[0,0.5733,0.375]],

};

  var categories_edu = [
    '15-17 yrs', '6-14 yrs', '3-5 yrs'
  ];

  $('#chartEduGirls').highcharts({
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
    },
    title: {
      text: "<span style=\"font-size: 22px; font-family:'Helvetica'; color:#59585a; font-weight: bold;\">Girls School Attendance</span><br><br><span style=\"font-size: 22px; font-family:'Helvetica'; color:#59585a;font-weight: normal;\">Across All Camps </span>"
    },
subtitle: {
  text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Helvetica';\">% girls reported to be attending learning centres in the 7 days prior to data collection, by age group</span>"
},
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    legend: {
      itemStyle: {
        fontFamily: 'Arial',
         color: '#59585a',
         fontWeight: 'normal'
     },
      layout: 'vertical',
      itemMarginTop: 5,
      itemMarginBottom: 0,
      symbolRadius: 0,
      symbolHeight: 14,
      symbolWidth: 24,
      align: 'center',
      verticalAlign: 'bottom',
      symbolWidth: 10,
    },
    xAxis: [{
      categories: categories_edu,
      reversed: false,
      labels: {
        step: 1
      }
    }, {
      opposite: true,
      reversed: false,
      categories: categories_edu,
	  linkedTo: 0,
      labels: {
        step: 1
      }
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value) + '%';
        }
      }
    },
    plotOptions: {
      series: {
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
          Highcharts.numberFormat(Math.abs(this.point.y), 0) + '% of girls';
      }
    },
    series: [ {
      name: 'NGO-run learning centre',
      data: [
        2, 63, 41
      ]
    },{
      name: 'Madrasa or Maqtab',
      data: [
        3, 76, 59
      ]
    },
	]
  });

  function make_edugirls_chart() {
    var ngo_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var mosque_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var camp_name = arguments[2];
      chartEduGirlsCamp = $('#chartEduGirlsCamp').highcharts({
        chart: {

             type: 'bar', backgroundColor: 'transparent',
         },

         title: {
           text: "<span style=\"font-size: 22px; font-family:'Helvetica'; color:#59585a; font-weight: bold;\">Girls School Attendance</span><br><span style=\"font-size: 22px; font-family:'Helvetica'; color:#0371c0;font-weight: normal;\">" + camp_name + "</span>"
         },
     subtitle: {
       text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Helvetica';\">% girls reported to be attending learning centres in the 7 days prior to data collection, by age group</span>"
     },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        legend: {  itemStyle: {
            fontFamily: 'Arial',
             color: '#59585a',
             fontWeight: 'normal'
         },
          layout: 'vertical',
          itemMarginTop: 5,
          itemMarginBottom: 0,
          symbolRadius: 0,
          symbolHeight: 14,
          symbolWidth: 24,
          align: 'center',
          verticalAlign: 'bottom',
          symbolWidth: 10,
        },
          xAxis: [{
            categories: categories_edu,
            reversed: false,
            labels: {
              step: 1
            }
          }, {
            opposite: true,
            reversed: false,
            categories: categories_edu,
      	  linkedTo: 0,
            labels: {
              step: 1
            }
          }],
          yAxis: {
            title: {
              text: null
            },
            labels: {
              formatter: function() {
                return Math.abs(this.value) + '%';
              }
            }
          },

        plotOptions: {
          series: {
          }
        },
        tooltip: {
          formatter: function() {
            return + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '% of girls aged '+ this.point.category + ' in '+"<span style=\"color:#0371c0; font-weight: bold; letter-spacing:0em;\">" + camp_name + "</span>"+ ' reported to attend<br><b>' + this.series.name + '</b> in the 7 days prior to data collection';
          }
        },
       series: [{
         name: 'NGO-run learning centre',
         data: ngo_data,
     },{
         name: 'Madrasa or Maqtab',
         data: mosque_data,
       }]
        });
      };

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_edu_girls', {
      chart: {
        map: geojson,
        backgroundColor: 'transparent',
      },

      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },

      plotOptions: {
        series: {
          events: {
            click: function(e) {

              console.log(e);

              var camp_name = e.point.New_Camp_N;
              var camp_data = data_edugirls_camp[camp_name];
              edugirls_ngo_data = camp_data[1];
              edugirls_ngo_data = edugirls_ngo_data.map(function (x) {
                            return x * 100;
              });
              edugirls_mosque_data = camp_data[0];
              edugirls_mosque_data = edugirls_mosque_data.map(function (x) {
                            return x * 100;
              });

              if (camp_name !== last_camp_name) {
                make_edugirls_chart(edugirls_ngo_data, edugirls_mosque_data, camp_name);
                $('#chartEduGirlsCamp').css('display', '');
                last_camp_name = camp_name;
              } else {
                $('#chartEduGirlsCamp').css('display', 'none');
                last_camp_name = '';
              }
            }
          }
        }
      },

      mapNavigation: {
        enabled: false,
        buttonOptions: {
          enabled: false
        }
      },

      legend: {
        title: {
          text: 'School Attendance - Girls<br><span style="font-size: 16px; color: #666; font-weight: normal">% girls aged 6-14 reported to attend NGO-run</span><br><span style="font-size: 16px; color: #666; font-weight: normal">learning spaces in the 7 days prior to data collection</span>',
         style: {
            fontSize: '30px',
            color: '#59585a',
            fontFamily: 'Arial',
            align: 'center',
          }
        },
        align: 'center',
        verticalAlign: 'bottom',
			x:320,
			y:-50,
			itemMarginTop: 10,
			symbolWidth: 250,
			floating:true,
        },

      colorAxis: {
        min: 40,
        max: 80,
        minColor: '#ffffff',
        maxColor: '#0072BC'
      },

      series: [{
        data: [{'code':'Camp 10',value:63, 'boys':72, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:72, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:78, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:66, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:70, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:77, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:74, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:54, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:70, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:68, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:45, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:59, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:72, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:64, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:77, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:72, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:64, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:68, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:66, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:57, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:54, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:56, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:57, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:79, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:42, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:46, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:58, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:56, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:70, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:56, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:57, dataLabels: { x: -35, y: 25 }}],
       joinBy: ['New_Camp_N','code'],
        name: 'Camp',
        borderColor: '#59585a',
        borderWidth: 0.6,
        nullColor: "#cecece",
        nullInteraction: false,
          allowPointSelect: true,
        cursor: 'pointer',
        states: {
          hover: {
            borderWidth: 2,
            borderColor: '#59585a',
            brightness: 0.3
          },
          select: {
            color: '#FAEB00',
             borderWidth:1,
             borderColor: '#FAEB00',
         }
        },
       dataLabels: {
          enabled: true,
          overflow: true,
          allowOverlap: true,
          inside: true,
          color: '#000000',
          style: {
            fontSize: "10px"
          },

          format: '{point.properties.New_Camp_N}'
        },
        	 tooltip: {
                headerFormat: '',
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of girls aged 4-16 reported to attend <b>NGO-run</b><br><b>learning spaces</b> in the week prior to data collection<br><span style="font-size: 10px">(click for attendance breakdown at camp level)</span>'},
				hideDelay: 1000

        }]
    });
  });

});
