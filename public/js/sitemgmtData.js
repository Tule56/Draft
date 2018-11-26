Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#9fc9e7']
});


$(function() {
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

  $.getJSON('data/campsjoin.geojson', function(geojson) {
	  
	$(".dropdown-trigger").dropdown();


    // Initiate the chart
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
			y:-20,
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
        states: {
          hover: {
            borderWidth: 100,
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
				pointFormat: '<span style="font-size: 16px; color: #666; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households reported <b>awareness of</b><br><b>CPP program volunteers</b> in their area'},
				hideDelay: 1000

        }]
    });

  });

  $('#chartsm1').highcharts({
    chart: {

      type: 'pie',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Cyclone Preparedness Program (CPP)<br>Awareness'
    },

    subtitle: {
      text: '% households reporting awareness of the role of CPP volunteers in their area'
    },

    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },

    yAxis: {
      title: {
        text: ''
      }
    },

    plotOptions: {
      pie: {
        shadow: false
      }
    },

    tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
      }
    },

    series: [{
      name: '',
      data: [
        ["Yes", 60],
        ["No", 40]
      ],
      size: '90%',
      innerSize: '60%',
      showInLegend: false,
      dataLabels: {
        enabled: true
      }
    }]
  });

  var categories_sm = [
    'Evacuate Shelter', 'Stay in Shelter', 'Secure Shelter',
  ];

  $('#chartsm2').highcharts({
    chart: {

      type: 'bar',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Cyclone Preparation'
    },
    subtitle: {
      text: '% households reporting steps they would take to prepare for an approaching cyclone'
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
        return '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%</b> of HH reporting that they would ' + '<b>' + this.point.category + '</b>' + '<br>in the event of an approaching cyclone';
      }
    },

    series: [{
      name: 'items',
      data: [38, 51, 76]
    }]
  });
});
