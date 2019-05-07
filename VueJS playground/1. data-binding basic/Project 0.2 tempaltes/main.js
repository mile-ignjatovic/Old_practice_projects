new Vue({
	el: "#app",
	data: {
		counter: 0,
		secondCounter: 0
	},
	computed: {
		output: function() {
			console.log("output called");
			return this.counter > 5 ? "Greater" : "Smaller";
		}
	},
	watch: {
		secondCounter: function(value) {
			console.log("watch called");
			// ovo mora zato sto ne mozemo da pristupamo vue instanci u asinhronim metodaama
			const vm = this;
			setTimeout(function() {
				vm.secondCounter = 0;
			}, 2000);
		}
	},
	methods: {
		result: function() {
			console.log("result called");
			return this.counter > 5 ? "Greater" : "Smaller";
		}
	}
});
