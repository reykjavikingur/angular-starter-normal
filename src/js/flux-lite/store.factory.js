angular.module('flux-lite').factory('storeFactory', function(EventEmitter) {

	function Store() {
		this.ee = EventEmitter({});
		this.data = {};
	}

	_.extend(Store.prototype, {

		commit: function commit(name, value) {
			this.data[name] = value;
			this.ee.emit(name + 'Changed', value);
		},

		watch: function watch(name, callback) {
			this.ee.on(name + 'Changed', callback);
			callback(this.data[name]);
			return function(){
				this.ee.off(name + 'Changed', callback);
			};
		}

	});

	function storeFactory() {
		return new Store();
	}

	return storeFactory;

});