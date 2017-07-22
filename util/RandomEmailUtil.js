class RandomEmailUtil {
	getEmailAddress(domain) {
		if (domain == null) {
			domain = "localhost";
		}

		var emailAddress = this.generateRandomCharacter(10);

		return emailAddress + "@" + domain;
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
}

module.exports = new RandomEmailUtil;
