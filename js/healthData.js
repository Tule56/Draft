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

$(function() {

$(".dropdown-trigger").dropdown();

"use strict";

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_health', {
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
          text: 'Diarrhea in Children Under 5<br></br><span style="font-size: 16px; color: #59585a; font-weight: normal; line-height: 1.6;">% households with children under 5 reporting at least</span><br><span style="font-size: 16px; color: #59585a; font-weight: normal; line-height: 1.6;">one child under 5 with diarrhea in the 2 weeks prior to data collection</span>',
          style: {
                fontSize: '30px', color:'#59585a', fontFamily: 'Arial', align:'center',
            }},
            align: 'center',
            verticalAlign: 'bottom',
			x:310,
			y:-50,
			itemMarginTop: 10,
			symbolWidth: 250,
			floating:true,
        },


      colorAxis: {
        min: 5,
        max: 25,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: [{'code':'Camp 10',value:13, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:14, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:14, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:11, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:12, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:6, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:17, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:19, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:10, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:13, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:21, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:21, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:17, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:9, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:21, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:13, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:20, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:9, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:9, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:12, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:26, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:27, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:16, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:14, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:16, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:16, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:29, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:20, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:20, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:12, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:15, dataLabels: { x: -35, y: 25 }}],
       joinBy: ['New_Camp_N','code'],
        name: 'Camp',
        borderColor: '#59585a',
        borderWidth: 0.6,
        nullColor: "#cecece",
        nullInteraction: false,
        cursor: 'pointer',
        states: {
          hover: {
            borderWidth: 2,
            borderColor: '#59585a',
            brightness: 0.2
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br> of households with children under 5 reported<br><b>at least one child under 5 with diarrhea</b><br> in the 2 weeks prior to data collection'},
				hideDelay: 1000

        }]
    });
  });


  var categories_health = [
    'Did not receive ORT', 'Received ORT at home', 'Received ORT from a healthcare provider'
  ];

  $('#charthealth').highcharts({
    chart: {

      type: 'bar',
      backgroundColor: 'transparent',
    },

    title: {
      text: "<span style=\"font-size: 18px; color:#59585a; font-weight: bold\"; letter-spacing:0em;>Oral Rehydration Therapy (ORT) Treatment</span><br><span style=\"font-size: 18px; font-family:'Helvetica'; color:#59585a; font-weight: normal; letter-spacing:0em;\">Across All Camps</span>"
    },
    subtitle: {
      text: '% of children under 5 with diarrhea in 2 weeks prior to survey,<br>by ORT treatment sought'
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
      itemMarginTop: 0,
      itemMarginBottom: 0,
      symbolRadius: 0,
      symbolHeight: 14,
      symbolWidth: 24,
      align: 'center',
      verticalAlign: 'bottom',
      symbolWidth: 10,
    },
    xAxis: {
      categories: categories_health,
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
        return '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + ' % of ' + this.series.name + '</b> <br>' + this.point.category;
      }
    },

    series: [{
      name: 'Boys',
      data: [
        5, 10, 88
      ],
    }, {
      name: 'Girls',
      data: [
        3, 7, 93
      ]
    }]
  });

  $('#charthealth2').highcharts({
		chart: {

        type: 'pie', backgroundColor: 'transparent',
    },

    title: {
        text: 'Immunization Cards'
    },

	subtitle: {
        text: '% households with children under 5 reporting all children under 5 having an immunization card'
    },

	credits:
			{
			enabled:false
			},
	exporting: {
			enabled: false
		},

    plotOptions: {
        pie: {
            shadow: false
        }
    },

     tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },

   series: [{
                name: '',
                data: [["Yes",79],["No",21]],
                size: '90%',
                innerSize: '30%',
                showInLegend:false,
                dataLabels: {
                    enabled: true
                }
            }]
	});

});
