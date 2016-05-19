$.mapWin.title = 'Map';
Ti.API.info('-> ' + "Opening map");
var MapModule = require('ti.map');

var ucb = MapModule.createAnnotation({
    latitude : -17.371470,
    longitude : -66.143911,
    centerOffset : {
        x : 80,
        y : 25
    },
    //image: 'common/price.png',
    title : 'UCB',
    subtitle : 'Regional Cbba',
    rigthButton : Ti.UI.iPhone.SystemButton.CONTACT_ADD
});

var bridge = MapModule.createAnnotation({
    latitude : -17.371570,
    longitude : -66.144111,
    pincolor : MapModule.ANNOTATION_PURPLE,
    title : 'UCB',
    subtitle : 'Regional Cochabamba',
    leftButton : Ti.UI.iPhone.SystemButton.INFO_DARK
});

var map1 = MapModule.createView({
    userLocation : true,
    mapType : MapModule.SATELLITE_TYPE,
    animate : true,
    region : {
        latitude : -17.371470,
        longitude : -66.143911,
        latitudeDelta : 0.01,
        longitudeDelta : 0.01
    },
    height : Ti.UI.FILL,
    top : 0,
    width : Ti.UI.FILL,
    annotations : [ucb, bridge]
});
/*
map1.addRoute({
    name: 'myroute',
    width: 4,
    color: '#f00',
    points: [
        {latitude:-17.371570, longitude:-66.143911},
        {latitude:-17.371470, longitude:-66.144111}
        
    ]
});
*/

$.mapWin.add(map1);
