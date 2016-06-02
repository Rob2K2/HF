var args = arguments[0] || {};

Ti.API.info('**************** rowHotels.js *****************');
Ti.API.info('args: ' + JSON.stringify(args));
//Ti.API.info('=>name: ' + JSON.stringify(args.rowData));

var NavGroupModule = Alloy.Globals.NavGroupModule,
    navGroupModule = new NavGroupModule($.rowHotel);

var image = args.jsonData.urlThumb,
    name = args.jsonData.name,
    distance = args.jsonData.distance,
    price = args.jsonData.single;

$.imgAlbum.image = image;
$.lblName.text = name;
$.lblDistance.text = distance;
$.lblPrice.text = price;

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
