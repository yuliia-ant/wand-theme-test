// vendor
window.Flickity = require('flickity');
require('lazysizes');

// modules
window.PubSub = require('./scripts/pubsub');

window.debounce = function (fn, wait) {
	let t;
	return (...args) => {
		clearTimeout(t);
		t = setTimeout(() => fn.apply(this, args), wait);
	};
}

window.throttle = function(cb, delay) {
	let wait = false;
	let storedArgs = null;

	function checkStoredArgs () {
		if (storedArgs == null) {
			wait = false;
		} else {
			cb(...storedArgs);
			storedArgs = null;
			setTimeout(checkStoredArgs, delay);
		}
	}

	return (...args) => {
		if (wait) {
			storedArgs = args;
			return;
		}

		cb(...args);
		wait = true;
		setTimeout(checkStoredArgs, delay);
	}
}