var myChart = echarts.init(document.getElementById('main'));
$.get('data/file.json', function (bike) {
     myChart.hideLoading();

     var data = JSON.parse(bike);

     var convertData = function (data) {
     var res = [];
     var value = 0;
     var xspan = 0;
     var yspan = 0;
     var x = new Array();
     var y = new Array();
     var xmax = data[0].x;
     var xmin = data[0].x;
     var ymax = data[0].y;
     var ymin = data[0].y;
     for (var i = 0; i < data.length; i++) {
/*     x[0] = parseFloat(data[i].x);
     y[0] = parseFloat(data[i].y);
            res.push({
                name: data[i].name,
                value: x.concat(y)
            });*/
     if(data[i].x > xmax)
          xmax = data[i].x;
     if(data[i].x < xmin)
          xmin = data[i].x;
     if(data[i].y > ymax)
          ymax = data[i].y;
     if(data[i].y < ymin)
          ymin = data[i].y;
        }

     xspan = (xmax - xmin) / 300;
     yspan = (ymax - ymin) / 300;
     var value = new Array(90000).fill(0);
     for (var i = 0; i < data.length; i++){
          value[Math.floor(parseFloat(data[i].x - xmin) / xspan) + Math.floor(parseFloat(data[i].y - ymin) / yspan) * 300]++;
     }
     for (var y = 0; y < 300; y++){
               for(var x = 0; x < 300; x++){
                    var geoCoordx = [Number(xmin) + Number(x * xspan)];
                    var geoCoordy = [Number(ymin) + Number(y * yspan)];
                    res.push({
                         name:x + 300 * y,
                         value: geoCoordx.concat(geoCoordy).concat(value[x + 300 * y])
          })  
          }
          }
     /*console.log(Math.floor(parseFloat(data[22222].x - xmin) / xspan) + Math.floor(parseFloat(data[22222].y - ymin) / yspan) * 100)
     console.log(value[9021]);*/
     console.log(xspan,xmin);
    return res;
};
var option = {
        bmap: {
        center: [121.00,31.00],
        zoom: 12,
        roam: true,
        mapStyle: {
                       styleJson: [{
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
        "color": "#242f3eff"
    }
}, {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
        "color": "#242f3eff"
    }
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": {
        "color": "#17263cff"
    }
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#9e7d60ff"
    }
}, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#554631ff"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#d69563ff"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#17263cff",
        "weight": 3
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#d69563ff"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#17263cff",
        "weight": 3
    }
}, {
    "featureType": "subway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
        "color": "#263b3eff"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#d0021bff"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffffff"
    }
}, {
    "featureType": "city",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "city",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "city",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#d69563ff"
    }
}, {
    "featureType": "city",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#17263cff"
    }
}, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#d69563ff"
    }
}, {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#242f3eff"
    }
}, {
    "featureType": "local",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#38414eff"
    }
}, {
    "featureType": "local",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff0"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#38414eff"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#38414eff"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff0"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#759879ff"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#759879ff"
    }
}, {
    "featureType": "highway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#759879ff"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#9e7d60ff"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#554631ff"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#9e7d60ff"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#554631ff"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#1a2e1cff"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#1a2e1cff"
    }
}, {
    "featureType": "highway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#1a2e1cff"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#1a2e1cff"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#759879ff"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#9e7d60ff"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#554631ff"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#9e7d60ff"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#554631ff"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#9e7d60ff"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#554631fa"
    }
}, {
    "featureType": "medicallabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "medicallabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "entertainmentlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "entertainmentlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estatelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estatelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "businesstowerlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "businesstowerlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "companylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "companylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "governmentlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "governmentlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "restaurantlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "restaurantlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "hotellabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "hotellabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "shoppinglabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "shoppinglabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "lifeservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "lifeservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "carservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "carservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "financelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "financelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "otherlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "otherlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "airportlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "airportlabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#d69563ff"
    }
}, {
    "featureType": "airportlabel",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#17263cff"
    }
}, {
    "featureType": "airportlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}]
        }
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 1000,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
    series : 
        {
            name: 'pm2.5',
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: 5,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }
    };
myChart.setOption(option);})