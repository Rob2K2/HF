var args = arguments[0] || {};

var controls = require('controls/controls');

$.detail2.title = args.rowData.jsonData.name;

Ti.API.info('**************** detail2222.js *****************');
Ti.API.info('=>args: ' + JSON.stringify(args));
Ti.API.info('=>args.rowData.jsonData.name: ' + JSON.stringify(args.rowData.jsonData.name));

var image = args.rowData.jsonData.urlImage,
    lblName = args.rowData.jsonData.name,
    lblDistance = args.rowData.jsonData.distance,
    lblWeb = args.rowData.jsonData.web,
    lblTelefono = args.rowData.jsonData.telefono,
    lblDireccion = args.rowData.jsonData.direccion,
    lblResenia = args.rowData.jsonData.resenia,
    lblHabitaciones = args.rowData.jsonData.habitaciones,
    lblHSimple = args.rowData.jsonData.tarifas.simple,
    lblHDoble = args.rowData.jsonData.tarifas.doble,
    lblHTriple = args.rowData.jsonData.tarifas.triple,
    lblHFamiliar = args.rowData.jsonData.tarifas.familiar,
    lblHMatrimonial = args.rowData.jsonData.tarifas.matrimonial;

$.imgHotel.image = image;
$.imgHotel2.image = image;
$.lblName.text = lblName;
$.lblWeb.text = lblWeb;
$.lblTelefono.text = lblTelefono;
$.lblDireccion.text = lblDireccion;
$.lblResenia.text = lblResenia;
$.lblHabitaciones.text = lblHabitaciones;
$.lblHSimple.text = lblHSimple;
$.lblHDoble.text = lblHDoble;
$.lblHTriple.text = lblHTriple;
$.lblHFamiliar.text = lblHFamiliar;
$.lblHMatrimonial.text = lblHMatrimonial;

var init = function() {

};

init();

