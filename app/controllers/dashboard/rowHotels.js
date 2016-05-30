var args = arguments[0] || {};

Ti.API.info('**************** rowHotels.js *****************');
Ti.API.info('args: ' + JSON.stringify(args));
//Ti.API.info('=>name: ' + JSON.stringify(args.rowData));

var NavGroupModule = Alloy.Globals.NavGroupModule,
    navGroupModule = new NavGroupModule($.rowHotel);

var image = args.jsonData.urlThumb,
    lblName = args.jsonData.name,
    lblDistance = args.jsonData.distance,
    lblPrice = args.jsonData.tarifas.simple;
//lblCurrency = args.jsonData.currency;

$.imgAlbum.image = image;
$.lblName.text = lblName;
$.lblDistance.text = lblDistance;
$.lblPrice.text = lblPrice;
$.lblCurrency.text = "Bs";

var doClickRow = function(e) {
	if (OS_IOS) {
        
    } else {
        var arg = {
            rowData : args
        };

        var detailWindow = Alloy.createController('detail/detail2', arg).getView();
        navGroupModule.openWindow(detailWindow, true);
    }
};
