var args = arguments[0] || {};

var NavGroupModule = Alloy.Globals.NavGroupModule,
    navGroupModule = new NavGroupModule($.search),
    controls = require('controls/controls');

$.search.title = 'Search';

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

function doClick(e) {

	//Ti.API.info($.username.value + ' - ' + $.password.value);
	var arg = {
		containingWindow : navGroupModule
	};
	var dashboardWindow = Alloy.createController('dashboard/dashboard', arg).getView();
	navGroupModule.openWindow(dashboardWindow, false);
}

var initialize = function() {

	// $.username.value = Alloy.CFG.user;
	//$.password.value = Alloy.CFG.pass;
};

var init = function() {
	initialize();

};

init();

//if (OS_IOS) {
navGroupModule.open();
//}