// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


// added during app creation. this will automatically login to
// ACS for your application and then fire an event (see below)
// when connected or errored. if you do not use ACS in your
// application as a client, you should remove this block
Alloy.Globals.NavGroupModule = require('navigation/NavGroupModule');

if (OS_IOS) {
    Alloy.Globals.width = Ti.Platform.displayCaps.platformWidth;
    Alloy.Globals.height = Ti.Platform.displayCaps.platformHeight;

} else {
    Alloy.Globals.width = Ti.Platform.displayCaps.platformWidth /Ti.Platform.displayCaps.logicalDensityFactor;
    Alloy.Globals.height = Ti.Platform.displayCaps.platformHeight /Ti.Platform.displayCaps.logicalDensityFactor;
}
Alloy.Globals.loginTop = Alloy.Globals.height * 0.30;

Ti.API.info(' => localDensityFactor: ' + Ti.Platform.displayCaps.logicalDensityFactor);
Ti.API.info(' => w: ' + Ti.Platform.displayCaps.platformWidth + ', h: ' + Ti.Platform.displayCaps.platformHeight);
