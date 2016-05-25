var args = arguments[0] || {};

Ti.API.info('**************** rowHotels.js *****************');
Ti.API.info('args: ' + JSON.stringify(args));

var NavGroupModule = Alloy.Globals.NavGroupModule,
    navGroupModule = new NavGroupModule($.rowHotel);

var image = args.jsonData.urlPhoto,
    lblName = args.jsonData.name,
    lblDistance = args.jsonData.distance,
    lblPrice = args.jsonData.price;
//lblCurrency = args.jsonData.currency;

$.imgAlbum.image = image;
$.lblName.text = lblName;
$.lblDistance.text = lblDistance;
$.lblPrice.text = lblPrice;
$.lblCurrency.text = "$us";

var doClickRow = function(e) {
	var arg = {};
	if (OS_IOS) {
		Ti.API.info('**************** click en la row y estamos en IOS rowHotel.js *****************');
		arg = {
			containingWin : navGroupModule
		};
	} else {
		arg = {
			rowData : args
		};

		var detailWindow = Alloy.createController('dashboard/detail', arg).getView();
		navGroupModule.openWindow(detailWindow, false);
	}
}; 