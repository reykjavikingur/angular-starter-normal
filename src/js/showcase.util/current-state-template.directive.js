angular.module('showcase.util').directive('scCurrentStateTemplate', function ($state, stateMarkupUtil) {

	return {
		link: postLink
	};

	function postLink(scope, iElement, iAttributes) {

		showTemplate($state.current);

		scope.$on('$stateChangeSuccess', function (event, toState) {
			showTemplate(toState);
		});

		function showTemplate(state) {
			var html = stateMarkupUtil.getTemplateMarkup(state);
			iElement.html(html);
		}

	}

});