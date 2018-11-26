Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#9fc9e7']
});


$(function() {
	
	$(".dropdown-trigger").dropdown();
	
  var data_hhdamage = [
    ['Camp 10', 25],
    ['Camp 11', 27],
    ['Camp 12', 35],
    ['Camp 13', 13],
    ['Camp 14', 18],
    ['Camp 15', 2],
    ['Camp 16', 11],
    ['Camp 17', 32],
    ['Camp 18', 13],
    ['Camp 19', 18],
    ['Camp 1E', 19],
    ['Camp 1W', 33],
    ['Camp 20', 45],
    ['Camp 21', 18],
    ['Camp 22', 9],
    ['Camp 23', 8],
    ['Camp 24', 5],
    ['Camp 25', 3],
    ['Camp 26', 15],
    ['Camp 27', 9],
    ['Camp 2E', 19],
    ['Camp 2W', 19],
    ['Camp 3', 27],
    ['Camp 4', 28],
    ['Camp 5', 29],
    ['Camp 6', 18],
    ['Camp 7', 26],
    ['Camp 8E', 31],
    ['Camp 8W', 10],
    ['Camp 9', 19],
    ['Nayapara RC', 17]
  ];

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_shelter', {
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
          text: 'Shelter Damage<br></br><br></br><span style="font-size: 16px; color: #666; font-weight: normal">% households reporting damage or destruction<br></span><span style="font-size: 16px; color: #666; font-weight: normal">to shelter in 30 days prior to data collection</span>',
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
        max: 40,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: data_hhdamage,
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
				pointFormat: '<span style="font-size: 16px; color: #666; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households reporting damage to<br>shelter in 30 days prior to data collection'},

				hideDelay: 1000
        }]
    });

  });

  $('#chartshelter').highcharts({
    chart: {

      type: 'pie',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Shelter Construction Material'
    },
    subtitle: {
      text: '% households using different materials for shelters'
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

    yAxis: {
      title: {
        text: null
      },

      labels: {
        enabled: false
      }
    },

    tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
      }
    },

    series: [{
      name: 'Construction material',
      data: [
        ["Bamboo frame, lattice walls with plastic sheeting", 63],
        ["Bamboo frame, bamboo matting walls", 38],
        ["Bamboo frame, external mud walls", 4],
        ["Bamboo frame, bamboo lattice, mud walls", 2],
        ["Other", 1],
        ["Bricks, Cement", 0]
      ],

      size: '60%',
      innerSize: '20%',
      showInLegend: false
    }]
  });

});
