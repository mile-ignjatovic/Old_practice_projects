new Vue({
	el: "#app",
	data: {
		title: "Hello Vue.js!",
		link: "http//google.com",
		finishedLink: '<a href="http//google.com">Google 2</a>'
	},
	methods: {
		sayHallo: function() {
			this.title = "Hello!";
			return this.title;
		}
	}
});
