angular.module('showcase.util').directive('scStateLinkList', function ($state) {

	return {
		template: '<li class="state-link" ng-repeat="state in states"><a ui-sref="{{state.name}}" ui-sref-active="active">{{state.name}}</a></li>',
		scope: {},
		link: postLink
	};

	function postLink(scope, iElement, iAttributes) {
		scope.states = getStates();

		function getStates() {
			var states = $state.get();
			return _.filter(states, function (state) {
				return state.name;
			});
		}
	}

});