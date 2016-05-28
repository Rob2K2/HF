function HttpClientModule() {

	this.callWithHttpClient = function(endpointUrl, callbackFunctionOnSuccess, httpVerb, callParameters) {

		Ti.API.info('****************** INSIDE CallWithHttpclient ************************');

		var serviceResponse = null,
		    timeoutInMilliseconds = 120000,
		    hasSSLText = true,
		    accessTokenText = 'accessToken',
		    authorizationText = 'Authorization',
		    bearerText = 'Bearer ',
		    contentTypeKey = 'Content-Type',
		    contentTypeValue = 'application/x-www-form-urlencoded',
		    emptyText = '',
		    accessToken = '';

		Ti.API.info('-> Dentro de HttpClientModule url : ' + endpointUrl);
		try {
			var httpClient = Ti.Network.createHTTPClient({
				onload : function() {
					try {
						Ti.API.info('OnLoad');
						serviceResponse = JSON.parse(this.responseText);
						Ti.API.info('this.responseText:' + this.responseText);

					} catch(err) {
						showError(err);
					}
					if (serviceResponse !== null || serviceResponse !== undefined) {
						callbackFunctionOnSuccess(serviceResponse);
					}
					Ti.API.info('Success : ' + this.status + ', ' + this.statusText + ', ' + this.readyState);
				},
				onerror : function(err) {
					showError(err);
					Ti.API.info('On Error: ' + this.status + ', ' + this.statusText + ', ' + this.readyState);
				},
				timeout : timeoutInMilliseconds
			});
			httpClient.open(httpVerb, endpointUrl);
			httpClient.setRequestHeader(authorizationText, bearerText + accessToken);
			httpClient.send(callParameters);

		} catch (err) {
			Ti.API.info('On Error: ' + err);
			showError(err);
		}

		function showError(err) {

			var timeoutText = 'timed out',
			    socketTimeoutExceptionText = 'sockettimeoutexception',
			    unableToResolveHostText = 'unable to resolve host',
			    hasNetwork = Ti.Network.online;

			var errorMsg = err.error ? err.error.toLowerCase() : emptyText;
			var isTimeout = (errorMsg.indexOf(timeoutText) >= 0 || errorMsg.indexOf(socketTimeoutExceptionText) >= 0 || errorMsg.indexOf(unableToResolveHostText) >= 0
			);
			showMessage(isTimeout);
		};

		function showMessage(isTimeout) {
			Titanium.UI.createAlertDialog({
				title : L('appTitle'),
				message : isTimeout ? "networkConnectionTimeoutErrorMsg" : "networkConnectionUnhandledErrorMsg",
				buttonNames : ['Ok']
			}).show();
		}

	};

};

module.exports = HttpClientModule;
