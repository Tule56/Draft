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

"use strict";

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
          text: 'Lack of Work<br><span style="font-size: 16px; color: #59585a; font-weight: normal;">% households reporting no members working<br><span style="font-size: 16px; color: #59585a; font-weight: normal">in the 30 days prior to data collection</span>',
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
        min: 40,
        max: 80,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: [{'code':'Camp 10',value:76, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:57, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:75, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:58, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:54, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:47, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:52, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:54, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:58, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:69, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:69, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:77, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:68, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:39, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:48, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:34, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:41, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:49, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:60, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:47, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:40, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:62, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:66, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:52, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:69, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:72, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:76, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:66, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:65, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:70, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:39, dataLabels: { x: -35, y: 25 }},{'code':'Kutupalong RC',value:null, dataLabels: { x: 0, y: 0 }}],
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
      text: '% households reporting income from different sources in the 30 days prior to data collection'
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
        return '<b>' + this.x + '</b>: ' +Highcharts.numberFormat(Math.abs(this.point.y), 0)+  ' % of households reporting income<br>in the 30 days prior to data collection';
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
