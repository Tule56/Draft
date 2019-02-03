Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#9fc9e7']
});

$.ajax({
    dataType: "json",
    url: "json.json",
    mimeType: "application/json",
    success: function(result){
        $.each(result, function(i, obj) {
            $("form").append($('<label for="'+i+'">'+obj.title+'</label>'));
            $("form").append($('<input id="'+i+'" value="'+obj.value+'" type="text"/><br>'));
        });
    }
});

$(function() {

$(".dropdown-trigger").dropdown();


  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_comms', {
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
          text: 'Feedback Mechanisms<br></br><br></br><span style="font-size: 16px; color: #666; font-weight: normal">% households reporting awareness of any way to provide<br></span><span style="font-size: 16px; color: #666; font-weight: normal">feedback or complaints about the assistance they have received</span>',
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
        min: 30,
        max: 70,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
       data: [{'code':'Camp 10',value:60, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:64, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:53, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:71, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:47, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:70, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:39, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:34, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:28, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:71, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:51, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:46, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:60, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:58, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:59, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:46, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:51, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:32, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:52, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:57, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:53, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:63, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:71, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:48, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:48, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:67, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:53, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:51, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:34, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:55, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:55, dataLabels: { x: -35, y: 25 }}],
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold;">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br>of households reported awareness<br>of <b>feedback mechanisms</b>'},
				hideDelay: 1000
        }]
    });

  });

  $('#chartcomms').highcharts({
    chart: {

      type: 'pie',
    },

    title: {
      text: '% households reporting awareness of methods of finding information'
    },

    subtitle: {
      text: 'by number of information sources'
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
        return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
      }
    },

    series: [{
      name: '',
      data: [
        ["1 source", 32],
        ["2 sources", 41],
        ["3 sources", 18],
        ["4 sources", 6],
        ["5 sources", 2],
        ["6 sources", 1]
      ],
      size: '60%',
      innerSize: '20%',
      showInLegend: false,
      dataLabels: {
        enabled: true
      }
    }]
  });

  $('#chartcomms3').highcharts({
		chart: {

        type: 'pie', backgroundColor: 'transparent',
    },

    title: {
        text: 'Feedback Response'
    },

	subtitle: {
        text: '% households that reported using feedback mechanisms who reported receiving a response to their feedback'
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
                data: [["Yes",84],["No",16]],
                size: '90%',
                innerSize: '30%',
                showInLegend:false,
                dataLabels: {
                    enabled: true
                }
            }]
	});

});
