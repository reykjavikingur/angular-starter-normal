angular.module('showcase').directive('scCurrentStateController', function($state, $templateCache) {

	return {
		link: postLink
	};

	function postLink(scope, iElement, iAttributes) {

		show(getController($state.current));

		scope.$on('$stateChangeSuccess', function(event, toState) {
			show(getController(toState));
		});

		function getController(state) {
			if (state.controller) {
				return state.controller;
			}
			else {
				return '';
			}
		}

		function show(contents) {
			iElement.text(contents);
		}

	}

});