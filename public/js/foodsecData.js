Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});

$(function() {
	
$(".dropdown-trigger").dropdown();
	
  var data_market = [
    ['Camp 10', 'Kidnapping', 42, 'Kidnapping', 50, 66, 23, 113, 33.0, 5.2, 1.7, 4595, 378700, 4734, 37.17, 27.43, 88.50, 79.65],
    ['Camp 11', 'Kidnapping', 64, 'Kidnapping', 54, 70, 3, 111, 36.3, 5.3, 1.5, 4720, 431200, 5528, 56.76, 34.23, 89.19, 81.08],
    ['Camp 12', 'Kidnapping', 41, 'Child marriage', 35, 61, 9, 107, 36.1, 5.5, 1.8, 5182, 546800, 6214, 38.32, 26.17, 92.52, 79.44],
    ['Camp 13', 'Kidnapping', 60, 'Kidnapping', 58, 59, 11, 104, 33.9, 5.3, 1.5, 4220, 274400, 4158, 56.73, 50.96, 95.19, 91.35],
    ['Camp 14', 'Natural disaster', 40, 'Natural disaster', 40, 57, 48, 109, 34.9, 5.4, 1.5, 4374, 355400, 5226, 30.28, 30.28, 88.07, 82.57],
    ['Camp 15', 'Kidnapping', 69, 'Kidnapping', 61, 67, 19, 104, 36.8, 5.1, 1.6, 3893, 223650, 4564, 63.46, 47.12, 92.31, 88.46],
    ['Camp 16', 'Natural disaster', 46, 'Natural disaster', 45, 59, 13, 120, 32.5, 4.8, 1.6, 4216, 373450, 4554, 23.33, 13.33, 81.67, 78.33],
    ['Camp 17', 'Kidnapping', 51, 'Kidnapping', 39, 32, 60, 106, 34.4, 4.6, 1.4, 3865, 320165, 4327, 46.23, 16.98, 91.51, 84.91],
    ['Camp 18', 'Kidnapping', 40, 'Natural disaster', 35, 40, 53, 106, 32.1, 4.4, 1.3, 3617, 230500, 3033, 38.68, 12.26, 97.17, 96.23],
    ['Camp 19', 'Kidnapping', 49, 'Sexual violence', 49, 71, 21, 140, 35.7, 5.1, 1.6, 4607, 443850, 5840, 41.43, 41.43, 85.00, 77.86],
    ['Camp 1E', 'Kidnapping', 43, 'Kidnapping', 56, 77, 7, 102, 36.2, 5.0, 1.7, 4724, 599700, 7139, 41.18, 31.37, 96.08, 81.37],
    ['Camp 1W', 'Kidnapping', 48, 'Sexual violence', 40, 72, 13, 101, 36.1, 4.8, 1.5, 4332, 623650, 8315, 46.53, 38.61, 96.04, 92.08],
    ['Camp 20', 'Armed group recruitment', 57, 'Sexual violence', 67, 37, 95, 96, 33.6, 4.8, 1.5, 4246, 266230, 4226, 51.04, 60.42, 90.63, 87.50],
    ['Camp 21', 'Kidnapping', 58, 'Kidnapping', 59, 56, 15, 109, 34.1, 5.1, 1.6, 4736, 280700, 4190, 51.38, 22.94, 88.99, 81.65],
    ['Camp 22', 'Kidnapping', 56, 'Sexual violence', 50, 57, 10, 172, 34.0, 5.1, 1.6, 3846, 367300, 4897, 39.53, 35.47, 70.93, 65.12],
    ['Camp 23', 'Natural disaster', 41, 'Natural disaster', 41, 44, 9, 275, 31.4, 5.1, 1.5, 4821, 558800, 8218, 12.73, 8.73, 34.55, 26.91],
    ['Camp 24', 'Kidnapping', 51, 'Kidnapping', 51, 71, 3, 177, 34.0, 4.7, 1.6, 4848, 410600, 6416, 30.51, 23.16, 59.32, 54.80],
    ['Camp 25', 'Kidnapping', 37, 'Kidnapping', 35, 63, 23, 279, 32.3, 4.8, 1.5, 3807, 338750, 2971, 20.07, 8.24, 53.76, 52.33],
    ['Camp 26', 'Kidnapping', 49, 'Kidnapping', 41, 58, 27, 224, 34.6, 5.0, 1.5, 5063, 430600, 4581, 29.46, 20.54, 60.71, 52.23],
    ['Camp 27', 'Kidnapping', 60, 'Kidnapping', 63, 65, 11, 199, 33.2, 4.7, 1.5, 4245, 290700, 4927, 32.16, 23.62, 53.27, 51.26],
    ['Camp 2E', 'Kidnapping', 48, 'Sexual violence', 39, 54, 22, 102, 35.7, 5.5, 1.7, 4996, 618500, 7109, 46.08, 37.25, 96.08, 86.27],
    ['Camp 2W', 'Kidnapping', 41, 'Sexual violence', 55, 63, 18, 107, 33.8, 5.5, 1.6, 4633, 623800, 6855, 40.19, 53.27, 97.20, 88.79],
    ['Camp 3', 'Kidnapping', 61, 'Sexual violence', 74, 70, 37, 100, 36.7, 4.9, 1.6, 4457, 486940, 6493, 60.00, 73.00, 99.00, 97.00],
    ['Camp 4', 'Kidnapping', 48, 'Natural disaster', 34, 37, 35, 98, 35.4, 4.8, 1.4, 4397, 297000, 3667, 47.96, 19.39, 98.98, 91.84],
    ['Camp 5', 'Natural disaster', 35, 'Sexual violence', 35, 43, 42, 105, 35.4, 4.8, 1.5, 4417, 453600, 6574, 31.43, 32.38, 93.33, 78.10],
    ['Camp 6', 'Kidnapping', 75, 'Kidnapping', 60, 70, 38, 105, 35.8, 4.6, 1.5, 4800, 407400, 5991, 75.24, 57.14, 100.00, 96.19],
    ['Camp 7', 'Kidnapping', 37, 'Sexual violence', 45, 62, 45, 100, 38.8, 5.1, 1.5, 5198, 634400, 7643, 36.00, 44.00, 97.00, 76.00],
    ['Camp 8E', 'Kidnapping', 31, 'Sexual violence', 46, 64, 37, 108, 38.1, 5.0, 1.7, 5100, 499050, 7561, 25.00, 37.04, 80.56, 68.52],
    ['Camp 8W', 'Kidnapping', 40, 'Natural disaster', 33, 43, 48, 106, 35.4, 4.9, 1.5, 3946, 344200, 4002, 35.85, 14.15, 90.57, 86.79],
    ['Camp 9', 'Kidnapping', 68, 'Sexual violence', 79, 81, 3, 104, 36.8, 5.1, 1.5, 4737, 590800, 8321, 63.46, 74.04, 93.27, 90.38],
    ['Nayapara RC', 'Natural disaster', 39, 'Sexual violence', 51, 84, 16, 106, 37.7, 5.8, 2.1, 6028, 1424500, 21583, 30.19, 45.28, 88.68, 50.00]
  ];

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_foodsec', {
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
          text: 'Travel to Markets<br><br><span style="font-size: 16px; color: #59585a; font-weight: normal">% households reporting greater than</span><br><span style="font-size: 16px; color: #59585a; font-weight: normal">30 minutes walk to food market</span>',
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
        min: 0,
        max: 80,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: [{'code':'Camp 10',value:23, 'boys':72, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:3, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:9, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:11, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:48, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:19, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:13, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:60, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:53, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:21, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:7, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:13, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:95, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:15, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:10, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:9, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:3, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:23, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:27, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:11, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:22, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:18, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:37, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:35, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:42, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:38, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:45, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:37, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:48, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:3, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:16, dataLabels: { x: -35, y: 25 }}],
       joinBy: ['New_Camp_N','code'],
        name: 'Camp',
        borderColor: '#59585a',
        borderWidth: 0.6,
        nullColor: "#cecece",
        nullInteraction: false,
        states: {
          hover: {
            borderWidth: 3,
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
				pointFormat: '<span style="font-size: 16px; color: #666; font-weight: bold;">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households reported <b>more than</b><br><b>30 minutes walk to market</b>'},
				hideDelay: 1000,
        }]
    });
  });

  $('#chartfoodsec').highcharts({
    chart: {

      type: 'pie',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Travel to Markets'
    },

    subtitle: {
      text: '% of households reporting different travel times on foot to food markets'
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
        return '<b>' + this.point.name + '</b>: ' + this.y + ' % of households surveyed';
      }
    },

    series: [{
      name: '',
      data: [
        ["less than 5 minutes", 8],
        ["5 - 15 minutes", 41],
        ["15 - 30 minutes", 18],
        ["30+ minutes", 6]
      ],
      size: '60%',
      innerSize: '20%',
      showInLegend: false,
      dataLabels: {
        enabled: true
      }
    }]
  });

  var categories_fs = [
    'Bangladesh Army', 'ICRC / WFP'
  ];

  $('#chartfoodsec2').highcharts({
    chart: {

      type: 'bar',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Food Assistance'
    },
    subtitle: {
      text: '% households reporting receiving food assistance in the 30 days prior to data collection'
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
      categories: categories_fs,
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
        return '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%</b> of HH reporting receiving food assistance from ' + '<b>' + this.point.category + '</b>' + '<br>in the 30 days prior to data collection';
      }
    },

    series: [{
      name: 'items',
      data: [8, 97]
    }]
  });

  $('#chartfoodsec3').highcharts({
    chart: {

      type: 'pie',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Ration Cards'
    },

    subtitle: {
      text: '% households reporting possession of a ration card'
    },

    credits: {
      enabled: false
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
        return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
      }
    },

    series: [{
      name: '',
      data: [
        ["Yes", 99],
        ["No", 1]
      ],
      size: '90%',
      innerSize: '30%',
      showInLegend: false,
      dataLabels: {
        enabled: true
      }
    }]
  });

});
