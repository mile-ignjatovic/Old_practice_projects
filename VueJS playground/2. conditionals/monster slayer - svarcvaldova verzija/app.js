new Vue({
	el: "#app",
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		specialAttackCount: 0,
		turns: []
	},
	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.specialAttackCount = this.calcSpecialAttack();
			this.turns = [];
		},
		attack: function() {
			const dmg = this.calculateDmg(10, 3);
			this.monsterHealth -= dmg;
			this.turns.unshift({
				isPlayer: true,
				msg: "Player hits Monster for " + dmg
			});
			if (this.checkWin()) {
				return;
			}
			this.monsterAttack();
		},
		specialAttack: function() {
			if (this.specialAttackCount > 0) {
				const dmg = this.calculateDmg(17, 7);
				this.monsterHealth -= dmg;
				this.turns.unshift({
					isPlayer: true,
					msg: "Player hits Monster HARD for " + dmg
				});
				if (this.checkWin()) {
					return;
				}
				this.specialAttackCount--;
				this.monsterAttack();
			} else {
				this.turns.unshift({
					isPlayer: true,
					msg: "Ups! Player missed... HARD"
				});
				this.monsterAttack();
			}
		},
		heal: function() {
			if (this.playerHealth <= 92) {
				this.playerHealth += 8;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				msg: "Player healed himself !!!"
			});
			this.monsterAttack();
		},
		giveUp: function() {
			this.gameIsRunning = false;
		},
		calculateDmg(max, min) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if (confirm("You won! Start a new Game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm("You LOST! Start a new Game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		},
		monsterAttack: function() {
			const dmg = this.calculateDmg(12, 5);
			this.playerHealth -= dmg;
			this.turns.unshift({
				isPlayer: false,
				msg: "Monster hits Player for " + dmg
			});
			this.checkWin();
		},
		calcSpecialAttack: function() {
			return Math.max(Math.floor(Math.random() * 7) + 1, 4);
		}
	}
});
