var args = arguments[0] || {};

var controls = require('controls/controls'),
    //configDB = Alloy.Globals.configDB,
    //dbs = new configDB(),
    NavGroupModule = Alloy.Globals.NavGroupModule,
    navGroupModule = new NavGroupModule($.dashboard),
    HttpClientModule = Alloy.Globals.HttpClientModule,
    httpClientModule = new HttpClientModule();

Ti.API.info('args: ' + JSON.stringify(args));

if (args.param != "") {
	$.dashboard.title = args.param;
} else {
	$.dashboard.title = "Global search";
}

var loginClick = function(e) {

	Ti.API.info('e-> ' + JSON.stringify(e));
	if (e.index === 1) {
		var loginWindows = Alloy.createController('login/login').getView();
		loginWindows.open();
	}
};

var logout = function() {

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
				    optNewSearch,
				    menu;
				menu = e.menu;
				menu.clear();

				optSearch = menu.add({
					title : 'New search',
					showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
				});
				optSearch.addEventListener('click', search);

				optAdvanced = menu.add({
					title : 'Advanced Search',
					showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
				});
				//optAdvanced.addEventListener('click', openCoverFlow);

				optMap = menu.add({
					title : 'Map',
					showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
				});
				optMap.addEventListener('click', openMap);

				optAccount = menu.add({
					title : 'Account',
					showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
				});
				//optAccount.addEventListener('click', openMap);

				optLogout = menu.add({
					title : L('lblLogout'),
					showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
				});
				optLogout.addEventListener('click', logout);
			};
		}
	}
});

var listOfAlbum = {
	"resultCount" : 3,
	"results" : [{
		"hotelId" : 1,
		"name" : "HOTEL AMERICANA",
		"distance" : "2 km",
		"urlThumb" : "http://www.macaws.net/hf/images/americanaThumb.jpg",
		"urlImage" : "http://www.macaws.net/hf/images/americana.jpg",
		"web" : "www.hotelamericana.com.bo",
		"phone" : "(591)-44239247",
		"address" : "Av. Aroma #450",
		"summary" : "AMERICANA HOTEL se encuentra ubicado en el centro de la ciudad de Cochabamba, a pocas cuadras del Centro Comercial y Financiero de la ciudad. Brinda un servicios de calidad a sus huéspedes y ofrece un ambiente cómodo,elegante y cordial.",
		"rooms" : "El hotel le ofrece 54 habitaciones confortables.• Simples• Matrimoniales• Suites Ejecutivas• Suites Matrimoniales• Familiares• Triples• DoblesTodas equipadas con: Frigobar, Televisión por cable, discado directo nacional e internacional, para otorgarle una estadía placentera.",
		"prices" : {
			"single" : "80",
			"doble" : "90",
			"triple" : "100",
			"familiar" : "150",
			"matrimonial" : "200"
		}
	}, {
		"hotelId" : 2,
		"name" : "HOTEL REGINA",
		"distance" : "3 km",
		"urlThumb" : "http://www.macaws.net/hf/images/reginaThumb.jpg",
		"urlImage" : "http://www.macaws.net/hf/images/regina.jpg",
		"web" : "www.hotelregina.bo",
		"phone" : "(591)-46549247",
		"address" : "Av. Ecologica #4350",
		"summary" : "Hotel regina se encuentra en el pleno centro de la ciudad siendo el mejor punto de partida para iniciar sus actividades turísticas, vacacionales o laborales.",
		"rooms" : "Nuestras habitaciones cuentan con WIFI gratuito. Además ponemos a su disposición: Cambio de moneda, Caja de Seguridad, Servicio a la Habitación, Servicio de Lavandería, Servicio de Fax, Telefonía Nacional e Internacional, Canchas de Soccer, Servicio de Restaurant y Snack.",
		"prices" : {
			"single" : "100",
			"doble" : "110",
			"triple" : "150",
			"familiar" : "250",
			"matrimonial" : "400"
		}
	}, {
		"hotelId" : 3,
		"name" : "HOTEL CESAR'S PLAZA",
		"distance" : "3 km",
		"urlThumb" : "http://www.macaws.net/hf/images/cesarsplazaThumb.jpg",
		"urlImage" : "http://www.macaws.net/hf/images/cesarsplaza.jpg",
		"web" : "www.cesarsplaza.com.bo",
		"phone" : "+591(4)4673276",
		"address" : "C. 25 de mayo #210",
		"summary" : "Hotel regina se encuentra en el pleno centro de la ciudad siendo el mejor punto de partida para iniciar sus actividades turísticas, vacacionales o laborales.",
		"rooms" : "Nuestras habitaciones cuentan con WIFI gratuito. Además ponemos a su disposición: Cambio de moneda, Caja de Seguridad, Servicio a la Habitación, Servicio de Lavandería, Servicio de Fax, Telefonía Nacional e Internacional, Canchas de Soccer, Servicio de Restaurant y Snack.",
		"prices" : {
			"single" : "110",
			"doble" : "130",
			"triple" : "150",
			"familiar" : "280",
			"matrimonial" : "420"
		}
	}, {
		"hotelId" : 4,
		"name" : "HOTEL ARANJUEZ",
		"distance" : "5 km",
		"urlThumb" : "http://www.macaws.net/hf/images/aranjuezThumb.jpg",
		"urlImage" : "http://www.macaws.net/hf/images/aranjuez.jpg",
		"web" : "www.hotelaranjuez.bo",
		"phone" : "+591(4)4280076",
		"address" : "C. Buenos Aires #563",
		"summary" : "Hotel regina se encuentra en el pleno centro de la ciudad siendo el mejor punto de partida para iniciar sus actividades turísticas, vacacionales o laborales.",
		"rooms" : "Nuestras habitaciones cuentan con WIFI gratuito. Además ponemos a su disposición: Cambio de moneda, Caja de Seguridad, Servicio a la Habitación, Servicio de Lavandería, Servicio de Fax, Telefonía Nacional e Internacional, Canchas de Soccer, Servicio de Restaurant y Snack.",
		"prices" : {
			"single" : "100",
			"doble" : "110",
			"triple" : "150",
			"familiar" : "250",
			"matrimonial" : "400"
		}
	}, {
		"hotelId" : 5,
		"name" : "HOTEL PORTALES",
		"distance" : "3,5 km",
		"urlThumb" : "http://www.macaws.net/hf/images/portalesThumb.jpg",
		"urlImage" : "http://www.macaws.net/hf/images/portales.jpg",
		"web" : "www.hotelportales.com.bo",
		"phone" : "+591(4)4285444",
		"address" : "Av. Pando #1271",
		"summary" : "Hotel regina se encuentra en el pleno centro de la ciudad siendo el mejor punto de partida para iniciar sus actividades turísticas, vacacionales o laborales.",
		"rooms" : "Nuestras habitaciones cuentan con WIFI gratuito. Además ponemos a su disposición: Cambio de moneda, Caja de Seguridad, Servicio a la Habitación, Servicio de Lavandería, Servicio de Fax, Telefonía Nacional e Internacional, Canchas de Soccer, Servicio de Restaurant y Snack.",
		"prices" : {
			"single" : "115",
			"doble" : "125",
			"triple" : "175",
			"familiar" : "270",
			"matrimonial" : "430"
		}
	}, {
		"hotelId" : 6,
		"name" : "HOTEL DIPLOMAT",
		"distance" : "1 km",
		"urlThumb" : "http://www.macaws.net/hf/images/diplomatThumb.jpg",
		"urlImage" : "http://www.macaws.net/hf/images/diplomat.jpg",
		"web" : "www.hoteldiplomat.com",
		"phone" : "(591)-44235550",
		"address" : "Av. Ballivian #3450",
		"summary" : "Estamos ubicados en el prestigioso y elegante paseo “El Prado”, corazón de la ciudad de Cochabamba a sólo 10 minutos del Aeropuerto Internacional Jorge Wilstermann. Nuestra ubicación privilegiada, en la zona comercial y de negocios de Cochabamba, le brindará proximidad a entidades bancarias, empresas comerciales, oficinas civiles administrativas y variedad de restaurantes de comida nacional e internacional. En Hotel Diplomat, le esperamos para darle la bienvenida y brindarle un servicio de calidad durante su estadía en la ciudad de Cochabamba, ciudad tranquila y a la vez llena de vida exuberante, con un clima acogedor, calidez y su amplia y variada cocina, misma que le ha hecho merecedora del reconocimiento como capital gastronómica de Bolivia.",
		"rooms" : "Pensando en su comodidad y tranquilidad, Hotel Diplomat le ofrece habitaciones amplias y confortables con una vista privilegiada al paseo “El Prado” y sus alrededores. De acuerdo a su elección, usted podrá descansar en una de las habitaciones distribuidas en categorías Simple, Doble, Matrimonial y Suite Jr. Nuestras habitaciones están especialmente diseñadas para que usted se sienta en un ambiente de confort y calidez. Adicionalmente, contamos con equipamiento y servicios para garantizar que su estadía con nosotros sea placentera.",
		"prices" : {
			"single" : "180",
			"doble" : "190",
			"triple" : "200",
			"familiar" : "250",
			"matrimonial" : "500"
		}
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

	if (args.param != "") {
		getListOfAlbums = getListOfAlbums + "?city=" + args.param;
	} else {
		getListOfAlbums = getListOfAlbums;
	}
	Ti.API.info('-> Dentro de init/ getListOfAlbums url : ' + getListOfAlbums);

	function callbackFunctionOnSuccess(jsonData) {
		if ((jsonData != null || jsonData != undefined || jsonData.resultsCount > 0)) {
			drawTableAlbums(jsonData);
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

	getListOfAlbums();
};

var drawTableAlbums = function(_data) {
	Ti.API.info(' loadTableAlbums() data: ' + JSON.stringify(_data));
	Ti.API.info(' data.lenght: ' + JSON.stringify(_data.length));

	$.tableHotels.setData([]);

	var dataList = [];

	for (var i = 0; i < _data.length; i++) {
		var rowSong = _data[i];

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

var doClickTable = function() {

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