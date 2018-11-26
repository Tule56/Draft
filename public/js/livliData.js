Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#9fc9e7']
});

$(function() {
	
$(".dropdown-trigger").dropdown();

  var data_work = [
    ['Camp 10', 76],
    ['Camp 11', 57],
    ['Camp 12', 75],
    ['Camp 13', 58],
    ['Camp 14', 54],
    ['Camp 15', 47],
    ['Camp 16', 52],
    ['Camp 17', 54],
    ['Camp 18', 58],
    ['Camp 19', 69],
    ['Camp 1E', 69],
    ['Camp 1W', 77],
    ['Camp 20', 68],
    ['Camp 21', 39],
    ['Camp 22', 48],
    ['Camp 23', 34],
    ['Camp 24', 41],
    ['Camp 25', 49],
    ['Camp 26', 60],
    ['Camp 27', 47],
    ['Camp 2E', 40],
    ['Camp 2W', 62],
    ['Camp 3', 66],
    ['Camp 4', 52],
    ['Camp 5', 69],
    ['Camp 6', 72],
    ['Camp 7', 76],
    ['Camp 8E', 66],
    ['Camp 8W', 64],
    ['Camp 9', 70],
    ['Nayapara RC', 29]
  ];


  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_livli', {
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
          text: 'Income<br><span style="font-size: 16px; color: #59585a; font-weight: normal;">% households reporting no members working<br><span style="font-size: 16px; color: #59585a; font-weight: normal">in the 30 days prior to data collection</span>',
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
        min: 40,
        max: 80,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: data_work,
        keys: ['New_Camp_N', 'value'],
        joinBy: 'New_Camp_N',
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
          enabled: false,
          overflow: true,
          allowOverlap: true,
          borderWidth: 0,

          format: '{point.properties.New_Camp_N}'
        },
         tooltip: {
                headerFormat: '',
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold;">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households reported <b>no members working</b><br><b>for income</b> in the 30 days prior to data collection'},
				hideDelay: 1000

        }]
    });

  });

  var categories_livli = [
    'Cash assistance', 'Remittances', 'Work', 'New debts',
  ];

  $('#chartlivli').highcharts({
    chart: {

      type: 'bar',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Sources of Income'
    },
    subtitle: {
      text: '% HH reporting income from different sources in the 30 days prior to data collection'
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

    xAxis: {
      categories: categories_livli,
      reversed: false,
      labels: {
        step: 1
      }
    },

    yAxis: {
      title: {
        text: null
      },

      labels: {
        enabled: true
      }
    },

    tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
      }
    },

    series: [{
        name: 'income',
        data: [7, 6, 40, ''],showInLegend: false,
      },      

      {
        name: 'debt',
        data: ['', '', '', 35],showInLegend: false,
      }
    ]
  });

  $('#chartlivli2').highcharts({
    chart: {

      type: 'pie',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Cash for Work'
    },

    subtitle: {
      text: '% households reported at least one individual carrying out labour work paid by an NGO in the 30 days prior to data collection'
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
        ["Yes", 7],
        ["No", 93]
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
