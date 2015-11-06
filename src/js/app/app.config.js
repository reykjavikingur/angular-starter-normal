angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('default', {
			url: '/',
			templateUrl: 'app/default.html'
		});

	$urlRouterProvider.otherwise('/');

});