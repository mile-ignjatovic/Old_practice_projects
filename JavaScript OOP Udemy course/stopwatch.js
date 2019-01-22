function Stopwatch() {
	let duration = 0;
	let started = false;
	let stop = false;
	this.start = function() {
		if (started) {
			throw new Error("Stopwatch already started");
		} else {
			stop = false;
			const intervalId = setInterval(() => {
				started = true;
				duration += 1;
				if (stop) {
					duration = duration / 100;
					clearInterval(intervalId);
				}
			}, 10);
		}
	};
	this.stop = function() {
		if (!stop) {
			stop = true;
			started = false;
		}
	};
	this.reset = function() {
		duration = 0;
	};

	Object.defineProperty(this, "duration", {
		get: function() {
			return duration;
		}
	});
}
