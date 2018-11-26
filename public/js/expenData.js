Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#9fc9e7']
});

$(function() {
	
$(".dropdown-trigger").dropdown();

	var data_expen = [
    ['Camp 10',1750],
    ['Camp 11',1000],
    ['Camp 12',1500],
    ['Camp 13',2400],
    ['Camp 14',1400],
    ['Camp 15',1750],
    ['Camp 16',2000],
    ['Camp 17',2000],
    ['Camp 18',1500],
    ['Camp 19',1000],
    ['Camp 1E',2000],
    ['Camp 1W',2000],
    ['Camp 20',1500],
    ['Camp 21',2000],
    ['Camp 22',1000],
	['Camp 23',3000],
    ['Camp 24',2000],
    ['Camp 25',2000],
    ['Camp 26',1000],
    ['Camp 27',1500],
    ['Camp 2E',5500],
    ['Camp 2W',1000],
    ['Camp 3',1700],
	['Camp 4',3000],
    ['Camp 5',2500],
    ['Camp 6',500],
    ['Camp 7',1500],
    ['Camp 8E',3000],
    ['Camp 8W',2350],
    ['Camp 9',2000],
	['Nayapara RC',6000]
];



  $.getJSON('data/campsjoin.geojson', function(geojson) {

    // Initiate the chart
    Highcharts.mapChart('container_expen', {
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
                text: 'Median Household Income<br><span style="font-size: 16px; color: #666; font-weight: normal;">Median household income for the<br><span style="font-size: 16px; color: #666; font-weight: normal">30 days prior to data collection (BDT)</span>',
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
        min: 1000,
        max: 5000,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: data_expen,
        keys: ['New_Camp_N', 'value'],
        joinBy: 'New_Camp_N',
        name: 'Camp',
        borderColor: '#59585a',
        borderWidth: 0.6,
        nullColor: "#cecece",
        nullInteraction: false,
        states: {
          hover: {
            borderWidth: 1,
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold;">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value} BDT</span><br>median household income in the<br>30 days prior to data collection'},
				hideDelay: 1000

        }]
    });

  });

var categories_livli2 = [
    'Debt servicing','Rent', 'Household items', 'Education', 'Shelter materials', 'Hygiene', 'Transport', 'Communication', 'Tobacco', 'Healthcare', 'Fuel', 'Clothing', 'Food'
];
	
$('#chartlivli3').highcharts({
	 chart: {

        type: 'bar', backgroundColor: 'transparent',
    },

    title: {
        text: 'Household Expenditures'
    },
	subtitle: {
        text: 'Median reported monthly household expenditure in the 30 days prior to data collection, in Bangladeshi Taka (BDT)'
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
        categories: categories_livli2,
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
                return Math.abs(this.value);
            }
        }
    },

     tooltip: {
        formatter: function () {
            return 'Median reported household expenditure for<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'</b> of households reporting an<br>urgent need for '  +'<b>'+ this.point.category+ '</b>'
                ;
        }
    },

    series: [{
        name: 'items',
        data: [
            0,7,17,24,29,48,231,278,336,777,1135,1845,3958]
    }]
	});
	
$('#chartlivli4').highcharts({
		chart: {

        type: 'pie', backgroundColor: 'transparent',
    },

    title: {
        text: 'Debt'
    },
	
	subtitle: {
        text: '% households reported taking on new debts since arriving in Bangladesh'
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
                data: [["Yes",75],["No",25]],
                size: '90%',
                innerSize: '30%',
                showInLegend:false,
                dataLabels: {
                    enabled: true
                }
            }]
	});

});
