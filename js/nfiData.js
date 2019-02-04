Highcharts.setOptions({
  colors: ['#59585a','#0371c0',  '#95a0a9', '#d2cbb8', '#9fc9e7']
});

$(function() {

$(".dropdown-trigger").dropdown();
$('.modal-trigger').leanModal();

"use strict";

var chartNfiCamp;
var last_camp_name;
var nfi_item_data;

var data_nfi_camp = {
  'Camp 10': [0.000,0.000,0.000,0.010,0.010,0.030,0.100,0.070,0.080,0.110,0.300,0.720,0.650,0.920],
  'Camp 11': [0.010,0.000,0.000,0.010,0.061,0.020,0.081,0.091,0.061,0.172,0.545,0.535,0.495,0.899],
  'Camp 12': [0.000,0.020,0.000,0.051,0.000,0.040,0.081,0.010,0.081,0.101,0.263,0.727,0.687,0.879],
  'Camp 13': [0.000,0.010,0.000,0.000,0.000,0.000,0.101,0.071,0.081,0.242,0.626,0.657,0.636,0.576],
  'Camp 14': [0.010,0.010,0.010,0.010,0.083,0.031,0.094,0.063,0.052,0.198,0.396,0.698,0.469,0.865],
  'Camp 15': [0.000,0.000,0.010,0.000,0.042,0.042,0.094,0.052,0.135,0.188,0.469,0.594,0.563,0.792],
  'Camp 16': [0.010,0.031,0.031,0.000,0.133,0.041,0.020,0.163,0.031,0.122,0.500,0.582,0.633,0.694],
  'Camp 17': [0.000,0.052,0.031,0.103,0.052,0.165,0.186,0.216,0.227,0.155,0.433,0.330,0.237,0.670],
  'Camp 18': [0.000,0.019,0.019,0.049,0.010,0.029,0.049,0.272,0.039,0.204,0.544,0.388,0.757,0.621],
  'Camp 19': [0.000,0.000,0.017,0.000,0.000,0.050,0.076,0.059,0.084,0.176,0.496,0.571,0.597,0.874],
  'Camp 1E': [0.000,0.020,0.010,0.031,0.010,0.000,0.061,0.082,0.082,0.092,0.388,0.551,0.735,0.878],
  'Camp 1W': [0.000,0.031,0.031,0.052,0.093,0.072,0.113,0.093,0.186,0.072,0.454,0.639,0.381,0.742],
  'Camp 20': [0.000,0.000,0.023,0.000,0.046,0.092,0.069,0.126,0.103,0.218,0.517,0.552,0.621,0.621],
  'Camp 21': [0.000,0.000,0.000,0.021,0.093,0.052,0.072,0.062,0.072,0.072,0.278,0.670,0.804,0.794],
  'Camp 22': [0.000,0.000,0.000,0.008,0.057,0.033,0.066,0.049,0.033,0.156,0.500,0.648,0.492,0.918],
  'Camp 23': [0.000,0.000,0.021,0.000,0.011,0.021,0.063,0.126,0.063,0.137,0.495,0.663,0.642,0.758],
  'Camp 24': [0.000,0.000,0.000,0.000,0.000,0.048,0.029,0.152,0.029,0.152,0.495,0.524,0.657,0.914],
  'Camp 25': [0.000,0.000,0.000,0.020,0.027,0.000,0.040,0.087,0.080,0.133,0.460,0.580,0.727,0.847],
  'Camp 26': [0.000,0.015,0.015,0.007,0.066,0.029,0.074,0.044,0.081,0.221,0.507,0.596,0.566,0.772],
  'Camp 27': [0.000,0.038,0.009,0.009,0.019,0.019,0.047,0.038,0.113,0.274,0.698,0.519,0.632,0.575],
  'Camp 2E': [0.000,0.041,0.041,0.031,0.000,0.020,0.224,0.112,0.224,0.102,0.429,0.204,0.602,0.806],
  'Camp 2W': [0.000,0.000,0.067,0.038,0.067,0.067,0.212,0.115,0.135,0.144,0.385,0.346,0.663,0.760],
  'Camp 3': [0.020,0.040,0.020,0.051,0.051,0.101,0.192,0.172,0.152,0.182,0.424,0.455,0.636,0.333],
  'Camp 4': [0.000,0.041,0.021,0.072,0.010,0.072,0.155,0.227,0.268,0.186,0.505,0.134,0.526,0.639],
  'Camp 5': [0.020,0.010,0.031,0.041,0.051,0.061,0.235,0.102,0.102,0.112,0.296,0.622,0.612,0.582],
  'Camp 6': [0.000,0.038,0.029,0.019,0.038,0.067,0.067,0.124,0.171,0.333,0.476,0.476,0.571,0.590],
  'Camp 7': [0.000,0.041,0.041,0.010,0.021,0.062,0.175,0.165,0.072,0.082,0.577,0.557,0.371,0.763],
  'Camp 8E': [0.000,0.011,0.011,0.011,0.023,0.080,0.046,0.057,0.092,0.080,0.621,0.552,0.506,0.885],
  'Camp 8W': [0.000,0.000,0.000,0.010,0.031,0.031,0.042,0.135,0.073,0.104,0.583,0.552,0.750,0.688],
  'Camp 9': [0.010,0.010,0.000,0.021,0.021,0.010,0.103,0.124,0.196,0.206,0.577,0.485,0.454,0.722],
  'Nayapara RC': [0.000,0.000,0.064,0.011,0.160,0.032,0.096,0.096,0.191,0.160,0.479,0.500,0.319,0.851],
};

var data_fuel = [
    ['Camp 10',5],['Camp 11',38],['Camp 12',18],['Camp 13',19],['Camp 14',37.5],['Camp 15',6],['Camp 16',10],['Camp 17',88],['Camp 18',19],['Camp 19',2.5],['Camp 1E',90],['Camp 1W',93],['Camp 20',7],['Camp 21',95],['Camp 22',3],['Camp 23',28],['Camp 24',3],['Camp 25',6],['Camp 26',89],['Camp 27',87],['Camp 2E',89],['Camp 2W',99],['Camp 3',94],['Camp 4',94],['Camp 5',94],['Camp 6',94],['Camp 7',93],['Camp 8E',7],['Camp 8W',40],['Camp 9',12],['Nayapara RC',97]
];

var categories_nfi = [
    'Radios','Blankets', 'Mosquito nets', 'Mens clothes', 'Other Items', 'Womens clothes', 'Childrens clothes', 'Floor mats', 'Umbrellas', 'Portable torches', 'Kitchen sets', 'Solar lamps', 'Cooking stoves', 'Fuel'
];

var categories_nfi2 = [
    'None', 'Solar lamp', 'Cooking stove', 'Kitchen set', 'Floor mat'
	];

$('#chartnfi').highcharts({
    chart: {

         type: 'bar', backgroundColor: 'transparent',
     },

     title: {
       text: "<span style=\"font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold; letter-spacing:0em;\">Urgently Needed Non-Food Items</span><br><span style=\"font-size: 22px; font-family:'Arial'; color:#666; font-weight: normal; letter-spacing:0em;\">Across All Camps</span>"
     },
     subtitle: {
       text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';\">% households reporting an urgent need for key non-food items</span>"
     },

   credits:
       {
       enabled:false
       },
   exporting: {
       enabled: false
     },
   legend: {
       enabled: false
     },

     xAxis: {
         categories: categories_nfi,
     reversed: false,
     labels:{step:1}
     },

     yAxis: {
     min:0,
         title: {
             text: null
         },

    labels: {
             formatter: function () {
                 return Math.abs(this.value) + '%';
             }
         }
     },

      tooltip: {
         formatter: function () {
             return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of households reporting an<br>urgent need for '  +'<b>'+ this.point.category+ '</b>'
                 ;
         }
     },

     series: [{
         name: 'items',
         data: [
             0,2,2,2,4,4,10,11,11,15,48,53,57,75]
     }]
   });

   function make_nfi_chart() {
     var nfi_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
     var camp_name = arguments[1];
    chartNfiCamp = $('#chartNfiCamp').highcharts({
      chart: {

           type: 'bar', backgroundColor: 'transparent',
       },

       title: {
         text: "<span style=\"font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold; letter-spacing:0em;\">Urgently Needed Non-Food Items</span><br><span style=\"font-size: 22px; font-family:'Arial'; color:#0371c0; font-weight: normal; letter-spacing:0em;\">" + camp_name + "</span>"
       },
       subtitle: {
         text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';\">% households reporting an urgent need for key non-food items</span>"
       },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      legend: {
          enabled: false
        },

        xAxis: {
            categories: categories_nfi,
        reversed: false,
        labels:{step:1}
        },

        yAxis: {
        min:0,
            title: {
                text: null
            },

       labels: {
                formatter: function () {
                    return Math.abs(this.value) + '%';
                }
            }
        },

      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      tooltip: {
         formatter: function () {
             return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of households reporting an urgent<br>need for '  +'<b>'+ this.point.category+ '</b>' + ' in ' + "<span style=\"color:#0371c0; font-weight: bold; letter-spacing:0em;\">" + camp_name + "</span>";
         }
     },
      series: [{
        name: 'NFI',
        data: nfi_data,
      }]
      });
    };

	$.getJSON('data/campsjoin.geojson', function (geojson) {

    Highcharts.mapChart('container_nfi', {
        chart: {
            map: geojson,
            backgroundColor: 'transparent',
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
                  click: function (e) {

                    // e is the event object in JS.
                    // in this case it corresponds to all of the data around the click event
                    // LOOK AT THIS IN THE BROWSER CONSOLE
                    // DIG THROUGH THE LAYERS
                    console.log(e);

                    var camp_name = e.point.New_Camp_N;
                    var camp_data = data_nfi_camp[camp_name];
                    nfi_item_data = camp_data;
                    nfi_item_data = nfi_item_data.map(function (x) {
                                        return x * 100;
                    });


                    if (camp_name !== last_camp_name) {
                      make_nfi_chart(nfi_item_data, camp_name);
                      $('#chartNfiCamp').css('display', '');
                      last_camp_name = camp_name;
                    }
                    else {
                      $('#chartNfiCamp').css('display', 'none');
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
                text: 'Cooking Fuel Distribution<br><span style="font-size: 16px; color: #59585a; font-weight: normal;">% households reporting receiving a cooking fuel<br><span style="font-size: 16px; color: #59585a; font-weight: normal">distribution in the 30 days prior to data collection</span>',
           style: {
            fontSize: '30px',
            color: '#59585a',
            fontFamily: 'Arial',
            align: 'center',
          }
        },
        align: 'center',
        verticalAlign: 'bottom',
			x:310,
			y:-50,
			itemMarginTop: 10,
			symbolWidth: 250,
			floating:true,
        },

        colorAxis: {
            min: 0,
            max: 100,
            minColor: '#ffffff',
            maxColor: '#0371c0'
        },

        series: [{
        data: [{'New_Camp_N':'Camp 10',value:5, 'boys':72, dataLabels: { x: 4, y: 15 }},{'New_Camp_N':'Camp 11',value:38, dataLabels: { x: 0, y: -20 }},{'New_Camp_N':'Camp 12',value:18, dataLabels: { x: -8, y: -10 }},{'New_Camp_N':'Camp 13',value:19, dataLabels: { x: -2, y: -10 }},{'New_Camp_N':'Camp 14',value:38, dataLabels: { x: -2, y: 5 }},{'New_Camp_N':'Camp 15',value:6, dataLabels: { x: -14, y: 5 }},{'New_Camp_N':'Camp 16',value:10, dataLabels: { x: 14, y: 5 }},{'New_Camp_N':'Camp 17',value:88, dataLabels: { x: 1, y: -10 }},{'New_Camp_N':'Camp 18',value:19, dataLabels: { x: 1, y: 8 }},{'New_Camp_N':'Camp 19',value:3, dataLabels: { x: -11, y: -26 }},{'New_Camp_N':'Camp 1E',value:90, dataLabels: { x: -11, y: -2 }},{'New_Camp_N':'Camp 1W',value:93, dataLabels: { x: -1, y: 8 }},{'New_Camp_N':'Camp 20',value:7, dataLabels: { x: -4, y: 8 }},{'New_Camp_N':'Camp 21',value:95, dataLabels: { x: 35, y: -30 }},{'New_Camp_N':'Camp 22',value:3, dataLabels: { x: 5, y: -3 }},{'New_Camp_N':'Camp 23',value:28, dataLabels: { x: 5, y: -33 }},{'New_Camp_N':'Camp 24',value:3, dataLabels: { x: -5, y: -13 }},{'New_Camp_N':'Camp 25',value:6, dataLabels: { x: -5, y: 3 }},{'New_Camp_N':'Camp 26',value:89, dataLabels: { x: 25, y: 45 }},{'New_Camp_N':'Camp 27',value:87, dataLabels: { x: -30, y: -85 }},{'New_Camp_N':'Camp 2E',value:89, dataLabels: { x: -3, y: 27 }},{'New_Camp_N':'Camp 2W',value:99, dataLabels: { x: 8, y: -7 }},{'New_Camp_N':'Camp 3',value:94, dataLabels: { x: -8, y: 7 }},{'New_Camp_N':'Camp 4',value:94, dataLabels: { x: -8, y: 2 }},{'New_Camp_N':'Camp 5',value:94, dataLabels: { x: -2, y: -5 }},{'New_Camp_N':'Camp 6',value:94, dataLabels: { x: 6, y: 8 }},{'New_Camp_N':'Camp 7',value:93, dataLabels: { x: 6, y: 8 }},{'New_Camp_N':'Camp 8E',value:7, dataLabels: { x: 1, y: -1 }},{'New_Camp_N':'Camp 8W',value:40, dataLabels: { x: 6, y: -8 }},{'New_Camp_N':'Camp 9',value:12, dataLabels: { x: 6, y: 8 }},{'New_Camp_N':'Nayapara RC',value:97, dataLabels: { x: -35, y: 25 }}],
       joinBy: ['New_Camp_N','New_Camp_N'],
            name: 'Camp',
			   borderColor: '#59585a',
            borderWidth: 0.6,
			nullColor:"#cecece",
			nullInteraction:false,
      allowPointSelect: true,
      cursor: 'pointer',
            states: {
                hover: {
                    borderWidth:1, borderColor:'#59585a', brightness:0.2
                },
                select: {
                  color: '#FAEB00',
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households received a <b>cooking fuel<br> distribution</b> in the 30 days prior to data collection<br><span style="font-size: 10px">(click for camp level chart of most urgently needed NFIs)</span>'},

				hideDelay: 1000
        }]
    });

});

});
