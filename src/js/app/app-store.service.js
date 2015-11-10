angular.module('app').factory('appStore', function (appDispatcher, appAction, EventEmitter) {

	var _message;

	var appStore = EventEmitter({

		MESSAGE_CHANGED: 'messageChanged',

		getMessage: function getMessage() {
			return _message;
		}

	});

	appDispatcher.on(appAction.NOTIFY, function (message) {
		_message = message;
		appStore.emit(appStore.MESSAGE_CHANGED, _message);
	});

	appDispatcher.on(appAction.DISMISS, function () {
		_message = null;
		appStore.emit(appStore.MESSAGE_CHANGED, _message);
	});

	return appStore;

});