var args = arguments[0] || {};

var controls = require('controls/controls'),
    configDB = Alloy.Globals.configDB,
    dbs = new configDB();
$.fromDbDetail.title = 'Data of DB';

Ti.API.info('**************** detail DB.js *****************');
Ti.API.info('args: ' + JSON.stringify(args));

var drawTableAlbums = function(_data) {
	Ti.API.info(' loadTableAlbums() data: ' + JSON.stringify(_data));
	$.tableHotelsDb.setData([]);

	var dataList = [];

	for (var i = 0; i < _data.results.length; i++) {
		var rowSong = _data.results[i];

		var params = {
			jsonData : rowSong
		};
		var row = Alloy.createController('dashboard/rowHotels', params).getView();
		dataList.push(row);
	}

	$.tableHotelsDb.setData(dataList);
};

var init = function() {

	var dataOffLine = dbs.getListHotelsFromDB();
	drawTableAlbums(dataOffLine[0]);

};

init(); 