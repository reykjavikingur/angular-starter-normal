angular.module('app').factory('appStore', function (appDispatcher, storeFactory, appAction) {

	var appStore = storeFactory();

	appDispatcher.on(appAction.NOTIFY, function (message) {
		appStore.commit('message', message);
	});

	appDispatcher.on(appAction.DISMISS, function () {
		appStore.commit('message', null);
	});

	return appStore;

});