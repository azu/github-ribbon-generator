#!/usr/bin/env node
var deploy = require("../lib/gh-pages-deploy-sh");
var directory = process.argv[2];
deploy(directory).catch(function (error) {
    console.error(error, error.stack);
    process.exit(1);
});