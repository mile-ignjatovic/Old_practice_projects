new Vue({
	el: "#app",
	data: {
		gameOver: true,
		playerHealth: 100,
		monsterHealth: 100,
		turnResult: []
	},
	methods: {
		startGame: function() {
			this.gameOver = false;
		},
		endGame: function() {
			this.gameOver = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turnResult = [];
		},
		getRandomValue: function() {
			return Math.floor(Math.random() * Math.floor(6)) + 10;
		},
		updateGameStatus: function(type) {
			let monsterAttack = this.getRandomValue();
			let playerAttack = this.getRandomValue();
			if (!this.gameOver) {
				if (this.playerHealth - monsterAttack <= 0) {
					alert("you lost");
					this.endGame();
				} else if (this.monsterHealth - playerAttack <= 0) {
					alert("you won");
					this.endGame();
				} else if (type === "giveUp") {
					this.endGame();
				} else {
					if (type === "attack") {
						this.monsterHealth -= playerAttack;
					} else if (type === "specialAttack") {
						this.monsterHealth -= playerAttack + 3;
					} else if (type === "heal") {
						this.playerHealth += playerAttack + 2;
					}
					this.playerHealth -= monsterAttack;
					this.turnResult.push(playerAttack, monsterAttack);
				}
			}
		}
	}
});
