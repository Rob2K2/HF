exports.alertMsg = function(args) {
    Ti.API.info('-> ' + JSON.stringify( args));
    args = args || {};
    if (args.buttonNames) {
        if (args.buttonNames.length == 1) {
            args.ok = args.buttonNames[0];
        }else{
            args.no =  args.buttonNames[0];
            args.yes = args.buttonNames[1];
        }
        var alertDialog = Ti.UI.createAlertDialog({
            title : L('appTitle'),
            message : args.message,
            buttonNames : (args.buttonNames.length ===1) ? [args.ok] : [args.no, args.yes],
            cancel : 0
        });
        
        alertDialog.addEventListener('click', function(evt){
            
            if (args.callback) {
                args.callback(evt || {});
            }
            args = null;
        });
        alertDialog.show();
    }
   /* 
    var alertDialog = Ti.UI.createAlertDialog({
        title : L('appTitle'),
        message : 'Hello alert!!!',
        buttonNames : ['No', 'Yes'],
        cancel : 0
    });
    alertDialog.show();
    */
};
