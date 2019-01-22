function Circle() {
	let defoultLocation = { x: 1, y: 2 };
	this.draw = function() {
		console.log("draw");
	};

	Object.defineProperty(this, "defaultLocation", {
		get: function() {
			return defoultLocation;
		},
		set: function(value) {
			if (!value.x || value.y) throw new Error("Location is invalid.");
			defoultLocation = value;
		}
	});
}

function Stopwatch() {
	this.duration = 0;
	let started = false;
	let stop = false;
	this.start = function() {
		if (started) {
			throw new Error("Stopwatch already started");
		} else {
			stop = false;
			const intervalId = setInterval(() => {
				started = true;
				this.duration += 1;
				if (stop) {
					this.duration = this.duration / 100;
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
		this.duration = 0;
	};
}

class Test {
	constructor() {
		this.move = function() {
			console.log("y");
		};
		this.radius = 1;
	}
	draw() {
		console.log("x");
	}
}

const t = new Test();
