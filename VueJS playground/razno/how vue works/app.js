new Vue({
	el: "#app",
	data: {
		title: "The VueJS Instance"
	},
	methods: {
		destroy: function() {
			this.$destroy();
		}
	},
	beforeCreate: function() {
		console.log("beforeCreated()");
	},
	created: function() {
		console.log("created()");
	},
	beforeMount: function() {
		console.log("beforeMount()");
	},
	mounted: function() {
		console.log("mounted()");
	},
	beforeUpdate: function() {
		console.log("beforeUpdate()");
	},
	updated: function() {
		console.log("updated()");
	},
	beforeDestroy: function() {
		console.log("beforeDestroyed()");
	},
	destroyed: function() {
		console.log("destroyed()");
	}
});
