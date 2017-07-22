class RandomPersonUtil {
	constructor() {
		this.NAMES = require("../dict/Name");

		this.LANGUAGE_ID = [
			"de_De",
			"en_UK",
			"en_US",
			"es_ES",
			"jp_JP",
			"pt_BR",
			"zh_CN"
		];

		this.MAX_RANDOM_GEN_CHARACTER = 10;
	}

	getName() {
		return this._getRandomItemFromArray(this.NAMES);
	}

	getLanguageId() {
		return this._getRandomItemFromArray(this.LANGUAGE_ID);
	}

	generateRandomInt(length) {
		return Math.floor(Math.random() * length) + 1;
	}

	_generateRandomCharacter(length) {
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

	_getRandomItemFromArray(array) {
		return array[Math.floor(Math.random() * array.length)];
	}
}

module.exports = new RandomPersonUtil;
