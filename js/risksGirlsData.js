Highcharts.setOptions({
  colors: ['#59585a', '#0371c0', '#95a0a9', '#d2cbb8', '#9fc9e7']
});

$(function() {

  $(".dropdown-trigger").dropdown();

  "use strict";

  var chartRisksGirlsCamp;
  var last_camp_name;
  var rg_item_data;

  var data_risksgirls_camp = {
    'Camp 10' : [0,0.13,0.09,0.12,0.1,0.19,0.22,0.06,0.27,0.17,0.5,0.31],
    'Camp 11' : [0.0101,0.0606,0.0808,0.0808,0.101,0.1818,0.2121,0.1111,0.2121,0.2121,0.5354,0.3838],
    'Camp 12' : [0,0.1111,0.0808,0.0909,0.0101,0.1818,0.0606,0.1111,0.3535,0.2727,0.3232,0.2828],
    'Camp 13' : [0,0.0404,0.0202,0.0505,0.1414,0.202,0.0808,0.2727,0.2424,0.0606,0.5758,0.5354],
    'Camp 14' : [0,0,0.0208,0.0729,0.0104,0,0.1354,0.0729,0.0521,0.3958,0.1146,0.3438],
    'Camp 15' : [0,0.0104,0.0521,0.0313,0.1667,0.2292,0.2396,0.3229,0.2188,0.0313,0.6146,0.5104],
    'Camp 16' : [0,0.0204,0.1122,0.0102,0.0204,0.1122,0.0204,0.1122,0.1327,0.449,0.1531,0.1633],
    'Camp 17' : [0,0,0.0515,0,0.0206,0.1134,0.0103,0.2062,0.1753,0.2577,0.3918,0.1856],
    'Camp 18' : [0,0.0388,0.1456,0,0.0097,0.1165,0.0777,0.1359,0.1359,0.3495,0.2718,0.1262],
    'Camp 19' : [0,0.042,0.042,0.0252,0.1345,0.1681,0.1092,0.1176,0.1597,0.2437,0.4454,0.4874],
    'Camp 1E' : [0.0102,0.0102,0,0.051,0.0306,0.1633,0.1837,0.1122,0.2143,0.2449,0.5612,0.3265],
    'Camp 1W' : [0,0.0206,0.0825,0.1959,0.0722,0.0412,0.3196,0.1753,0.1031,0.1443,0.268,0.4021],
    'Camp 20' : [0,0.0115,0.023,0.0575,0.1724,0.1494,0.1149,0.2874,0.3218,0.023,0.4253,0.6667],
    'Camp 21' : [0,0.0619,0.0928,0.1134,0.0412,0.1959,0.134,0.134,0.2165,0.2268,0.5876,0.2577],
    'Camp 22' : [0,0.0164,0.0738,0.0164,0.0984,0.0902,0.1148,0.1885,0.1393,0.2213,0.3443,0.5],
    'Camp 23' : [0.0105,0.0316,0.0632,0,0.0632,0.0421,0.0526,0.1263,0.1684,0.4105,0.3053,0.2526],
    'Camp 24' : [0,0.0381,0.1048,0.0286,0.1143,0.1619,0.1524,0.1619,0.1714,0.1619,0.5143,0.3905],
    'Camp 25' : [0,0.04,0.0267,0,0.02,0.0933,0.1333,0.16,0.0667,0.34,0.3467,0.1533],
    'Camp 26' : [0,0.0588,0.0956,0.0221,0.0221,0.0515,0.1618,0.1838,0.1985,0.2721,0.4118,0.3382],
    'Camp 27' : [0,0.0283,0.0943,0.0377,0.1226,0.1226,0.1792,0.1792,0.1981,0.1509,0.6321,0.4434],
    'Camp 2E' : [0.0612,0.0204,0.0306,0,0.0204,0.1224,0,0.0816,0.3367,0.2551,0.2959,0.3878],
    'Camp 2W' : [0,0.0096,0.0481,0.0288,0.0673,0.0288,0.1346,0.0769,0.1058,0.2212,0.1731,0.5481],
    'Camp 3' : [0,0.0606,0,0.0606,0.1212,0.1212,0,0.1919,0.2828,0.0505,0.4343,0.7374],
    'Camp 4' : [0.0825,0,0.0412,0,0,0.2268,0,0.1031,0.268,0.3402,0.3093,0.1959],
    'Camp 5' : [0,0,0.0816,0.102,0.0408,0.102,0.2449,0.1531,0.1531,0.2245,0.2245,0.3469],
    'Camp 6' : [0,0.019,0.0095,0.0381,0.1333,0.1524,0.1333,0.219,0.3048,0.0476,0.6,0.5714],
    'Camp 7' : [0,0.0309,0.0412,0.0928,0.0103,0.0412,0.268,0.1959,0.1959,0.1134,0.2268,0.4536],
    'Camp 8E' : [0,0.0115,0.0575,0.1149,0.023,0.0805,0.1724,0.069,0.0345,0.1724,0.1609,0.4598],
    'Camp 8W' : [0,0.0104,0.0417,0.0104,0.0313,0.0833,0.0417,0.1354,0.1354,0.3333,0.3125,0.1563],
    'Camp 9' : [0,0.0722,0.0515,0.1031,0.0928,0.1649,0.0206,0.1237,0.4227,0.0309,0.5052,0.7938],
    'Nayapara RC' : [0,0.0213,0.1383,0.0213,0.0957,0.0638,0.0957,0.1596,0.1489,0.266,0.2128,0.5106],

  };

  var categories_risksgirls = [
      'Other','Child labour', 'Violence at home', 'Lack of registration of newborns', 'Psychological trauma', 'Violence in community', 'Armed group recruitment', 'Detention', 'Child marriage', 'Natural disaster', 'Kidnapping', 'Sexual violence'
  ];

  $('#chartrisksgirls').highcharts({
      chart: {

           type: 'bar', backgroundColor: 'transparent',
       },

       title: {
         text: "<span style=\"font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: normal; letter-spacing:0em;\">Reported Safety Concerns for Girls</span><br><span style=\"font-size: 22px; font-family:'Arial'; color:#666; font-weight: bold; letter-spacing:0em;\">Across All Camps</span>"
       },
       subtitle: {
         text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';\">% of households reporting safety concerns (fears) for girls aged under 18, by type of safety concern</span>"
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
           categories: categories_risksgirls,
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
               return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of households reporting '  +'<b>'+ this.point.category+ '</b><br>as a safety concern for girls under 18'
                   ;
           }
       },

       series: [{
           name: 'risks',
           data: [
               1,3,6,6,7,13,13,15,20,20,38,41]
       }]
     });

     function make_riskgirls_chart(rg_data = [], camp_name) {
         chartRiskBoysCamp = $('#chartRiskGirlsCamp').highcharts({
           chart: {

                type: 'bar', backgroundColor: 'transparent',
            },
            title: {
              text: "<span style=\"font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold; letter-spacing:0em;\">Reported Safety Concerns for Girls</span><br><span style=\"font-size: 22px; font-family:'Arial'; color:#0371c0; font-weight: normal; letter-spacing:0em;\">" + camp_name + "</span>"
            },
            subtitle: {
              text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';\">% of households reporting safety concerns (fears) for girls aged under 18, by type of safety concern</span>"
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
                 categories: categories_risksgirls,
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
                  return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of households in ' + "<span style=\"color:#0371c0; font-weight: bold; letter-spacing:0em;\">" + camp_name + "</span>"+ ' reporting <b>'+ this.point.category+ '</b><br>as a safety concern for girls under 18'
                      ;
              }
          },
           series: [{
             name: 'risks for Girls',
             data: rg_data,
           }]
           });
         };

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_pro2', {
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

      mapNavigation: {
        enabled: false,
        buttonOptions: {
          enabled: false
        }
      },

      legend: {
        title: {
          text: 'Risks to Girls<br><br><span style="font-size: 16px; color:#59585a; font-weight: normal">Most common reported safety concern</span><br><span style="font-size: 16px; color: #666; font-weight: normal">for girls aged 18 or under</span>',
          style: {
            fontSize: '30px',
            color: '#59585a',
            fontFamily: 'Arial',
            align: 'center',

          }
        },
        itemStyle: {
          fontFamily: 'Arial',
           color: '#59585a',
           fontWeight: 'normal'
       },
        layout: 'vertical',
        itemMarginBottom: 0,
        symbolRadius: 0,
        symbolHeight: 14,
        symbolWidth: 24,
        align: 'center',
        verticalAlign: 'bottom',
        x: 260,
        y: -70,
        itemMarginTop: 10,
        symbolWidth: 10,
        floating: true,
      },

      plotOptions: {
        series: {
          events: {click: function (e) {

            // e is the event object in JS.
            // in this case it corresponds to all of the data around the click event
            // LOOK AT THIS IN THE BROWSER CONSOLE
            // DIG THROUGH THE LAYERS
            console.log(e);

            var camp_name = e.point.New_Camp_N;
            var camp_data = data_risksgirls_camp[camp_name];
            rg_item_data = camp_data;
            rg_item_data = rg_item_data.map(x => (x * 100));


            if (camp_name !== last_camp_name) {
              make_riskgirls_chart(rg_item_data, camp_name);
              $('#chartRiskGirlsCamp').css('display', '');
              last_camp_name = camp_name;
            }
            else {
              $('#chartRiskGirlsCamp').css('display', 'none');
              last_camp_name = '';
            }
          },
            legendItemClick: function(e) {
              e.preventDefault();
            }
          },
        },

        map: {
          allAreas: false,

          joinBy: ['New_Camp_N', 'code'],

          dataLabels: {
            enabled: false,
            color: '#59585a',
            x:3,
            style: {
              textOutline: false,
            },
            format: '{point.properties.New_Camp_N}',

          },
          tooltip: {
            headerFormat: '',
            pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 16px; color:{series.color}; font-weight: bold">{series.name}</span><br><span style="font-size: 10px">(click for camp level breakdown of safety concerns for girls)</span>'
          }

        }
      },

      series: [{
        allowPointSelect: true,
      cursor: 'pointer',
      states: {
        hover: {
          brightness: 0.3
        },
        select: {
           color: '#59585a',
           borderColor: '#59585a',
       }
      },
          name: 'Sexual Violence',
          borderColor: '#ffffff',
          color: '#EF4A60',
          data: ['Camp 19', 'Camp 1W', 'Camp 20', 'Camp 22', 'Camp 2E', 'Camp 2W', 'Camp 3', 'Camp 5', 'Camp 7', 'Camp 8E', 'Camp 9', 'Nayapara RC'].map(function(code) {
            return {
              code: code
            };
          })
        },{
        allowPointSelect: true,
      cursor: 'pointer',
      states: {
        hover: {
          brightness: 0.3
        },
        select: {
           color: '#59585a',
           borderColor: '#59585a',
       }
     },
          name: 'Kidnapping',
          borderColor: '#ffffff',
          color: '#0072BC',
          data: ['Camp 10', 'Camp 11', 'Camp 13', 'Camp 15', 'Camp 17', 'Camp 1E', 'Camp 21', 'Camp 24', 'Camp 25', 'Camp 26', 'Camp 27', 'Camp 6'].map(function(code) {
            return {
              code: code
            };
          })
        }, {
          allowPointSelect: true,
          cursor: 'pointer',
          states: {
            hover: {
              brightness: 0.3
            },
            select: {
               color: '#59585a',
               borderColor: '#59585a',
           }
         },
          name: 'Natural Disaster',
          borderColor: '#ffffff',
          color: '#00B398',
          data: ['Camp 4', 'Camp 14', 'Camp 16','Camp 18', 'Camp 23', 'Camp 8W'].map(function(code) {
            return {
              code: code
            };
          })
        }, {
          allowPointSelect: true,
          cursor: 'pointer',
          states: {
            hover: {
              brightness: 0.3
            },
            select: {
               color: '#59585a',
               borderColor: '#59585a',
           }
         },
          name: 'Child Marriage',
          borderColor: '#ffffff',
          color: '#000000',
          data: ['Camp 12'].map(function(code) {
            return {
              code: code
            };
          })
        }, {
          allowPointSelect: true,
          cursor: 'pointer',
          states: {
            hover: {
              brightness: 0.3
            },
            select: {
               color: '#59585a',
               borderColor: '#59585a',
           }
         },

          name: 'Unassessed Camp',
          borderColor: '#cecece',
          color: '#cecece',
          showInLegend: false,
          data: ['Kutupalong RC', 'Camp 4 Extension', 'Camp 20 Extension'].map(function(code) {
            return {
              code: code
            };
          })
        }
      ],



    });
  });
});
