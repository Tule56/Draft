Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});

$(function() {

$(".dropdown-trigger").dropdown();

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
			x:310,
			y:-50,
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
        cursor: 'pointer',
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
        return '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%</b> of HH reporting receiving food assistance from<br>' + '<b>' + this.point.category + '</b>' + ' in the 30 days prior to data collection';
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
