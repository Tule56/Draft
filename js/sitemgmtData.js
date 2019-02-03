Highcharts.setOptions({
  colors: ['#59585a', '#0371c0',  '#95a0a9', '#d2cbb8', '#9fc9e7']
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

$(function() {



  var chartSMCamp;
  var last_camp_name;
  var sm_item_data;

  var data_sm_camp = {
    'Camp 10': [0.6000,0.3100,0.8400],
    'Camp 11': [0.6465,0.4343,0.8687],
    'Camp 12': [0.5455,0.3939,0.8283],
    'Camp 13': [0.3030,0.5758,0.7475],
    'Camp 14': [0.2604,0.4375,0.6979],
    'Camp 15': [0.4271,0.6146,0.8750],
    'Camp 16': [0.2755,0.5408,0.6939],
    'Camp 17': [0.3711,0.5052,0.5979],
    'Camp 18': [0.4078,0.5631,0.6990],
    'Camp 19': [0.4454,0.4706,0.8403],
    'Camp 1E': [0.4184,0.5510,0.8980],
    'Camp 1W': [0.3505,0.5258,0.7423],
    'Camp 20': [0.3448,0.7126,0.8161],
    'Camp 21': [0.5361,0.4227,0.7320],
    'Camp 22': [0.3934,0.5164,0.7951],
    'Camp 23': [0.3474,0.5579,0.7789],
    'Camp 24': [0.5619,0.5524,0.8095],
    'Camp 25': [0.3667,0.6667,0.7067],
    'Camp 26': [0.4706,0.4412,0.7279],
    'Camp 27': [0.4528,0.5849,0.8962],
    'Camp 2E': [0.3980,0.4184,0.6531],
    'Camp 2W': [0.1923,0.4615,0.6923],
    'Camp 3': [0.3434,0.5758,0.7677],
    'Camp 4': [0.3505,0.4845,0.7526],
    'Camp 5': [0.3265,0.5204,0.6429],
    'Camp 6': [0.3619,0.5810,0.8095],
    'Camp 7': [0.2474,0.4742,0.6186],
    'Camp 8E': [0.1724,0.6092,0.6667],
    'Camp 8W': [0.2813,0.5625,0.8542],
    'Camp 9': [0.3196,0.5361,0.8247],
    'Nayapara RC': [0.3191,0.4255,0.7128],
  };

  var data_cpp = [
    ['Camp 10', 45],
    ['Camp 11', 54],
    ['Camp 12', 54],
    ['Camp 13', 56],
    ['Camp 14', 85],
    ['Camp 15', 71],
    ['Camp 16', 61],
    ['Camp 17', 47],
    ['Camp 18', 50],
    ['Camp 19', 55],
    ['Camp 1E', 36],
    ['Camp 1W', 62],
    ['Camp 20', 62],
    ['Camp 21', 64],
    ['Camp 22', 80],
    ['Camp 23', 58],
    ['Camp 24', 39],
    ['Camp 25', 50],
    ['Camp 26', 56],
    ['Camp 27', 53],
    ['Camp 2E', 58],
    ['Camp 2W', 90],
    ['Camp 3', 74],
    ['Camp 4', 52],
    ['Camp 5', 64],
    ['Camp 6', 70],
    ['Camp 7', 74],
    ['Camp 8E', 62],
    ['Camp 8W', 58],
    ['Camp 9', 65],
    ['Nayapara RC', 56]
  ];

  var categories_sm = [
    'Evacuate Shelter', 'Stay in Shelter', 'Secure Shelter',
  ];

  $('#chartsm2').highcharts({
    chart: {

      type: 'bar',
      backgroundColor: 'transparent',
    },

    title: {
      text: "<span style=\"font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold; letter-spacing:0em;\">Cyclone Preparation</span><br><span style=\"font-size: 22px; font-family:'Arial'; color:#666; font-weight: normal; letter-spacing:0em;\">Across All Camps</span>"
    },
    subtitle: {
      text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';\">% households reporting steps they would take to prepare for an approaching cyclone</span>"
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
      categories: categories_sm,
      reversed: false,
      labels: {
        step: 1
      }
    },

    yAxis: {
      min: 0,
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
        return '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%</b> of households reporting that they would<br>' + '<b>' + this.point.category + '</b>' + ' in the event of an approaching cyclone';
      }
    },

    series: [{
      name: 'items',
      data: [38, 51, 76]
    }]
  });

  function make_sm_chart() {
    var sm_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var camp_name = arguments[1];
      chartSMCamp = $('#chartSMCamp').highcharts({
        chart: {

             type: 'bar', backgroundColor: 'transparent',
         },

         title: {
           text: "<span style=\"font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold; letter-spacing:0em;\">Cyclone Preparation</span><br><span style=\"font-size: 22px; font-family:'Arial'; color:#0371c0; font-weight: normal; letter-spacing:0em;\">" + camp_name + "</span>"
         },
         subtitle: {
           text: "<span style=\"font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';\">% households reporting steps they would take to prepare for an approaching cyclone</span>"
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
              categories: categories_sm,
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
                      return Math.abs(this.value);
                  }
              }
          },

        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },

            tooltip: {
              formatter: function() {
                return '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%</b> of households in '+ "<span style=\"color:#0371c0; font-weight: bold;\">" + camp_name + "</span>"+ ' reporting that they would<br>' + '<b>' + this.point.category + '</b>' + ' in the event of an approaching cyclone';
              }
            },
        series: [{
          name: 'Cyclone Preparation',
          data: sm_data,
        }]
        });
      };

  $.getJSON('data/campsjoin.geojson', function(geojson) {

	$(".dropdown-trigger").dropdown();

    Highcharts.mapChart('container_SM', {
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
                    click: function (e) {

                      // e is the event object in JS.
                      // in this case it corresponds to all of the data around the click event
                      // LOOK AT THIS IN THE BROWSER CONSOLE
                      // DIG THROUGH THE LAYERS
                      console.log(e);

                      var camp_name = e.point.New_Camp_N;
                      var camp_data = data_sm_camp[camp_name];
                      sm_item_data = camp_data;
                      sm_item_data = sm_item_data.map(function (x) {
                                            return x * 100;
                      });


                      if (camp_name !== last_camp_name) {
                        make_sm_chart(sm_item_data, camp_name);
                        $('#chartSMCamp').css('display', '');
                        last_camp_name = camp_name;
                      }
                      else {
                        $('#chartSMCamp').css('display', 'none');
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
          text: 'CPP Volunteers<br><br><span style="font-size: 16px; color: #666; font-weight: normal">% households reporting awareness of</span><br><span style="font-size: 16px; color: #666; font-weight: normal">the role of CPP volunteers in their area</span>',
          style: {
            fontSize: '30px',
            color: '#59585a',
            fontFamily: 'Arial',
            align: 'center',
          }
        },
        align: 'center',
        verticalAlign: 'bottom',
			x:330,
			y:-50,
			itemMarginTop: 10,
			symbolWidth: 250,
			floating:true,
        },

      colorAxis: {
        min: 45,
        max: 85,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: [{'code':'Camp 10',value:45, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:54, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:54, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:56, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:85, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:71, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:61, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:47, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:50, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:55, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:36, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:62, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:62, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:64, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:80, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:58, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:39, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:50, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:56, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:53, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:58, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:90, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:74, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:52, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:64, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:70, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:74, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:62, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:58, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:65, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:56, dataLabels: { x: -35, y: 25 }}],
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
            borderWidth: 1,
            borderColor: '#59585a',
            brightness: 0.2
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
				pointFormat: '<span style="font-size: 16px; color: #666; font-weight: bold; float:center; letter-spacing:0em;">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold; letter-spacing:0em;">{point.value}%</span><br>of households reported <b>awareness of</b><br><b>CPP program volunteers</b> in their area<br><span style="font-size: 10px">(click for camp level cyclone preparation responses)</span>'},
				hideDelay: 1000

        }]
    });

  });




});
