var args = arguments[0] || {};

var NavGroupModule = Alloy.Globals.NavGroupModule;
var navGroupModule = new NavGroupModule($.login);

function doClick(e) {

	//Ti.API.info($.username.value + ' - ' + $.password.value);
	var arg = {
		containingWindow : navGroupModule
	};
	var searchWindow = Alloy.createController('search/search', arg).getView();
	navGroupModule.openWindow(searchWindow, false);

}

var initialize = function() {

	// $.username.value = Alloy.CFG.user;
	//$.password.value = Alloy.CFG.pass;
};

var init = function() {
	initialize();

};

$.login.addEventListener('android:back', function() {

	var activity = Titanium.Android.currentActivity;
	activity.finish();
});

init();
navGroupModule.open();
//$.login.open();
