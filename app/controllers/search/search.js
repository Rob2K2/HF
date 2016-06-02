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
	
	var param = {
		buttonNames : ['Cancel', 'Accept'],
		message : L('logoutLabelText'),
		callback : loginClick
	};

	controls.alertMsg(param);
};

$.search.addEventListener('open', function() {

    if (OS_ANDROID) {
        var activity = $.search.getActivity();
        if (activity) {
            activity.onCreateOptionsMenu = function(e) {
                var optLogout,                   
                    menu;
                menu = e.menu;
                menu.clear();
                optLogout = menu.add({
                    title : L('lblLogout'),
                    showAsAction : Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
                });
                optLogout.addEventListener('click', logout);
            };
        }
    }
});

function doClick(e) {

	var arg = {
		containingWindow : navGroupModule,
		param: $.txtSearch.value,
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

$.search.addEventListener('android:back', function() {
    logout();
});

init();

if (OS_IOS) {
navGroupModule.open();
}