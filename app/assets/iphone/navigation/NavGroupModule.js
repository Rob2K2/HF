function NavGroupModule(callingWindow) {

    var me = {};

    var navGroup = Ti.UI.iOS.createNavigationWindow({
        window : callingWindow
    });

    me.open = function() {
        Ti.API.info('NAVGROUPMODULE - open() ');
        navGroup.open();
    };

    me.close = function() {
        navGroup.close();
    };
    me.openWindow = function(windowParam) {
        navGroup.openWindow(windowParam);
    };
    me.closeWindow = function(windowParam) {
        navGroup.closeWindow(windowParam);
    };

    return me;
};

module.exports = NavGroupModule;