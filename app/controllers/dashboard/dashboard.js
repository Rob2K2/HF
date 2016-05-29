var args = arguments[0] || {};

var controls = require('controls/controls'),
    configDB = Alloy.Globals.configDB,
    dbs = new configDB(),
    NavGroupModule = Alloy.Globals.NavGroupModule,
    navGroupModule = new NavGroupModule($.dashboard);

$.dashboard.title = 'Dashboard';

var loginClick = function(e) {
	Ti.API.info('e-> ' + JSON.stringify(e));
	if (e.index === 1) {
		var loginWindows = Alloy.createController('login/login').getView();
		loginWindows.open();
	}
};

var logout = function() {
	//alert('press logout');

	var param = {
		buttonNames : ['Cancel', 'Accept'],
		message : L('logoutLabelText'),
		callback : loginClick
	};

	controls.alertMsg(param);
};

var searchClick = function(e) {
	if (e.index === 1) {
		var searchWindows = Alloy.createController('search/search').getView();
		searchWindows.open();
	}
};

var search = function() {

	var param = {
		buttonNames : ['Cancel', 'Accept'],
		message : L('searchLabelText'),
		callback : searchClick
	};

	controls.alertMsg(param);
};

var openMap = function() {
	var arg = {
		containingWindow : navGroupModule
	};
	var mapWindow = Alloy.createController('map/map', arg).getView();
	navGroupModule.openWindow(mapWindow, true);
};

$.dashboard.addEventListener('open', function() {

    if (OS_ANDROID) {
        var activity = $.dashboard.getActivity();
        if (activity) {
            activity.onCreateOptionsMenu = function(e) {
                var optLogout,
                    optAdvanced,
                    optMap,
                    optAccount,
                    menu;
                menu = e.menu;
                menu.clear();
                optLogout = menu.add({
                    title : L('lblLogout'),
                    showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
                });
                optLogout.addEventListener('click', logout);
                optAdvanced = menu.add({
                    title : 'Advanced Search',
                    showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
                });
                optAdvanced.addEventListener('click', openCoverFlow);
                
                optMap = menu.add({
                    title: 'Map',
                    showAsAction: Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
                });
                optMap.addEventListener('click', openMap);
                
                optAccount = menu.add({
                    title: 'Account',
                    showAsAction: Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
                });
                //optAccount.addEventListener('click', openMap);
            };

        }

    }

});

var listOfAlbum = {
	"resultCount" : 3,
	"results" : [{
		"hotelId" : 89034,
		"name" : "HOTEL AMERICANA",
		"distance" : "2 km",
		"urlPhoto" : "http://is3.mzstatic.com/image/thumb/Music/v4/e5/71/5c/e5715c6d-a186-6787-a175-2b69c20202d7/source/100x100bb.jpg",
		"price" : "50"
	}, {
		"hotelId" : 89035,
		"name" : "HOTEL REGINA",
		"distance" : "3 km",
		"urlPhoto" : "http://is1.mzstatic.com/image/thumb/Music1/v4/51/2a/76/512a768b-23f6-326e-6532-60bc96aaaa68/source/100x100bb.jpg",
		"price" : "90"
	}, {
		"hotelId" : 89036,
		"name" : "HOTEL HILTON",
		"distance" : "1 km",
		"urlPhoto" : "http://is5.mzstatic.com/image/thumb/Music3/v4/f6/f9/63/f6f963a9-2227-e928-04a3-38f8aac0f937/source/100x100bb.jpg",
		"price" : "100"
	}]
};

var saveInfo = function(args) {
    Ti.API.info('=> saveInfo() ' + JSON.stringify(args));
    for (var a = 0; a < args.length; a++) {

        dbs.addHotel(args[a]);
    }
    //dbs.getListSongsFromDB();
    
};

var getListOfAlbums = function() {

	var getListOfAlbums = Ti.App.Properties.getString('urlSearch');
	getListOfAlbums = getListOfAlbums + 'term=mana&limit=6';
	Ti.API.info('-> Dentro de init/ getListOfAlbums url : ' + getListOfAlbums);
	function callbackFunctionOnSuccess(jsonData) {
		if ((jsonData != null || jsonData != undefined || jsonData.resultsCount > 0)) {
			Ti.API.info(' => ' + JSON.stringify(jsonData));
			Ti.API.info(' =>' + jsonData.resultCount);
			dbs.deleteData();
			saveInfo(jsonData.results);
			drawTableAlbums(jsonData);
			//var dataOffLine = dbs.getListSongsFromDB();
			//drawTableAlbums(dataOffLine[0]);

		} else {
			Titanium.UI.createAlertDialog({
				title : L('appTitle'),
				message : "Intenta otra busqueda",
				buttonNames : ['Ok']
			}).show();
		}
	};

	httpClientModule.callWithHttpClient(getListOfAlbums, callbackFunctionOnSuccess, 'GET', '');
};

var init = function() {
	dbs.deleteData();
	saveInfo(listOfAlbum.results);
	drawTableAlbums(listOfAlbum);
	//getListOfAlbums();

};

var drawTableAlbums = function(_data) {
	Ti.API.info(' loadTableAlbums() data: ' + JSON.stringify(_data));
	$.tableHotels.setData([]);

	var dataList = [];

	for (var i = 0; i < _data.results.length; i++) {
		var rowSong = _data.results[i];

		var params = {
			jsonData : rowSong
		};
		var row = Alloy.createController('dashboard/rowHotels', params).getView();
		dataList.push(row);
	}

	$.tableHotels.setData(dataList);
};

var openCoverFlow = function(e) {
    var arg = {};
    if (OS_IOS) {
        arg = {
            containingWin : navGroupModule
        };

    } 
    var dbWindow = Alloy.createController('detail/detail', arg).getView();
    navGroupModule.openWindow(dbWindow, true);
}; 

var doClickTable = function (){
    if (OS_IOS) {
        var arg = {
            containingWindow : navGroupModule
        };

        var detailWindow = Alloy.createController('detail/detail2', arg).getView();
        navGroupModule.openWindow(detailWindow);
    }
};

$.dashboard.addEventListener('android:back', function() {
    search();
});

init();

if (OS_IOS) {
	navGroupModule.open();
}