angular.module('app').controller('mainAppController', function ($scope, appStore, appDispatcher, appAction) {

	_receiveMessage(appStore.getMessage());

	appStore.on(appStore.MESSAGE_CHANGED, _receiveMessage);

	$scope.$on('$destroy', function () {
		appStore.on(appStore.MESSAGE_CHANGED, _receiveMessage);
	});

	$scope.notify = function notify() {
		appDispatcher.emit(appAction.NOTIFY, 'hey');
	};

	$scope.dismiss = function dismiss() {
		appDispatcher.emit(appAction.DISMISS);
	};

	function _receiveMessage(message) {
		$scope.$evalAsync(function () {
			$scope.message = message;
		});
	}

});