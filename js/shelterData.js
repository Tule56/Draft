Highcharts.setOptions({
  colors: ['#59585a','#0371c0',  '#95a0a9', '#d2cbb8', '#9fc9e7']
});

$(".dropdown-trigger").dropdown();
$('.modal-trigger').leanModal();

$(function() {

  $(".dropdown-trigger").dropdown();

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
			y:-50,
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
		data: [{'code':'Camp 10',value:25, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:27, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:35, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:13, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:18, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:2, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:11, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:32, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:13, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:18, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:19, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:33, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:45, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:18, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:9, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:8, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:5, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:3, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:15, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:9, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:19, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:19, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:27, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:28, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:29, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:18, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:26, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:31, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:10, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:19, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:17, dataLabels: { x: -35, y: 25 }}
			],
            joinBy: ['New_Camp_N','code'],
        name: 'Camp',
        borderColor: '#59585a',
        borderWidth: 0.6,
        nullColor: "#cecece",
        nullInteraction: false,
        cursor: 'pointer',
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
				pointFormat: '<span style="font-size: 16px; color: #666; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households reporting damage to<br>shelter in 30 days prior to data collection'},

				hideDelay: 1000
        }]
    });

  });

  var categories_shelter= [
      'Bricks, Cement','Other', 'Bamboo frame, bamboo lattice, mud walls', 'Bamboo frame, external mud walls', 'Bamboo frame, bamboo matting walls', 'Bamboo frame, lattice walls, plastic sheeting'
  ];

  $('#chartshelter').highcharts({
      chart: {

           type: 'bar', backgroundColor: 'transparent',
       },
       title: {
         text: 'Shelter Construction Material'
       },
       subtitle: {
         text: '% households using different materials for shelters'
       },

     credits:
         {
         enabled:false
         },
     exporting: {
         enabled: false
       },
     legend: {
         enabled: false
       },

       xAxis: {
           categories: categories_shelter,
       reversed: false,
       labels:{step:1}
       },

       yAxis: {
       min:0,
           title: {
               text: null
           },

      labels: {
               formatter: function () {
                   return Math.abs(this.value) + '%';
               }
           }
       },


           tooltip: {
             formatter: function() {
               return '<b>' + this.x + '</b>-<br>Construction material for '+Highcharts.numberFormat(Math.abs(this.point.y), 0)+ ' % of household frames';
             }
           },

       series: [{
           name: 'items',
           data: [
               0,1,2,4,38,63]
       }]
     });

});
