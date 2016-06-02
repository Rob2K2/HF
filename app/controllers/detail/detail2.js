var args = arguments[0] || {};

var controls = require('controls/controls');

$.detail2.title = args.rowData.jsonData.name;

Ti.API.info('**************** detail2222.js *****************');
Ti.API.info('=>args: ' + JSON.stringify(args));
Ti.API.info('=>args.rowData.jsonData.name: ' + JSON.stringify(args.rowData.jsonData.name));

var image = args.rowData.jsonData.urlImage,
    name = args.rowData.jsonData.name,
    distance = args.rowData.jsonData.distance,
    web = args.rowData.jsonData.web,
    phone = args.rowData.jsonData.phone,
    address = args.rowData.jsonData.address,
    summary = args.rowData.jsonData.summary,
    rooms = args.rowData.jsonData.rooms,
    singleR = args.rowData.jsonData.single,
    doubleR = args.rowData.jsonData.doble,
    tripleR = args.rowData.jsonData.triple,
    familiarR = args.rowData.jsonData.familiar,
    matrimonialR = args.rowData.jsonData.matrimonial,
    city = args.rowData.jsonData.city;

$.imgHotel.image = image;
$.imgHotel2.image = image;
$.lblName.text = name;
$.lblWeb.text = web;
$.lblPhone.text = phone;
$.lblAddress.text = address;
$.lblSummary.text = summary;
$.lblRooms.text = rooms;
$.lblSingleR.text = singleR;
$.lblDoubleR.text = doubleR;
$.lblTripleR.text = tripleR;
$.lblFamiliarR.text = familiarR;
$.lblMatrimonialR.text = matrimonialR;
$.lblCity.text = city;

var init = function() {

};

init();

