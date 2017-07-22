var express = require('express');
var router = express.Router();

var UsersService = require('../service/UsersService');

router.get(
	'/',
	function(req, res, next) {
		res = _setHeaders(res);
		res.json(UsersService.getUsers());
	}
);

router.get(
	'/search', 
	function(req, res, next) {
		var keyword = req.query.keyword;

		res = _setHeaders(res);
		res.json(UsersService.search(keyword));
	}
);

router.get(
	'/regenerate',
	function(req, res, next) {
		UserService.regenerate();

		res = _setHeaders(res);
		res.json(UsersService.getUsers());
	}
);

function _setHeaders(res) {
	res.set({
		'Access-Control-Allow-Origin': '*'
	});

	return res;
}

module.exports = router;
