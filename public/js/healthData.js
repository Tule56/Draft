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
			x:330,
			y:-20,
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
        data: data_health,
        keys: ['New_Camp_N', 'value'],
        joinBy: 'New_Camp_N',
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
          enabled: false,
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
      text: `<span style="font-size: 18px; font-family:'Helvetica';  color:#000000; font-weight: bold"; letter-spacing:0em;>All Camps</span><br><span style="font-size: 18px; font-family:'Helvetica'; color:#666; font-weight: bold; letter-spacing:0em;">ORT Treatment Status</span>`
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
