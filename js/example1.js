var myChart = echarts.init(document.getElementById('main'));
$.get('data/file1.json', function (bike1){
$.get('data/file.json', function (bike) {
     myChart.hideLoading();

     var data = JSON.parse(bike);
     var data1 = JSON.parse(bike1);
     var fromMap = new Object();
     var toMap = new Object();
     var convertData = function (data) {
     var res = [];
     var x = new Array();
     var y = new Array();
     for(var i = 0; i <data.length; i++){
        x[0] = parseFloat(data[i].x);
        y[0] = parseFloat(data[i].y);
        fromMap[data[i].name] = x.concat(y);
     }
     for(var i = 0; i <data1.length; i++){
        x[0] = parseFloat(data1[i].x);
        y[0] = parseFloat(data1[i].y);
        toMap[data1[i].name] = x.concat(y);
     }
     for (var i = 0; i <data1.length; i++) {
        var fromCoord = fromMap[data1[i].name];
        var toCoord = toMap[data1[i].name];
        if(fromCoord&&toCoord){
            res.push({
                fromName: 1,
                toName: 2,
                coords: [fromCoord,toCoord]
            });}
        }
    return res;
};
var option = {
        bmap: {
        center: [121.50,31.20],
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
    series : 
        {
        name: ' Top10',
        type: 'lines',
        zlevel: 2,
        coordinateSystem: 'bmap',
        symbol: ['circle', 'circle'],
        symbolSize: 10,
        /*effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'circle',
            symbolSize: 15
        },*/
        lineStyle: {
            normal: {
                color: 'red',
                width: 1,
                opacity: 0.6,
                curveness: 0,
            }
        },
        data: convertData(data)
    }
    };
myChart.setOption(option);})
});