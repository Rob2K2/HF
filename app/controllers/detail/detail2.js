var args = arguments[0] || {};

var controls = require('controls/controls');

$.detail2.title = args.rowData.jsonData.name;

Ti.API.info('**************** detail2222.js *****************');
Ti.API.info('=>args: ' + JSON.stringify(args));
Ti.API.info('=>args.rowData.jsonData.name: ' + JSON.stringify(args.rowData.jsonData.name));

var image = args.rowData.jsonData.urlPhoto,
    lblName = args.rowData.jsonData.name,
    lblDistance = args.rowData.jsonData.distance,
    lblPrice = args.rowData.jsonData.price;

$.imgHotel.image = image;
$.imgHotel2.image = image;
//$.imgHotel3.image = image;
$.lblName.text = lblName;
//$.lblDistance.text = lblDistance;
$.lblPrice.text = lblPrice;

var init = function() {

};

init();

