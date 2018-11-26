Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#9fc9e7']
});


$(function() {
	
$(".dropdown-trigger").dropdown();
	
var data_fuel = [
    ['Camp 10',5],['Camp 11',38],['Camp 12',18],['Camp 13',19],['Camp 14',37.5],['Camp 15',6],['Camp 16',10],['Camp 17',88],['Camp 18',19],['Camp 19',2.5],['Camp 1E',90],['Camp 1W',93],['Camp 20',7],['Camp 21',95],['Camp 22',3],['Camp 23',28],['Camp 24',3],['Camp 25',6],['Camp 26',89],['Camp 27',87],['Camp 2E',89],['Camp 2W',99],['Camp 3',94],['Camp 4',94],['Camp 5',94],['Camp 6',94],['Camp 7',93],['Camp 8E',7],['Camp 8W',40],['Camp 9',12],['Nayapara RC',97]

];
var categories_nfi = [
    'Radios','Blankets', 'Mosquito nets', 'Mens clothes', 'Other Items', 'Womens clothes', 'Childrens clothes', 'Floor mats', 'Umbrellas', 'Portable lamp/torchs', 'Kitchen sets', 'Solar lamps', 'Cooking stoves', 'Fuel'
];

var categories_nfi2 = [
    'None', 'Solar lamp', 'Cooking stove', 'Kitchen set', 'Floor mat'
	];
	
	$.getJSON('data/campsjoin.geojson', function (geojson) {

    Highcharts.mapChart('container_nfi', {
        chart: {
            map: geojson, backgroundColor: 'transparent',
        },

        title: {
            text: ''
        },
		credits:
			{
			enabled:false
			},
		exporting: {
			enabled: false
		},

        mapNavigation: {
            enabled: false,
            buttonOptions: {
              enabled:false
            }
        },

		legend: {
            title: {
                text: 'Cooking Fuel Distribution<br><span style="font-size: 16px; color: #59585a; font-weight: normal;">% households reporting receiving a cooking fuel<br><span style="font-size: 16px; color: #59585a; font-weight: normal">distribution in the 30 days prior to data collection</span>',
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
            max: 100,
            minColor: '#ffffff',
            maxColor: '#0371c0'
        },

        series: [{
        data: [{'code':'Camp 10',value:5, 'boys':72, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:38, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:18, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:19, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:38, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:6, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:10, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:88, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:19, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:3, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:90, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:93, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:7, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:95, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:3, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:28, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:3, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:6, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:89, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:87, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:89, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:99, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:94, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:94, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:94, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:94, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:93, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:7, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:40, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:12, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:97, dataLabels: { x: -35, y: 25 }}],
       joinBy: ['New_Camp_N','code'],
            name: 'Camp',
			   borderColor: '#59585a',
            borderWidth: 0.6,
			nullColor:"#cecece",
			nullInteraction:false,
            states: {
                hover: {
                    borderWidth:1, borderColor:'#59585a', brightness:0.2
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households received a <b>cooking fuel<br> distribution</b>in the 30 days prior to data collection'},

				hideDelay: 1000
        }]
    });
	
});

 $('#chartnfi').highcharts({
	 chart: {

        type: 'bar', backgroundColor: 'transparent',
    },

    title: {
        text: 'Urgently needed Non-Food Items'
    },
	subtitle: {
        text: '% households reporting an urgent need for key non-food items'
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
        categories: categories_nfi,
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
        formatter: function () {
            return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of households reporting an<br>urgent need for '  +'<b>'+ this.point.category+ '</b>'
                ;
        }
    },

    series: [{
        name: 'items',
        data: [
            0,2,2,2,4,4,10,11,11,15,48,53,57,75]
    }]
	});
	
$('#chartnfi2').highcharts({
	 chart: {

        type: 'bar', backgroundColor: 'transparent',
    },

    title: {
        text: 'Ownership of Non-Food Items'
    },
	subtitle: {
        text: '% households reporting ownership of key non-food items'
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
        categories: categories_nfi2,
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
        formatter: function () {
            return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of households reporting an<br>urgent need for '  +'<b>'+ this.point.category+ '</b>'
                ;
        }
    },

    series: [{
        name: 'items',
        data: [
            3,37,82,91,94]
    }]
	});
 
});