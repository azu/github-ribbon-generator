


var util = module.exports = {};

var Q = require('./promise');

util.stdout = function (pair)
{
	return pair[0];
}

util.stderr = function (pair)
{
	var err = pair[1];

	if (err)
	{
		return Q.reject(err);
	}
}

util.trim = function (pair_or_str)
{
	if (typeof pair_or_str === 'string')
	{
		return pair_or_str.trim();
	}
	else
	{
		var pair = pair_or_str;
		return [
			pair[0].trim(),
			pair[1].trim()
		];
	}
}
