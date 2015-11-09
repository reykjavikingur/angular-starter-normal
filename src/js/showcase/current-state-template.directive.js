angular.module('showcase').directive('scCurrentStateTemplate', function($state, $templateCache) {

	return {
		link: postLink
	};

	function postLink(scope, iElement, iAttributes) {

		show(getTemplate($state.current));

		scope.$on('$stateChangeSuccess', function(event, toState) {
			show(getTemplate(toState));
		});

		function getTemplate(state) {
			if (state.template) {
				return state.template;
			} else if (state.templateUrl) {
				return $templateCache.get(state.templateUrl);
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