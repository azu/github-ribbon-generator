

var Promise;

try
{
	Promise = require('bluebird');
}
catch (e) { try
{
	Promise = require('q').Promise;
}
catch (e)
{
	Promise = require('promise');
}}

module.exports = Promise;
