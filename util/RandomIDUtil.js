class RandomIDUtil {
	getId() {
		return this.generateRandomCharacter(6);
	}

	generateRandomCharacter(length) {
		if (length == 0) {
			return "Batman";
		}

		var character = "";
		var characters = "abcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < length; i++) {
			character = character + characters.charAt(Math.floor(Math.random() * character.length));
		}

		return character;
	}

	generateRandomInt(length) {
		return Math.floor(Math.random() * length) + 1;
	}
}

module.exports = new RandomIDUtil;
