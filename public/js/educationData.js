Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});

$(function() {
	
$(".dropdown-trigger").dropdown();

  var data_school = [
    ['Camp 10', 72, 62],
    ['Camp 11', 64, 68],
    ['Camp 12', 71, 76],
    ['Camp 13', 66, 66],
    ['Camp 14', 65, 69],
    ['Camp 15', 77, 72],
    ['Camp 16', 74, 65],
    ['Camp 17', 48, 48],
    ['Camp 18', 79, 70],
    ['Camp 19', 72, 64],
    ['Camp 1E', 67, 42],
    ['Camp 1W', 49, 58],
    ['Camp 20', 45, 72],
    ['Camp 21', 57, 64],
    ['Camp 22', 72, 68],
    ['Camp 23', 67, 67],
    ['Camp 24', 61, 61],
    ['Camp 25', 79, 66],
    ['Camp 26', 48, 65],
    ['Camp 27', 58, 55],
    ['Camp 2E', 58, 54],
    ['Camp 2W', 53, 56],
    ['Camp 3', 45, 55],
    ['Camp 4', 77, 75],
    ['Camp 5', 31, 39],
    ['Camp 6', 66, 46],
    ['Camp 7', 32, 54],
    ['Camp 8E', 65, 56],
    ['Camp 8W', 72, 68],
    ['Camp 9', 60, 49],
    ['Nayapara RC', 61, 60]
  ];

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_edu_girls', {
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
          text: 'School Attendance - Girls<br><span style="font-size: 16px; color: #666; font-weight: normal">% girls aged 6-14 reported to attend learning spaces</span><br><span style="font-size: 16px; color: #666; font-weight: normal">in week prior to data collection</span>',
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
        data: [{'code':'Camp 10',value:62, 'boys':72, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:68, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:76, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:66, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:69, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:72, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:65, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:48, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:70, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:64, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:42, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:58, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:72, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:64, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:68, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:67, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:61, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:66, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:65, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:55, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:54, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:56, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:55, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:75, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:39, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:46, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:54, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:56, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:68, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:49, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:51, dataLabels: { x: -35, y: 25 }}],
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
            brightness: 0.3
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of girls aged 14-16 reported to attend <b>learning</b><br><b>spaces</b> in the week prior to data collection'},
				hideDelay: 1000

        }]
    });
  });
  
  var categories_edu = [
    '15-17 yrs', '6-14 yrs', '3-5 yrs'
  ];

  $('#chartEduGirls').highcharts({
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
    },
     title: {
      text: `<span style="font-size: 22px; font-family:'Helvetica';  color:#59585a; font-weight: bold; letter-spacing:0em;">All Camps</span><br><span style="font-size: 22px; font-family:'Helvetica'; color:#59585a; font-weight: normal; letter-spacing:0em;">% of girls reported to be attending learning centres </span>`
    },
    subtitle: {
      text: `<span style="font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Helvetica';">in the 7 days prior to data collection, by age group</span>`
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    xAxis: [{
      categories: categories_edu,
      reversed: false,
      labels: {
        step: 1
      }
    }, { // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories_edu,
	  linkedTo: 0,
      labels: {
        step: 1
      }
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value) + '%';
        }
      }
    },
    plotOptions: {
      series: {
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
          Highcharts.numberFormat(Math.abs(this.point.y), 0) + '% of total population';
      }
    },
    series: [ {
      name: 'NGO-run learning centre',
      data: [
        2, 63, 41
      ]
    },{
      name: 'Madrasa or Maqtab',
      data: [
        3, 76, 59
      ]
    }, 
	
	
	]
  });  
 
});
