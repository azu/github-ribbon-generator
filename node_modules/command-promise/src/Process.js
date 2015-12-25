


var slice = Array.prototype.slice;
var Readable = require('stream').Readable;
var exec = require('child_process').exec;
var duplex = require('duplexer');
var arrange = require('./arrange');

var Process = module.exports = function Process (/* chunk, chunk, ..., options, options, ... */)
{
	var _ = arrange(arguments);

	var args = _.args;
	var opts = _.opts;

	var str = args.join(' ');

	return Simple(str, opts);
}

var Simple = Process.Simple = function Simple (str, options)
{
	var proxyout = new Readable;
	var end = { promise: false, stdout: false, full: false };

	var child = exec(str, options, function (error, _, _)
	{
		if (error)
		{
			proxyout.emit('error', error);
		}

		end.promise = true;
		ended();
	});

	var stdout = child.stdout.on('end', function ()
	{
		end.stdout = true;
		ended();
	});

	function ended ()
	{
		if (end.full)
		{
			return;
		}

		if (end.stdout && end.promise)
		{
			end.full = true;
			proxyout.emit('end');
		}
	}

	[ 'data', /*'close', */'error' ].forEach(readEventProxyTo(stdout, proxyout));
	/* close lead to an error in stream-to-array finalization, onClose -> cleanup */
	[ 'resume', 'pause' ].forEach(readMethodProxyTo(stdout, proxyout));

	proxyout._read = new Function;

	return duplex(child.stdin, proxyout);
}

function readEventProxyTo (from, to)
{
	return function (name)
	{
		from.on(name, function ()
		{
			var args = [ name ].concat(slice.call(arguments));
			to.emit.apply(to, args);
		});
	}
}

function readMethodProxyTo (from, to)
{
	return function (name)
	{
		from[name] = function ()
		{
			to.emit(name);

			var fn = to[name];
			if (fn)
			{
				return fn.apply(to, arguments);
			}
			from.emit(name);
		}
	}
}
