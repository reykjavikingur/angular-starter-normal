angular.module('app').controller('mainAppController', function ($scope, appStore, appDispatcher, appAction) {

	var unwatchMessage = appStore.watch('message', function(message) {
		$scope.$evalAsync(function(){
			$scope.message = message;
		})
	})

	$scope.$on('$destroy', function () {
		unwatchMessage();
	});

	$scope.notify = function notify() {
		appDispatcher.emit(appAction.NOTIFY, 'hey');
	};

	$scope.dismiss = function dismiss() {
		appDispatcher.emit(appAction.DISMISS);
	};

});