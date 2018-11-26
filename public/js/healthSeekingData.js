Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});


$(function() {
	
$(".dropdown-trigger").dropdown();

  var data_health = [

    ['Camp 10', 13],
    ['Camp 11', 14],
    ['Camp 12', 14],
    ['Camp 13', 11],
    ['Camp 14', 12],
    ['Camp 15', 6],
    ['Camp 16', 17],
    ['Camp 17', 19],
    ['Camp 18', 10],
    ['Camp 19', 13],
    ['Camp 1E', 21],
    ['Camp 1W', 21],
    ['Camp 20', 17],
    ['Camp 21', 9],
    ['Camp 22', 21],
    ['Camp 23', 13],
    ['Camp 24', 20],
    ['Camp 25', 9],
    ['Camp 26', 9],
    ['Camp 27', 12],
    ['Camp 2E', 26],
    ['Camp 2W', 27],
    ['Camp 3', 16],
    ['Camp 4', 14],
    ['Camp 5', 16],
    ['Camp 6', 16],
    ['Camp 7', 29],
    ['Camp 8E', 20],
    ['Camp 8W', 20],
    ['Camp 9', 12],
    ['Nayapara RC', 15]
  ];

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_health2', {
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
          text: 'Health Seeking Behaviour<br></br><span style="font-size: 16px; color: #59585a; font-weight: normal; line-height: 1.6;">% households with children under 5 reporting at least</span><br><span style="font-size: 16px; color: #59585a; font-weight: normal; line-height: 1.6;">one child under 5 with diarrhea in the 2 weeks prior to data collection</span>',
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
        y: -50,
        itemMarginTop: 10,
        symbolWidth: 250,
        floating: true,
      },

      colorAxis: {
        min: 5,
        max: 25,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: [{'code':'Camp 10',value:90, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:86, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:77, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:86, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:85, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:94, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:89, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:76, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:85, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:85, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:78, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:78, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:94, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:91, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:88, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:65, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:78, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:81, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:75, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:74, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:75, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:63, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:71, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:48, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:48, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:67, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:53, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:51, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:34, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:55, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:55, dataLabels: { x: -35, y: 25 }}],
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
          borderWidth: 0,

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
    'Did not receive', 'Received ORT at home', 'Received ORT from a healthcare provider'
  ];

  $('#charthealth').highcharts({
    chart: {

      type: 'bar',
      backgroundColor: 'transparent',
    },

    title: {
      text: `<span style="font-size: 18px; font-family:'Helvetica';  color:#000000; font-weight: bold"; letter-spacing:0em;>All Camps</span><br><span style="font-size: 18px; font-family:'Helvetica'; color:#59585a; font-weight: bold; letter-spacing:0em;">ORT Treatment Status</span>`
    },
    subtitle: {
      text: '% of children under 5 with diarrhea in 2 weeks prior to survey'
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
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
