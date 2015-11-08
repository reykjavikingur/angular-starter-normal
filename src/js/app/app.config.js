angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('default', {
			url: '/',
			templateUrl: 'default.html'
		});

	$urlRouterProvider.otherwise('/');

});