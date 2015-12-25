


var Promise = require('./promise')
var exec = require('child_process').exec

var arrange = require('./arrange')

var Command = module.exports = function Command (/* chunk, chunk, ..., options, options, ... */)
{
	var A = arrange(arguments);

	var str  = A.args.join(' ');
	var opts = A.opts;

	return Simple(str, opts);
}

Command.util = require('./util');

var Simple = Command.Simple = function Simple (str, options)
{
	return new Promise(function (rs, rj)
	{
		exec(str, options, function (error, stdout, stderr)
		{
			if (error)
			{
				rj(error);
			}
			else
			{
				rs([ stdout, stderr ]);
			}
		});
	});
}

Command.so = function so ()
{
	var args = arguments;
	return function soCommand ()
	{
		return Command.apply(null, args);
	}
}
