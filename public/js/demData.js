Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});

$(function() {
	
$(".dropdown-trigger").dropdown();


  var chartDemCamp;
  var last_camp_name;
  var male_age_data;
  var female_age_data;
  
var data_pl_women = [
    ['Camp 10', 41],
    ['Camp 11', 51],
    ['Camp 12', 43],
    ['Camp 13', 53],
    ['Camp 14', 55],
    ['Camp 15', 46],
    ['Camp 16', 53],
    ['Camp 17', 47],
    ['Camp 18', 40],
    ['Camp 19', 38],
    ['Camp 1E', 38],
    ['Camp 1W', 43],
    ['Camp 20', 46],
    ['Camp 21', 43],
    ['Camp 22', 53],
    ['Camp 23', 46],
    ['Camp 24', 30],
    ['Camp 25', 44],
    ['Camp 26', 38],
    ['Camp 27', 37],
    ['Camp 2E', 50],
    ['Camp 2W', 48],
    ['Camp 3', 34],
    ['Camp 4', 40],
    ['Camp 5', 59],
    ['Camp 6', 38],
    ['Camp 7', 54],
    ['Camp 8E', 39],
    ['Camp 8W', 45],
    ['Camp 9', 35],
    ['Nayapara RC', 48]
  ];

  var data_age_sex_camp = {
    'Camp 10': [[0.047709924,0.076335878,0.110687023,0.030534351,0.022900763,0.057251908,0.143129771,0.019083969],[0.036259542,0.047709924,0.078244275,0.036259542,0.040076336,0.080152672,0.160305344,0.013358779]],
    'Camp 11': [[0.059047619,0.072380952,0.08,0.047619048,0.017142857,0.045714286,0.148571429,0.015238095],[0.04952381,0.062857143,0.112380952,0.03047619,0.028571429,0.076190476,0.142857143,0.011428571]],
    'Camp 12': [[0.044362292,0.040665434,0.094269871,0.051756007,0.029574861,0.046210721,0.157116451,0.01663586],[0.035120148,0.070240296,0.092421442,0.033271719,0.060998152,0.07948244,0.136783734,0.011090573]],
    'Camp 13': [[0.052930057,0.060491493,0.086956522,0.035916824,0.034026465,0.037807183,0.15879017,0.011342155],[0.060491493,0.064272212,0.124763705,0.032136106,0.018903592,0.071833648,0.143667297,0.005671078]],
    'Camp 14': [[0.060077519,0.083333333,0.093023256,0.029069767,0.021317829,0.034883721,0.158914729,0.013565891],[0.060077519,0.067829457,0.096899225,0.03875969,0.021317829,0.048449612,0.170542636,0.001937984]],
    'Camp 15': [[0.039014374,0.069815195,0.098562628,0.026694045,0.024640657,0.05338809,0.145790554,0.020533881],[0.05338809,0.051334702,0.09650924,0.034907598,0.030800821,0.090349076,0.162217659,0.002053388]],
    'Camp 16': [[0.040254237,0.048728814,0.072033898,0.033898305,0.025423729,0.052966102,0.158898305,0.012711864],[0.06779661,0.052966102,0.099576271,0.052966102,0.038135593,0.105932203,0.13559322,0.002118644]],
    'Camp 17': [[0.038374718,0.060948081,0.088036117,0.033860045,0.013544018,0.06772009,0.151241535,0.0248307],[0.051918736,0.065462754,0.09255079,0.033860045,0.022573363,0.108352144,0.14221219,0.004514673]],
    'Camp 18': [[0.051224944,0.06013363,0.091314031,0.037861915,0.024498886,0.069042316,0.158129176,0.004454343],[0.048997773,0.069042316,0.084632517,0.033407572,0.028953229,0.08908686,0.140311804,0.008908686]],
    'Camp 19': [[0.039408867,0.068965517,0.098522167,0.037766831,0.016420361,0.0591133,0.144499179,0.014778325],[0.039408867,0.08045977,0.082101806,0.037766831,0.034482759,0.078817734,0.16091954,0.006568144]],
    'Camp 1E': [[0.040899796,0.069529652,0.09202454,0.030674847,0.034764826,0.083844581,0.130879346,0.030674847],[0.034764826,0.034764826,0.077709611,0.049079755,0.038854806,0.077709611,0.159509202,0.014314928]],
    'Camp 1W': [[0.036717063,0.060475162,0.088552916,0.030237581,0.043196544,0.03887689,0.166306695,0.006479482],[0.045356371,0.058315335,0.112311015,0.041036717,0.023758099,0.082073434,0.159827214,0.006479482]],
    'Camp 20': [[0.052631579,0.066985646,0.09569378,0.038277512,0.023923445,0.043062201,0.153110048,0.016746411],[0.040669856,0.050239234,0.114832536,0.031100478,0.0215311,0.100478469,0.148325359,0.002392344]],
    'Camp 21': [[0.034068136,0.076152305,0.090180361,0.04008016,0.022044088,0.048096192,0.136272545,0.012024048],[0.054108216,0.064128257,0.102204409,0.052104208,0.042084168,0.066132265,0.150300601,0.01002004]],
    'Camp 22': [[0.039872408,0.062200957,0.102073365,0.03030303,0.04784689,0.052631579,0.157894737,0.006379585],[0.066985646,0.059011164,0.062200957,0.033492823,0.039872408,0.094098884,0.137161085,0.007974482]],
    'Camp 23': [[0.035123967,0.070247934,0.117768595,0.033057851,0.026859504,0.053719008,0.150826446,0.004132231],[0.04338843,0.049586777,0.119834711,0.035123967,0.022727273,0.084710744,0.144628099,0.008264463]],
    'Camp 24': [[0.028340081,0.04048583,0.111336032,0.048582996,0.034412955,0.038461538,0.153846154,0.008097166],[0.034412955,0.046558704,0.113360324,0.032388664,0.04048583,0.085020243,0.178137652,0.006072874]],
    'Camp 25': [[0.039106145,0.048882682,0.101955307,0.040502793,0.029329609,0.051675978,0.150837989,0.008379888],[0.029329609,0.072625698,0.113128492,0.039106145,0.023743017,0.100558659,0.145251397,0.005586592]],
    'Camp 26': [[0.041358936,0.062038405,0.091580502,0.044313146,0.020679468,0.067946824,0.159527326,0.010339734],[0.032496307,0.059084195,0.107828656,0.038404727,0.029542097,0.067946824,0.163958641,0.00295421]],
    'Camp 27': [[0.038461538,0.04048583,0.089068826,0.030364372,0.028340081,0.074898785,0.147773279,0.01417004],[0.038461538,0.089068826,0.093117409,0.020242915,0.034412955,0.082995951,0.174089069,0.004048583]],
    'Camp 2E': [[0.052336449,0.071028037,0.117757009,0.039252336,0.024299065,0.029906542,0.14953271,0.007476636],[0.037383178,0.054205607,0.112149533,0.054205607,0.026168224,0.059813084,0.158878505,0.005607477]],
    'Camp 2W': [[0.0456942,0.066783831,0.124780316,0.04745167,0.0228471,0.066783831,0.14059754,0.008787346],[0.0456942,0.04745167,0.094903339,0.029876977,0.038664323,0.07029877,0.142355009,0.007029877]],
    'Camp 3': [[0.051546392,0.051546392,0.082474227,0.041237113,0.035051546,0.049484536,0.148453608,0.024742268],[0.04742268,0.04742268,0.094845361,0.04742268,0.037113402,0.070103093,0.167010309,0.004123711]],
    'Camp 4': [[0.040425532,0.072340426,0.121276596,0.036170213,0.036170213,0.042553191,0.174468085,0.010638298],[0.038297872,0.046808511,0.095744681,0.034042553,0.023404255,0.061702128,0.163829787,0.00212766]],
    'Camp 5': [[0.053533191,0.055674518,0.066381156,0.038543897,0.032119914,0.062098501,0.154175589,0.014989293],[0.059957173,0.059957173,0.085653105,0.03640257,0.029978587,0.100642398,0.147751606,0.002141328]],
    'Camp 6': [[0.058333333,0.058333333,0.091666667,0.029166667,0.029166667,0.0625,0.175,0.014583333],[0.045833333,0.054166667,0.0625,0.033333333,0.041666667,0.075,0.164583333,0.004166667]],
    'Camp 7': [[0.062124248,0.058116232,0.106212425,0.042084168,0.04008016,0.064128257,0.138276553,0.02004008],[0.042084168,0.054108216,0.076152305,0.02004008,0.046092184,0.068136273,0.152304609,0.01002004]],
    'Camp 8E': [[0.034246575,0.052511416,0.089041096,0.034246575,0.038812785,0.077625571,0.146118721,0.02283105],[0.052511416,0.043378995,0.079908676,0.050228311,0.043378995,0.073059361,0.152968037,0.00913242]],
    'Camp 8W': [[0.055555556,0.085470085,0.102564103,0.027777778,0.036324786,0.049145299,0.164529915,0.008547009],[0.038461538,0.055555556,0.068376068,0.025641026,0.036324786,0.096153846,0.145299145,0.004273504]],
    'Camp 9': [[0.048780488,0.054878049,0.109756098,0.028455285,0.034552846,0.067073171,0.152439024,0.018292683],[0.028455285,0.067073171,0.087398374,0.036585366,0.034552846,0.069105691,0.158536585,0.004065041]],
    'Nayapara RC': [[0.040590406,0.049815498,0.075645756,0.046125461,0.038745387,0.05904059,0.151291513,0.009225092],[0.049815498,0.029520295,0.092250923,0.046125461,0.04797048,0.101476015,0.156826568,0.005535055]],
  };

  var categories = [
    '0-2', '3-5', '6-11', '12-14',
    '15-17', '18-24', '25-64', '65+'
  ];

  $('#chartDemAll').highcharts({
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
    },
    title: {
      text: `<span style="font-size: 22px; font-family:'Helvetica';  color:#59585a; font-weight: bold; letter-spacing:0em;">All Camps</span><br><span style="font-size: 22px; font-family:'Helvetica'; color:#59585a; font-weight: normal; letter-spacing:0em;">Composition of surveyed households</span>`
    },
    subtitle: {
      text: `<span style="font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Helvetica';">by gender and age</span>`
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    xAxis: [{
      categories: categories,
      reversed: false,
      labels: {
        step: 1
      }
    }, { // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
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
        stacking: 'normal'
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
          Highcharts.numberFormat(Math.abs(this.point.y), 0) + '% of total population';
      }
    },
    series: [{
      name: 'Male',
      data: [
        -5, -6, -10, -4,
        -3, -6, -15, -1
      ]
    }, {
      name: 'Female',
      data: [
        5, 6, 9, 4, 3,
        8, 16, 1
      ]
    }]
  });

function make_dem_chart(male_data = [], female_data = [], camp_name) {
  chartDemCamp = $('#chartDemCamp').highcharts({
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
    },
    title: {
      text: `<span style="font-size: 22px; font-family:'Arial';  color:#0371c0; font-weight: bold"; letter-spacing:0em;>${camp_name}</span><br><span style="font-size: 22px; font-family:'Arial'; color:#666; font-weight: normal; letter-spacing:0em;">Composition of surveyed households</span>`
    },
    subtitle: {
      text: `<span style="font-size: 12px; color:#59585a; letter-spacing:0em; font-family:'Arial';">by gender and age</span>`
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    xAxis: [{
      categories: categories,
      reversed: false,
      labels: {
        step: 1
      }
    }, { // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
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
        stacking: 'normal'
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
          Highcharts.numberFormat(Math.abs(this.point.y), 0) + '% of total population';
      }
    },
    series: [{
      name: 'Male',
      data: male_data,
    }, {
      name: 'Female',
      data: female_data,
    }]
    });
  };

  $.getJSON('data/campsjoin.geojson', function(geojson) {
    Highcharts.mapChart('container', {
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
                      var camp_data = data_age_sex_camp[camp_name];
                      male_age_data = camp_data[0];
                      male_age_data = male_age_data.map(x => (x * -100));
                      female_age_data = camp_data[1];
                      female_age_data = female_age_data.map(x => (x * 100));
                      // console.log(male_age_data, female_age_data);

                      if (camp_name !== last_camp_name) {
                        make_dem_chart(male_age_data, female_age_data, camp_name);
                        $('#chartDemCamp').css('display', '');
                        last_camp_name = camp_name;
                      }
                      else {
                        $('#chartDemCamp').css('display', 'none');
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
                text: 'Female Head of Household<br><span style="font-size: 16px; color: #59585a; font-weight: normal; letter-spacing:0em;">% households reporting women as head of household</span>',
            style: {
                fontSize: '30px', color:'#59585a', fontFamily: 'Arial', align:'center',
            }},
            align: 'center',
            verticalAlign: 'bottom',
			x:330,
			y:-20,
			itemMarginTop: 10,
			symbolWidth: 250,
			floating:true,
        },

      colorAxis: {
        min: 20,
        max: 45,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },
      series: [{
		data: [{'code':'Camp 10',value:29, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:17, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:23, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:46, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:29, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:38, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:20, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:24, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:33, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:31, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:31, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:25, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:46, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:29, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:22, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:33, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:42, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:40, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:19, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:42, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:33, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:27, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:48, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:34, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:27, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:45, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:14, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:43, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:29, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:38, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:22, dataLabels: { x: -35, y: 25 }}
			],
            joinBy: ['New_Camp_N','code'],
            name: 'Camp',
			   borderColor: '#59585a',
            borderWidth: 0.6,
			nullColor:"#cecece",
			nullInteraction:false,
            states: {
                hover: {
                    borderWidth:3, borderColor:'#59585a', brightness:0.2
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; letter-spacing:0em;">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold; letter-spacing:0em;">{point.value}%</span><br>of households reported <b>female</b><br><b>as head of household</b><br><span style="font-size: 10px">(click for household composition)</span>'},

        },	
      ]
    });
  });

});
