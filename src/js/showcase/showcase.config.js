angular.module('showcase').config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('default', {
			url: '/',
			templateUrl: 'showcase/default.html',
			controller: 'showcaseDefaultController'
		})
		/*
		.state('example1', {
			url: '/example1',
			templateUrl: 'showcase/example1.html',
			controller: 'example1Controller'
		})
		.state('example2', {
			url: '/example2',
			templateUrl: 'showcase/example2.html'
		})
		//*/
	;

	$urlRouterProvider.otherwise('/');

});