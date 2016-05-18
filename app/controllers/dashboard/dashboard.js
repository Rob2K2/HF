var args = arguments[0] || {};

var controls = require('controls/controls'),
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


var init = function() {
	//loadTableAlbums(listOfAlbum);
	//getListOfAlbums();

};
init();

if (OS_IOS) {
	navGroupModule.open();
}