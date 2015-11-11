angular.module('flux-lite').factory('dispatcherFactory', function(EventEmitter) {

	function Dispatcher() {
		this.ee = EventEmitter({});
	}

	_.extend(Dispatcher.prototype, {

		emit: function emit() {
			this.ee.emit.apply(this.ee, arguments);
		},

		on: function on(type, callback) {
			this.ee.on(type, callback);
			return function() {
				this.ee.off(type, callback);
			};
		}

	});

	function dispatcherFactory() {
		return new Dispatcher();
	}

	return dispatcherFactory;

});