// LICENSE : MIT
"use strict";
var Command = require("command-promise");
var USER_NAME = "Travis CI";
var USER_MAIL = "noreply@travis-ci.org";
function resolveGitName() {
    return Command("git config user.name").then(function (userName) {
        if (userName == null) {
            return Promise.reject(userName);
        }
        return userName;
    }).catch(function (error) {
        return Command("git config --global user.name " + USER_NAME);
    });
}
function resolveGitEmail() {
    return Command("git config user.email").then(function (email) {
        if (email == null) {
            return Promise.reject(email);
        }
        return email;
    }).catch(function (error) {
        return Command("git config --global user.email " + USER_MAIL);
    });
}

module.exports = {
    resolveGitName: resolveGitName,
    resolveGitEmail: resolveGitEmail
};
