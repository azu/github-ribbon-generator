
var
	flat    = require('./deps').flat,
	reduce  = require('./deps').reduce,
	isPlain = require('./deps').isPlain,
	extend  = require('./deps').extend;

module.exports = function arrange (arguments)
{
	var args = flat(arguments);
	var opts = {};

	args = args.reduce(function (args, value)
	{
		if (isPlain(value))
		{
			extend(opts, value);
		}
		else
		{
			args.push(value);
		}

		return args;
	}
	, []);

	return {
		args: args,
		opts: opts
	};
}
