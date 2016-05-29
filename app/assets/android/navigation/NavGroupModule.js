function NavGroupModule (callingWindow) {
    var me = {};
    var actionBarModule = require('com.alcoapps.actionbarextras');

    me.open = function() {
        callingWindow.addEventListener('open', function(e) {

            var activity = callingWindow.getActivity();
            if (activity) {
                activity.actionBar.hide();
            }
        });
        callingWindow.open();
    };
    
    me.close = function() {
       callingWindow.close(); 
    };
    
    me.openWindow = function(windowParam, valDisplay) {
        Ti.API.info('android  openWindow()');
        windowParam.addEventListener('open', function(e){
           actionBarModule.setDisableIcon(false);
           if (windowParam.title) {
             actionBarModule.setTitle({
                text: windowParam.title,
                color: Alloy.CFG.bgWhite, 
                font:  { fontFamily:'Helvetica Neue', fontSize: '16dp', fontWeight: 'bold' }
            });  
           } 
           
           actionBarModule.setTitleFont('Helvetica-Neue');
           actionBarModule.setBackgroundColor(Alloy.CFG.bgRed);
           var activity = windowParam.getActivity();
           if (activity){
               activity.actionBar.displayHomeAsUp = valDisplay;
               activity.actionBar.onHomeIconItemSelected = function() {
                 windowParam.close();  
               };
               
           }
       //windowParam.activity.invalidateOptionMenu();
               
           
        });
        windowParam.open();
    };
    me.closeWindow = function(windowParam) {
      windowParam.close();  
    };
    return me;
};

module.exports = NavGroupModule;

