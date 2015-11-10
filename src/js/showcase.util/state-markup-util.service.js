angular.module('showcase.util').service('stateMarkupUtil', function ($templateCache, $controller) {

	this.getTemplateMarkup = function getTemplateMarkup(state) {
		var string;
		if (state.template) {
			string = state.template;
		} else if (state.templateUrl) {
			string = $templateCache.get(state.templateUrl);
		} else {
			string = '';
		}
		return text2html(string);
	};

	this.getControllerMarkup = function getControllerMarkup(state, scope) {
		var string;
		if (state.controller) {
			var instance = $controller(state.controller, {
				$scope: scope
			});
			string = instance.constructor.toString();
		} else {
			string = '';
		}
		return text2html(string);
	};

	function text2html(text) {
		return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;').replace(/\t/g, '&nbsp;&nbsp;&nbsp;');
	}

});