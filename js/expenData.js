Highcharts.setOptions({
  colors: ['#59585a','#0371c0',  '#95a0a9', '#d2cbb8', '#9fc9e7']
});

$(function() {

$(".dropdown-trigger").dropdown();

var chartExpenCamp;
var last_camp_name;
var expen_item_data;

var data_expen_camp = {
  'Camp 10': [0,0,0,0,0,150,300,300,500,1000,2000,2500,4000],
  'Camp 11': [0,0,0,50,0,0,200,300,450,1000,1500,2500,4000],
  'Camp 12': [0,0,0,0,1000,100,400,400,400,1500,2000,3000,4000],
  'Camp 13': [0,0,0,0,0,0,200,200,500,500,1500,1500,4000],
  'Camp 14': [0,0,0,0,0,0,200,200,500,350,1000,100,3750],
  'Camp 15': [0,0,0,0,0,0,175,225,425,100,1200,1500,4000],
  'Camp 16': [0,0,0,0,0,0,200,200,500,400,1040,500,4000],
  'Camp 17': [0,0,0,0,0,0,200,200,300,500,500,1500,3000],
  'Camp 18': [0,0,0,0,0,0,100,200,400,200,1000,1100,3000],
  'Camp 19': [0,0,0,0,0,0,400,300,400,500,1500,1500,4000],
  'Camp 1E': [0,0,0,150,0,200,300,300,0,1000,1200,3000,4000],
  'Camp 1W': [0,0,0,0,0,100,200,200,0,1000,1000,2000,4000],
  'Camp 20': [0,0,0,0,0,50,200,150,0,450,1000,1000,4000],
  'Camp 21': [0,0,0,0,0,0,250,300,450,600,800,1000,4000],
  'Camp 22': [0,0,0,0,0,0,150,200,500,600,1000,0,3000],
  'Camp 23': [0,0,0,0,0,0,300,250,500,1000,1000,1000,4000],
  'Camp 24': [0,0,0,0,0,0,200,300,500,600,1500,0,4000],
  'Camp 25': [0,400,0,0,0,0,200,200,400,200,1000,0,3000],
  'Camp 26': [0,0,0,0,0,0,100,300,500,500,1000,0,4500],
  'Camp 27': [0,300,0,0,0,0,200,300,375,450,700,0,4000],
  'Camp 2E': [0,0,0,100,0,200,300,300,200,1500,1000,3500,5000],
  'Camp 2W': [0,0,0,125,0,0,200,300,500,1000,1000,1500,4000],
  'Camp 3': [0,0,0,0,0,0,300,250,0,500,600,3000,4000],
  'Camp 4': [0,0,200,0,0,100,300,300,300,1000,500,2500,4000],
  'Camp 5': [0,0,0,0,0,0,200,300,100,700,600,2000,4000],
  'Camp 6': [0,0,0,0,0,0,200,300,500,700,1000,2000,4000],
  'Camp 7': [0,0,200,0,100,30,300,300,0,1200,1000,4000,4000],
  'Camp 8E': [0,0,0,0,0,100,300,400,500,1000,1500,2000,4000],
  'Camp 8W': [0,0,0,50,0,100,150,200,450,500,1000,2000,3000],
  'Camp 9': [0,0,0,0,0,0,200,500,300,1500,1500,3500,4000],
  'Nayapara RC': [0,0,0,200,0,150,250,250,400,1000,1000,0,5000],
};

var categories_livli3 = [
    'Debt servicing','Rent', 'Other household items', 'Education', 'Shelter materials', 'Hygiene items', 'Transport', 'Communication', 'Tobacco', 'Healthcare', 'Fuel', 'Clothing', 'Food'
];

$('#chartlivli3').highcharts({
	 chart: {

        type: 'bar', backgroundColor: 'transparent',
    },

    title: {
      text: `<span style="font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold;">Monthly Household Expenditures</span><br><span style="font-size: 22px; font-family:'Arial'; color:#666; font-weight: normal; letter-spacing:0em;">Across All Camps</span>`
    },
    subtitle: {
      text: `<span style="font-size: 12px; color:#59585a; font-family:'Arial';">Median reported monthly household expenditure in the 30 days prior to data collection, in Bangladeshi Taka (BDT)</span>`
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
        categories: categories_livli3,
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
            return '<b>'+Highcharts.numberFormat(Math.abs(this.point.y), 0)+' BDT</b>: Median reported household expenditure for '  +'<b>'+ this.point.category+ '</b>'
                ;
        }
    },

    series: [{
        name: 'items',
        data: [
            0,7,17,24,29,48,231,278,336,777,1135,1845,3958]
    }]
	});

  function make_expen_chart(expen_data = [], camp_name) {
      chartExpenCamp = $('#chartExpenCamp').highcharts({
        chart: {

             type: 'bar', backgroundColor: 'transparent',
         },

         title: {
           text: `<span style="font-size: 22px; font-family:'Arial';  color:#59585a; font-weight: bold; letter-spacing:0em;">Monthly Household Expenditures</span><br><span style="font-size: 22px; font-family:'Arial'; color:#0371c0; font-weight: normal; letter-spacing:0em;">${camp_name}</span>`
         },
         subtitle: {
           text: `<span style="font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial'; letter-spacing:0em;">Median reported monthly household expenditure in the 30 days prior to data collection, in Bangladeshi Taka (BDT)</span>`
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
              categories: categories_livli3,
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

        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        tooltip: {
           formatter: function () {
               return '<b>'+Highcharts.numberFormat(Math.abs(this.point.y), 0)+' BDT</b>: Median reported household<br>expenditure for '  +'<b>'+ this.point.category+ '</b>'+ ' in ' + `<span style="color:#0371c0; font-weight: bold; letter-spacing:0em;">${camp_name}</span>`
                   ;
           }
       },
        series: [{
          name: 'Expenditures',
          data: expen_data,
        }]
        });
      };

  $.getJSON('data/campsjoin.geojson', function(geojson) {

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

      plotOptions: {
            series: {
                events: {
                    click: function (e) {

                      // e is the event object in JS.
                      // in this case it corresponds to all of the data around the click event
                      // LOOK AT THIS IN THE BROWSER CONSOLE
                      // DIG THROUGH THE LAYERS
                      console.log(e);

                      var camp_name = e.point.New_Camp_N;
                      var camp_data = data_expen_camp[camp_name];
                      expen_item_data = camp_data;
                      expen_item_data = expen_item_data.map(x => (x));

                      if (camp_name !== last_camp_name) {
                        make_expen_chart(expen_item_data, camp_name);
                        $('#chartExpenCamp').css('display', '');
                        last_camp_name = camp_name;
                      }
                      else {
                        $('#chartExpenCamp').css('display', 'none');
                        last_camp_name = '';
                      }
                    }
                }
            }
        },

      mapNavigation: {
        enabled: false,
        buttonOptions: {
          enabled: false
        }
      },

      legend: {
            title: {
                text: 'Median Household Expenditures<br><span style="font-size: 16px; color: #666; font-weight: normal; letter-spacing:0em;">Median household expenditures for key expenses<br><span style="font-size: 16px; color: #666; font-weight: normal; letter-spacing:0em;">in the 30 days prior to data collection (BDT)</span>',
           style: {
            fontSize: '30px',
            color: '#59585a',
            fontFamily: 'Arial',
            align: 'center',
          }
        },
        align: 'center',
        verticalAlign: 'bottom',
			x:300,
			y:-50,
			itemMarginTop: 10,
			symbolWidth: 250,
			floating:true,
        },

      colorAxis: {
        min: 8500,
        max: 16500,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: [{'code':'Camp 10',value:14080, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:12800, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:15600, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:10200, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:8725, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:8750, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:8785, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:9850, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:8300, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:11000, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:14300, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:10950, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:9850, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:9350, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:7075, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:11300, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:9700, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:8125, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:10075, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:7925, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:13450, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:11800, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:10500, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:11000, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:10455, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:10700, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:17050, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:15000, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:10175, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:14200, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:10925, dataLabels: { x: -35, y: 25 }}],
       joinBy: ['New_Camp_N','code'],
        name: 'Camp',
        borderColor: '#59585a',
        borderWidth: 0.6,
        nullColor: "#cecece",
        nullInteraction: false,
        allowPointSelect: true,
        cursor: 'pointer',
        states: {
          hover: {
            borderWidth: 1,
            borderColor: '#59585a',
            brightness: 0.2
          },
          select: {
            color: '#FAEB00',
             borderColor: '#FAEB00',
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; letter-spacing:0em;">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold; letter-spacing:0em;">{point.value} BDT</span><br>median <b>household expenditures</b> for key<br>expenses in the 30 days prior to data collection<br><span style="font-size: 10px; letter-spacing:0em;">(click for camp level breakdown of expenditures)</span>'},
				hideDelay: 1000

        }]
    });

  });



});
