angular.module('showcase.util').directive('scCurrentStateController', function ($state, stateMarkupUtil) {

	return {
		link: postLink
	};

	function postLink(scope, iElement, iAttributes) {

		showController($state.current);

		scope.$on('$stateChangeSuccess', function (event, toState) {
			showController(toState);
		});

		function showController(state) {
			var html = stateMarkupUtil.getControllerMarkup(state, scope);
			iElement.html(html);
		}

	}

});