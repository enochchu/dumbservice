var RandomEmailUtil = require('../util/RandomEmailUtil');
var RandomIDUtil = require('../util/RandomIdUtil');
var RandomPersonUtil = require('../util/RandomPersonUtil');

const MAX_LIMIT = 10;

class UserService {
	constructor() {
		this.Users = this._generateUsers();
	}

	getRandomUser() {
		return this.Users[Math.floor(Math.random() * this.Users.length)];
	}

	getUsers() {
		return this.Users;
	}

	search(keyword) {
		var filteredJSON = [];

		for (var i = 0; i < this.Users.length; i++) {
			var user = this.Users[i];

			if (this._containKeywordInJSONObject(keyword, user)) {
				filteredJSON.push(user);
			}
		}

		return filteredJSON;
	}

	regenerate() {
		this.Users = this._generateUsers();
	}

	_containKeywordInJSONObject(keyword, jsonObject) {
		var instance = this;

		var normalizedKeyword = instance._normalize(keyword);
		var keys = Object.keys(jsonObject);

		for (var i =0; i < keys.length; i++) {
			var jsonObjectKeyword = instance._normalize(jsonObject[keys[i]].toString());

			if (jsonObjectKeyword.match(normalizedKeyword)) {
				return true;
			}
		}

		return false;
	}

	_normalize(word) {
		return word.trim().toLowerCase();

	}

	_generateUsers() {
		var jsonObject = [];

		for (var i = 0; i < MAX_LIMIT; i++) {
			jsonObject.push(this._generateUserJSON());
		}

		return jsonObject;
	}

	_generateUserJSON() {
		var firstName = RandomPersonUtil.getName();
		var lastName = RandomPersonUtil.getName();
		var emailAddress = RandomEmailUtil.getEmailAddress();

		var userJson = {
			"userID": RandomIDUtil.generateRandomInt(6),
			"userUUID": RandomIDUtil.getId().toString(),
			"firstName": firstName,
			"lastName": lastName,
			"emailAddress": emailAddress,
			"legalEntityName": firstName + " " + lastName,
			"languageId": RandomPersonUtil.getLanguageId()
		};

		return userJson;
	}
}

module.exports = new UserService;
