Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});

$(function() {
  var data_lighting = [
    ['Camp 10', 82],
    ['Camp 11', 72],
    ['Camp 12', 64],
    ['Camp 13', 89],
    ['Camp 14', 83],
    ['Camp 15', 89],
    ['Camp 16', 84],
    ['Camp 17', 66],
    ['Camp 18', 71],
    ['Camp 19', 82],
    ['Camp 1E', 81],
    ['Camp 1W', 91],
    ['Camp 20', 66],
    ['Camp 21', 68],
    ['Camp 22', 96],
    ['Camp 23', 85],
    ['Camp 24', 89],
    ['Camp 25', 58],
    ['Camp 26', 96],
    ['Camp 27', 75],
    ['Camp 2E', 66],
    ['Camp 2W', 75],
    ['Camp 3', 91],
    ['Camp 4', 69],
    ['Camp 5', 94],
    ['Camp 6', 91],
    ['Camp 7', 81],
    ['Camp 8E', 84],
    ['Camp 8W', 88],
    ['Camp 9', 69],
    ['Nayapara RC', 79]
  ];

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_pro', {
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
          text: 'Lighting<br></br><span style="font-size: 16px; color: #666; font-weight: normal; line-height: 1.6;">% households reporting not enough</span><br><span style="font-size: 16px; color: #666; font-weight: normal; line-height: 1.6;">light at night to access latrines</span>',
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
			y:-20,
			itemMarginTop: 10,
			symbolWidth: 250,
			floating:true,
        },

      colorAxis: {
        min: 50,
        max: 90,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
       data: [{'code':'Camp 10',value:82, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:72, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:64, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:89, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:83, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:89, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:84, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:66, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:71, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:82, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:81, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:91, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:66, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:68, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:96, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:85, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:89, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:58, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:96, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:75, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:66, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:75, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:91, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:69, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:94, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:91, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:81, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:84, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:88, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:69, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:79, dataLabels: { x: -35, y: 25 }}],
       joinBy: ['New_Camp_N','code'],
        name: 'Camp',
        borderColor: '#59585a',
        borderWidth: 0.6,
        nullColor: "#cecece",
        nullInteraction: false,
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold;">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households reported <b>not enough</b><br><b>light</b> at night to access latrines'},
				hideDelay: 1000

        }]
    });
  });

  var data_safety = [
    ['Camp 10', 'Kidnapping', 'Kidnapping'],
    ['Camp 11', 'Kidnapping', 'Kidnapping'],
    ['Camp 12', 'Kidnapping', 'Child marriage'],
    ['Camp 13', 'Kidnapping', 'Kidnapping'],
    ['Camp 14', 'Natural disaster', 'Natural disaster'],
    ['Camp 15', 'Kidnapping', 'Kidnapping'],
    ['Camp 16', 'Natural disaster', 'Natural disaster'],
    ['Camp 17', 'Kidnapping', 'Kidnapping'],
    ['Camp 18', 'Kidnapping', 'Natural disaster'],
    ['Camp 19', 'Kidnapping', 'Sexual violence'],
    ['Camp 1E', 'Kidnapping', 'Kidnapping'],
    ['Camp 1W', 'Kidnapping', 'Sexual violence'],
    ['Camp 20', 'Armed group recruitment', 'Sexual violence'],
    ['Camp 21', 'Kidnapping', 'Kidnapping'],
    ['Camp 22', 'Kidnapping', 'Sexual violence'],
    ['Camp 23', 'Natural disaster', 'Natural disaster'],
    ['Camp 24', 'Kidnapping', 'Kidnapping'],
    ['Camp 25', 'Kidnapping', 'Kidnapping'],
    ['Camp 26', 'Kidnapping', 'Kidnapping'],
    ['Camp 27', 'Kidnapping', 'Kidnapping'],
    ['Camp 2E', 'Kidnapping', 'Sexual violence'],
    ['Camp 2W', 'Kidnapping', 'Sexual violence'],
    ['Camp 3', 'Kidnapping', 'Sexual violence'],
    ['Camp 4', 'Kidnapping', 'Natural disaster'],
    ['Camp 5', 'Natural disaster', 'Sexual violence'],
    ['Camp 6', 'Kidnapping', 'Kidnapping'],
    ['Camp 7', 'Kidnapping', 'Sexual violence'],
    ['Camp 8E', 'Kidnapping', 'Sexual violence'],
    ['Camp 8W', 'Kidnapping', 'Natural disaster'],
    ['Camp 9', 'Kidnapping', 'Sexual violence'],
    ['Nayapara RC', 'Natural disaster', 'Sexual violence']
  ];

  // $.getJSON('data/campsjoin.geojson', function(geojson) {
  //
  //   Highcharts.mapChart('container_protection2', {
  //     chart: {
  //       map: geojson,
  //       backgroundColor: 'transparent',
  //     },
  //
  //     title: {
  //       text: ''
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     exporting: {
  //       enabled: false
  //     },
  //
  //     mapNavigation: {
  //       enabled: false,
  //       buttonOptions: {
  //         enabled: false
  //       }
  //     },
  //     legend: {
  //       title: {
  //         text: 'Travel Time to Food Markets<br><br><span style="font-size: 12px; color: #666; font-weight: normal">% households reporting greater than 30 minutes walk to market</span>',
  //         style: {
  //           fontSize: '24px',
  //           color: '#59585a',
  //           fontFamily: 'Arial',
  //           align: 'center',
  //         }
  //       },
  //       align: 'center',
  //       verticalAlign: 'bottom',
  //       x: 260,
  //       y: -50,
  //       itemMarginTop: 10,
  //       symbolWidth: 250,
  //       floating: true,
  //     },
  //
  //     series: [{
  //       data: data_safety,
  //       keys: ['New_Camp_N', 'fear_boys', 'boys_pc', 'fear_girls', 'girls_pc', 'shared_shelter', 'value', 'Count_camp_location', 'Average_respondent_age', 'Average_HH_size', 'Average_adultwomen_count', 'Average_expenditure_food', 'Sum_debt_amount', 'Average_debt_amount', 'risks_boys_kidnapping', 'risks_girls_sexual_violence', 'security_providers_mahji', 'info_awareness_mahji'],
  //       joinBy: 'New_Camp_N',
  //       name: 'Camp',
  //       borderColor: '#59585a',
  //       borderWidth: 0.6,
  //       nullColor: "#cecece",
  //       nullInteraction: false,
  //       states: {
  //         hover: {
  //           borderWidth: 3,
  //           borderColor: '#59585a',
  //           brightness: 0.2
  //         }
  //       },
  //       dataLabels: {
  //         enabled: false,
  //         overflow: true,
  //         allowOverlap: true,
  //         borderWidth: 0,
  //
  //         format: '{point.properties.New_Camp_N}'
  //       },
  //       tooltip: {
  //         headerFormat: '',
  //         pointFormat: '<b>{point.properties.New_Camp_N}:</b> {point.value}% of households reported<br>more than 30 minutes walk to market'
  //       },
  //       hideDelay: 1000
  //     }]
  //   });
  // });

 $('#chartpro1').highcharts({
		chart: {
        type: 'heatmap', backgroundColor: 'transparent',
        plotBorderWidth: 1
    },

    title: {
      text: `<span style="font-size: 18px; font-family:'Helvetica';  color:#000000; font-weight: bold"; letter-spacing:0em;>All Camps</span><br><span style="font-size: 18px; font-family:'Helvetica'; color:#666; font-weight: bold; letter-spacing:0em;">Unsafe Areas</span>`
    },
	subtitle: {
        text: '% of households reporting areas of the camp where different household members feel unsafe, by age and gender'
    },
		
	credits:
			{
			enabled:false
			},
	exporting: {
			enabled: false
		},

    xAxis: {
        categories: ['Men','Boys','Women','Girls']
    },

    yAxis: {
        categories: ['Shelters', 'Inside the home', 'Health centres', 'Do not know/no answer', 'Firewood collection sites','Distribution points', 'Learning/recreation spaces', 'Markets', 'Water points', 'Bathing areas', 'Latrines', 'No area unsafe'],
        title: null
    },

    colorAxis: {
        min: 0,
		max: 50,
        minColor: '#FFFFFF',
        maxColor: '#0371c0'
    },

    legend: {
        enabled:false
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.point.value + '</b>% of <b>' +this.series.xAxis.categories[this.point.x] + '</b> reported <br>feeling unsafe at <b>' +
                  this.series.yAxis.categories[this.point.y] + '</b>';
        }
    },

    series: [{
        name: 'Unsafe Areas',
        borderWidth: 1,
		borderColor:'#59585a',
        data: [[0,0,0], [0, 1, 0], [0, 2, 1], [0, 3, 6], [0, 4, 3], [0, 5, 6], [0, 6, 1], [0, 7, 5], [0, 8, 3], [0, 9, 2], [0, 10, 6], [0, 11, 78], [1, 0, 1], [1, 1, 1], [1, 2, 3], [1, 3, 2], [1, 4, 9], [1, 5, 14], [1, 6, 19], [1, 7, 29], [1, 8, 10], [1, 9, 6], [1, 10, 22], [1, 11, 44],[2, 0, 2], [2, 1, 2], [2, 2, 5], [2, 3, 5], [2, 4, 2], [2, 5, 7], [2, 6, 1], [2, 7, 6], [2, 8, 24], [2, 9, 34], [2, 10, 40], [2, 11, 44],[3, 0, 3], [3, 1, 4], [3, 2, 6], [3, 3, 2], [3, 4, 3], [3, 5, 8], [3, 6, 16], [3, 7, 12], [3, 8, 31], [3, 9, 40], [3, 10, 49], [3, 11, 32]],
        dataLabels: {
            enabled: true,
            color: '#59585a',style: {textOutline:false}
        }
    }]
	});
});
