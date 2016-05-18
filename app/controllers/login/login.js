var args = arguments[0] || {};

var NavGroupModule = Alloy.Globals.NavGroupModule;
var navGroupModule = new NavGroupModule($.login);

function doClick(e) {
    
    //Ti.API.info($.username.value + ' - ' + $.password.value);
    var arg = {
        containingWindow: navGroupModule    
    };
    var dashboardWindow = Alloy.createController('dashboard/dashboard', arg).getView();
    navGroupModule.openWindow(dashboardWindow, true);
    
}

var initialize = function(){
    
   // $.username.value = Alloy.CFG.user;
    //$.password.value = Alloy.CFG.pass;    
};

var init = function() {
   initialize();

};
init();
navGroupModule.open();
//$.login.open();
