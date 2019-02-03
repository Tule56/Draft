Highcharts.setOptions({
  colors: ['#59585a', '#0371c0', '#95a0a9', '#d2cbb8', '#9fc9e7']
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

$(".dropdown-trigger").dropdown();

"use strict";

$(function() {

  var chartRisksBoysCamp;
  var last_camp_name;
  var rb_item_data;

  var data_risksboys_camp = {
    'Camp 10' : [0.02,0.01,0.06,0.02,0.09,0.27,0.33,0.13,0.21,0.24,0.28,0.42],
    'Camp 11' : [0.05,0,0.04,0,0.04,0.14,0.18,0.12,0.21,0.29,0.35,0.64],
    'Camp 12' : [0,0.01,0.03,0.02,0.06,0.15,0.26,0.28,0.26,0.12,0.24,0.41],
    'Camp 13' : [0,0,0,0.04,0,0,0.04,0.24,0.04,0.56,0.36,0.6],
    'Camp 14' : [0,0,0.01,0.04,0.02,0.01,0.06,0.15,0.4,0.09,0.04,0.34],
    'Camp 15' : [0,0.02,0.01,0.02,0,0.04,0.01,0.31,0.03,0.58,0.4,0.69],
    'Camp 16' : [0,0.03,0.02,0,0.07,0.01,0.07,0.1,0.46,0.04,0.16,0.29],
    'Camp 17' : [0,0.01,0.01,0,0.11,0,0.02,0.24,0.3,0.06,0.27,0.51],
    'Camp 18' : [0,0.01,0,0,0.07,0,0.13,0.2,0.36,0.09,0.16,0.4],
    'Camp 19' : [0,0.01,0.05,0.03,0.04,0.07,0.16,0.12,0.25,0.36,0.29,0.49],
    'Camp 1E' : [0.05,0.01,0.06,0.01,0.01,0.2,0.18,0.11,0.3,0.23,0.17,0.43],
    'Camp 1W' : [0,0.01,0.01,0.09,0.01,0.01,0.05,0.26,0.16,0.25,0.34,0.48],
    'Camp 20' : [0,0,0.02,0.02,0.02,0.01,0.06,0.3,0.03,0.57,0.43,0.56],
    'Camp 21' : [0.03,0,0,0.01,0.04,0.14,0.2,0.26,0.2,0.19,0.22,0.58],
    'Camp 22' : [0,0.01,0.01,0.02,0.02,0.02,0.07,0.2,0.29,0.33,0.18,0.56],
    'Camp 23' : [0.01,0.01,0.02,0,0.04,0.04,0.07,0.14,0.41,0.24,0.13,0.37],
    'Camp 24' : [0.02,0.01,0.01,0.01,0,0.14,0.24,0.2,0.15,0.36,0.25,0.51],
    'Camp 25' : [0,0,0.01,0,0.01,0.02,0.05,0.21,0.37,0.17,0.09,0.37],
    'Camp 26' : [0.04,0,0,0.01,0.04,0.07,0.12,0.32,0.32,0.3,0.15,0.49],
    'Camp 27' : [0,0.01,0.01,0.01,0.01,0.1,0.25,0.22,0.14,0.38,0.31,0.6],
    'Camp 2E' : [0.07,0,0.03,0,0.04,0.01,0.13,0.16,0.23,0.01,0.46,0.48],
    'Camp 2W' : [0,0,0.02,0,0,0.03,0.1,0.16,0.38,0.11,0.14,0.41],
    'Camp 3' : [0,0,0,0.05,0.01,0.01,0.06,0.22,0.08,0.34,0.25,0.61],
    'Camp 4' : [0.07,0.01,0,0,0.04,0.03,0.03,0.07,0.33,0.07,0.37,0.48],
    'Camp 5' : [0.02,0.01,0.05,0.07,0.03,0.01,0.03,0.26,0.35,0.2,0.13,0.34],
    'Camp 6' : [0,0.02,0,0.02,0.01,0,0.05,0.15,0.06,0.61,0.38,0.75],
    'Camp 7' : [0,0.01,0.03,0.03,0.02,0.03,0.04,0.22,0.2,0.28,0.33,0.37],
    'Camp 8E' : [0,0,0.02,0.07,0.02,0.01,0.05,0.21,0.28,0.14,0.28,0.31],
    'Camp 8W' : [0,0.01,0,0,0.02,0,0.06,0.22,0.4,0.08,0.11,0.4],
    'Camp 9' : [0,0.01,0,0.04,0,0.04,0.04,0.29,0.1,0.24,0.49,0.68],
    'Nayapara RC' : [0,0.01,0.03,0.01,0.03,0.02,0.07,0.26,0.39,0.37,0.15,0.34],

  };


  var categories_risksboys = [
      'Other','Sexual violence', 'Psychological trauma', 'Lack of registration of newborns', 'Violence at home', 'Child marriage', 'Child labour', 'Detention', 'Natural disaster', 'Armed Group Recruitment', 'Violence in community', 'Kidnapping '
  ];

  $('#chartrisksboys').highcharts({
      chart: {

           type: 'bar', backgroundColor: 'transparent',
       },

       title: {
         text: "<span style=\"font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold; letter-spacing:0em;\">Reported Safety Concerns for Boys</span><br><span style=\"font-size: 22px; font-family:'Arial'; color:#666; font-weight: normal; letter-spacing:0em;\">Across All Camps</span>"
       },
       subtitle: {
         text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';\">% of households reporting safety concerns (fears) for boys aged under 18, by type of safety concern</span>"
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
           categories: categories_risksboys,
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
               return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of households reporting '  +'<b>'+ this.point.category+ '</b><br>as a safety concern for boys under 18'
                   ;
           }
       },

       series: [{
           name: 'risks',
           data: [
               1,1,2,2,3,5,10,21,23,26,27,49]
       }]
     });

     function make_riskboys_chart() {
          var rb_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var camp_name = arguments[1];
         chartRiskBoysCamp = $('#chartRiskBoysCamp').highcharts({
           chart: {

                type: 'bar', backgroundColor: 'transparent',
            },

            title: {
              text: "<span style=\"font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold; letter-spacing:0em;\">Reported Safety Concerns for Boys</span><br><span style=\"font-size: 22px; font-family:'Arial'; color:#0371c0; font-weight: normal; letter-spacing:0em;\">" + camp_name + "</span>"
            },
            subtitle: {
              text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';\">% of households reporting safety concerns (fears) for boys aged under 18, by type of safety concern</span>"
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
                 categories: categories_risksboys,
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
                  return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of households in ' + "<span style=\"color:#0371c0; font-weight: bold; letter-spacing:0em;\">" + camp_name + "</span>"+ ' reporting <b>'+ this.point.category+ '</b><br>as a safety concern for boys under 18'
                      ;
              }
          },
           series: [{
             name: 'risks for Boys',
             data: rb_data,
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
          text: 'Risks to Boys<br><br><span style="font-size: 16px; color:#59585a; font-weight: normal">Most common reported safety concern</span><br><span style="font-size: 16px; color: #666; font-weight: normal">for boys aged 18 or under</span>',
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
            var camp_data = data_risksboys_camp[camp_name];
            rb_item_data = camp_data;
            rb_item_data = rb_item_data.map(function (x) {
                        return x * 100;
            });

            if (camp_name !== last_camp_name) {
              make_riskboys_chart(rb_item_data, camp_name);
              $('#chartRiskBoysCamp').css('display', '');
              last_camp_name = camp_name;
            }
            else {
              $('#chartRiskBoysCamp').css('display', 'none');
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
            pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 16px; color:{series.color}; font-weight: bold">{series.name}</span><br><span style="font-size: 10px">(click for camp level breakdown of safety concerns for boys)</span>'
          }

        }
      },

      series: [{allowPointSelect: true,
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
          data: ['Camp 10', 'Camp 11', 'Camp 12', 'Camp 13', 'Camp 15', 'Camp 17', 'Camp 18', 'Camp 19', 'Camp 1E', 'Camp 1W', 'Camp 21', 'Camp 22', 'Camp 24', 'Camp 25', 'Camp 26', 'Camp 27', 'Camp 2E', 'Camp 2W', 'Camp 3', 'Camp 4', 'Camp 6', 'Camp 7', 'Camp 8E', 'Camp 8W', 'Camp 9'].map(function(code) {
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
          data: ['Camp 5', 'Camp 14', 'Camp 16', 'Camp 23', 'Nayapara RC'].map(function(code) {
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
          name: 'Armed Group Recruitment',
          borderColor: '#ffffff',
          color: '#FAEB00',
          data: ['Camp 20'].map(function(code) {
            return {
              code: code
            };
          })
        },
        {
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
