Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});

$(".dropdown-trigger").dropdown();

"use strict";

$(function() {

var chartEduBoysCamp;
var last_camp_name;
var eduboys_ngo_data;
var eduboys_mosque_data;

var data_eduboys_camp = {
  'Camp 10' : [[0.0833,0.8649,0.575],[0.0833,0.7568,0.55]],
  'Camp 11' : [[0.3333,0.8955,0.7368],[0.1111,0.6716,0.4737]],
  'Camp 12' : [[0.375,0.8354,0.5],[0.375,0.7342,0.2273]],
  'Camp 13' : [[0.1111,0.8769,0.5938],[0.1111,0.6615,0.375]],
  'Camp 14' : [[0.1818,0.8095,0.6977],[0.2727,0.6508,0.4884]],
  'Camp 15' : [[0.0833,0.8689,0.6176],[0,0.7869,0.4412]],
  'Camp 16' : [[0.25,0.8,0.5217],[0.0833,0.76,0.4783]],
  'Camp 17' : [[0.1667,0.7593,0.4815],[0.1667,0.5741,0.2963]],
  'Camp 18' : [[0.2727,0.8966,0.7407],[0.1818,0.7931,0.7037]],
  'Camp 19' : [[0.3,0.8916,0.619],[0.1,0.747,0.4048]],
  'Camp 1E' : [[0.1765,0.8833,0.6176],[0.1765,0.7,0.1176]],
  'Camp 1W' : [[0.1,0.8727,0.7143],[0.15,0.5273,0.2857]],
  'Camp 20' : [[0.3,0.7679,0.5714],[0,0.5179,0.4286]],
  'Camp 21' : [[0.1818,0.8,0.6316],[0,0.5692,0.4474]],
  'Camp 22' : [[0.0333,0.8675,0.7179],[0.1,0.7349,0.5897]],
  'Camp 23' : [[0.3077,0.8219,0.3529],[0.2308,0.6849,0.3529]],
  'Camp 24' : [[0.2353,0.7975,0.6],[0.1176,0.6709,0.55]],
  'Camp 25' : [[0.1429,0.8627,0.4286],[0.0476,0.8039,0.4571]],
  'Camp 26' : [[0.1429,0.7826,0.5],[0.0714,0.4891,0.3095]],
  'Camp 27' : [[0.2143,0.8136,0.25],[0.0714,0.6102,0.15]],
  'Camp 2E' : [[0.1538,0.8571,0.4737],[0.0769,0.5952,0.1842]],
  'Camp 2W' : [[0.2308,0.7245,0.5526],[0.0769,0.5816,0.2632]],
  'Camp 3' : [[0.3529,0.8333,0.76],[0.0588,0.5,0.4]],
  'Camp 4' : [[0.2353,0.9054,0.5294],[0.0588,0.7973,0.4412]],
  'Camp 5' : [[0,0.7755,0.5],[0,0.3469,0.2308]],
  'Camp 6' : [[[0.1429,0.8793,0.6071],0.0714,0.7241,0.3214]],
  'Camp 7' : [[0.05,0.7568,0.5862],[0.1,0.3784,0.2069]],
  'Camp 8E' : [[0.2353,0.8519,0.5217],[0.1176,0.6667,0.5217]],
  'Camp 8W' : [[0.2353,0.8689,0.725],[0.0588,0.7213,0.625]],
  'Camp 9' : [[0.2353,0.8235,0.7037],[0.1176,0.6324,0.6296]],
  'Nayapara RC' : [[0.5238,0.803,0.5185],[0.381,0.6364,0.4444]],
};

  var categories_edu = [
    '15-17 yrs', '6-14 yrs', '3-5 yrs'
  ];

  $('#chartEduBoys').highcharts({
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
    },
        title: {
          text: "<span style=\"font-size: 22px; font-family:'Helvetica'; color:#59585a; font-weight: bold;\">Boys School Attendance</span><br><span style=\"font-size: 22px; font-family:'Helvetica'; color:#59585a;font-weight: normal;\">Across All Camps </span>"
        },
    subtitle: {
      text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Helvetica';\">% boys reported to be attending learning centres in the 7 days prior to data collection, by age group</span>"
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
    }, { // mirror axis on right side
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

    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
          Highcharts.numberFormat(Math.abs(this.point.y), 0) + '% of boys';
      }
    },
    series: [{
      name: 'NGO-run learning centre',
      data: [
        12, 64, 40
      ]
  },{
      name: 'Madrasa or Maqtab',
      data: [
        20, 84, 60
      ]
    }
	]
  });

  function make_eduboys_chart() {
    var ngo_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var mosque_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var camp_name = arguments[2];
      chartEduBoysCamp = $('#chartEduBoysCamp').highcharts({
        chart: {

             type: 'bar', backgroundColor: 'transparent',
         },

         title: {
           text: "<span style=\"font-size: 22px; font-family:'Helvetica'; color:#59585a; font-weight: bold;\">Boys School Attendance</span><br><span style=\"font-size: 22px; font-family:'Helvetica'; color:#0371c0;font-weight: normal;\">" + camp_name + "</span>"
         },
     subtitle: {
       text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Helvetica';\">% boys reported to be attending learning centres in the 7 days prior to data collection, by age group</span>"
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
            return + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '% of boys aged '+ this.point.category + ' in '+"<span style=\"color:#0371c0; font-weight: bold; letter-spacing:0em;\">" + camp_name + "</span>"+ ' reported to attend<br><b>' + this.series.name + '</b> in the 7 days prior to data collection';
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

$.getJSON('data/campsjoin.geojson', function (geojson) {

    Highcharts.mapChart('container_edu_boys', {
        chart: {
            map: geojson, backgroundColor: 'transparent',
        },

        title: {
            text: ''
        },
		credits:
			{
			enabled:false
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
            var camp_data = data_eduboys_camp[camp_name];
            eduboys_ngo_data = camp_data[1];
            eduboys_ngo_data = eduboys_ngo_data.map(function (x) {
                        return x * 100;
            });
            eduboys_mosque_data = camp_data[0];
            eduboys_mosque_data = eduboys_mosque_data.map(function (x) {
                        return x * 100;
            });

            if (camp_name !== last_camp_name) {
              make_eduboys_chart(eduboys_ngo_data, eduboys_mosque_data, camp_name);
              $('#chartEduBoysCamp').css('display', '');
              last_camp_name = camp_name;
            } else {
              $('#chartEduBoysCamp').css('display', 'none');
              last_camp_name = '';
            }
          }
        }
      }
    },
        mapNavigation: {
            enabled: false,
            buttonOptions: {
              enabled:false
            }
        },

		legend: {
            title: {
                text: 'School Attendance - Boys<br><span style="font-size: 16px; color: #59585a; font-weight: normal">% boys aged 6-14 reported to attend NGO-run</span><br><span style="font-size: 16px; color: #59585a; font-weight: normal">learning spaces in week prior to data collection</span>',
            style: {
                fontSize: '30px', color:'#59585a', fontFamily: 'Arial', align:'center',
            }},
            align: 'center',
            verticalAlign: 'bottom',
			x:330,
			y:-50,
			itemMarginTop: 10,
			symbolWidth: 250,
			floating:true,
        },

        colorAxis: {
            min: 40,
            max: 80,
            minColor: '#ffffff',
            maxColor: '#0371c0'
        },

        series: [{
            data: [{'code':'Camp 10',value:76, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:67, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:73, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:66, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:65, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:79, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:76, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:57, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:79, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:75, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:70, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:53, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:52, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:57, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:73, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:68, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:67, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:80, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:49, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:61, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:60, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:58, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:50, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:80, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:35, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:72, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:38, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:67, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:72, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:63, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:64, dataLabels: { x: -35, y: 25 }}],
           joinBy: ['New_Camp_N','code'],
            name: 'Camp',
			borderColor: '#59585a',
            borderWidth: 0.6,
			nullColor:"#cecece",
			nullInteraction:false,
      allowPointSelect: true,
      cursor: 'pointer',
            states: {
                hover: {
                    borderWidth:100, borderColor:'#59585a', brightness:0.3
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of boys aged 6-14 reported to attend <b>NGO-run</b><br><b>learning spaces</b> in the week prior to data collection<br><span style="font-size: 10px">(click for attendance breakdown at camp level)</span>'},
				hideDelay: 1000,

        }]
    });
});

});
