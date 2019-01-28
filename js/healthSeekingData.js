Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});


$(function() {

$(".dropdown-trigger").dropdown();

"use strict";

  var categories_healthseeking = [
      'Traditional healers','Government clinics', 'Private clinics', 'Pharmacies or drug shops in market', 'NGO clinics'];

  $.getJSON('data/campsjoin.geojson', function(geojson) {

    Highcharts.mapChart('container_health2', {
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
          text: 'Health Seeking Behaviour<br></br><span style="font-size: 16px; color: #59585a; font-weight: normal; line-height: 1.6;">% of individuals reported to have had an illness serious enough</span><br><span style="font-size: 16px; color: #59585a; font-weight: normal; line-height: 1.6;">to require medical treatment in the 30 days prior to data collection,</span><br><span style="font-size: 16px; color: #59585a; font-weight: normal; line-height: 1.6;">for whom treatment was sought at an NGO-run clinic</span>',
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
        y: -45,
        itemMarginTop: 10,
        symbolWidth: 250,
        floating: true,
      },

      colorAxis: {
        min: 70,
        max: 90,
        minColor: '#ffffff',
        maxColor: '#0371c0'
      },

      series: [{
        data: [{'code':'Camp 10',value:90, dataLabels: { x: 4, y: 15 }},{'code':'Camp 11',value:86, dataLabels: { x: 0, y: -20 }},{'code':'Camp 12',value:77, dataLabels: { x: -8, y: -10 }},{'code':'Camp 13',value:86, dataLabels: { x: -2, y: -10 }},{'code':'Camp 14',value:85, dataLabels: { x: -2, y: 5 }},{'code':'Camp 15',value:94, dataLabels: { x: -14, y: 5 }},{'code':'Camp 16',value:89, dataLabels: { x: 14, y: 5 }},{'code':'Camp 17',value:76, dataLabels: { x: 1, y: -10 }},{'code':'Camp 18',value:85, dataLabels: { x: 1, y: 8 }},{'code':'Camp 19',value:85, dataLabels: { x: -11, y: -26 }},{'code':'Camp 1E',value:78, dataLabels: { x: -11, y: -2 }},{'code':'Camp 1W',value:78, dataLabels: { x: -1, y: 8 }},{'code':'Camp 20',value:94, dataLabels: { x: -4, y: 8 }},{'code':'Camp 21',value:91, dataLabels: { x: 35, y: -30 }},{'code':'Camp 22',value:88, dataLabels: { x: 5, y: -3 }},{'code':'Camp 23',value:65, dataLabels: { x: 5, y: -33 }},{'code':'Camp 24',value:78, dataLabels: { x: -5, y: -13 }},{'code':'Camp 25',value:81, dataLabels: { x: -5, y: 3 }},{'code':'Camp 26',value:75, dataLabels: { x: 25, y: 45 }},{'code':'Camp 27',value:74, dataLabels: { x: -30, y: -85 }},{'code':'Camp 2E',value:75, dataLabels: { x: -3, y: 27 }},{'code':'Camp 2W',value:70, dataLabels: { x: 8, y: -7 }},{'code':'Camp 3',value:89, dataLabels: { x: -8, y: 7 }},{'code':'Camp 4',value:84, dataLabels: { x: -8, y: 2 }},{'code':'Camp 5',value:69, dataLabels: { x: -2, y: -5 }},{'code':'Camp 6',value:81, dataLabels: { x: 6, y: 8 }},{'code':'Camp 7',value:77, dataLabels: { x: 6, y: 8 }},{'code':'Camp 8E',value:79, dataLabels: { x: 1, y: -1 }},{'code':'Camp 8W',value:79, dataLabels: { x: 6, y: -8 }},{'code':'Camp 9',value:87, dataLabels: { x: 6, y: 8 }},{'code':'Nayapara RC',value:71, dataLabels: { x: -35, y: 25 }}],
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
				pointFormat: '<span style="font-size: 16px; color: #59585a; font-weight: bold; float:center">{point.properties.New_Camp_N}: </span> <span style="font-size: 18px; color:#0371c0; font-weight: bold">{point.value}%</span><br> of individuals reported to have serious illness<br><b>sought treatment at NGO-run clinics</b><br>in the 30 days prior to assessment'},
				hideDelay: 1000

        }]
    });
  });

  $('#charthealthseeking').highcharts({
    chart: {

         type: 'bar', backgroundColor: 'transparent',
     },

     title: {
         text: 'Medical Treatment'
     },
   subtitle: {
         text: '% households reporting an individual with serious illness requiring medical attention, by treatment sought'
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
         categories: categories_healthseeking,
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
             return '<b>'+ Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%</b> of individuals reported to have had an illness serious enough<br>to require medical treatment in the 30 days prior to data collection,<br>sought treatment at ' +'<b>'+ this.point.category+ '</b>'
                 ;
         }
     },

     series: [{
         name: 'items',
         data: [
             4,5,5,31,82]
     }]
   });

});
