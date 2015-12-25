// LICENSE : MIT
"use strict";
// https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
var shell = require('shelljs');
var tmp = require('tmp');
var ghParse = require('parse-github-url');
var Acho = require('acho');
var path = require("path");
var gitConfig = require("./git-config");
var Command = require("command-promise");
var Run = function (command) {
    return Command(command, {maxBuffer: 1024 * 100000});
};
var acho = new Acho();
function remoteURLWithToken(token) {
    if (token == null) {
        return "https://github.com/" + getSlug() + ".git"
    }
    return "https://" + token + "@github.com/" + getSlug() + ".git"
}
function getSlug() {
    // Travis CI
    // http://docs.travis-ci.com/user/environment-variables/
    if (process.env.TRAVIS_REPO_SLUG) {
        return process.env.TRAVIS_REPO_SLUG;
    }
    try {
        var pkg = require(path.join(process.cwd(), "package.json"));
        var gh = ghParse(pkg.repository.url);
        if (gh.repopath) {
            return gh.repopath;
        }
    } catch (error) {
        console.error(error);
    }
    throw new Error("Not found git repository.url");
}
function isTRAVIS() {
    return process.env.CI === "true" || process.env.TRAVIS === "true";
}
function isNotDeploy() {
    // when pull-request
    if (process.env.TRAVIS_PULL_REQUEST && process.env.TRAVIS_PULL_REQUEST !== 'false') {
        return true;
    }

    return false;
}
function deploy(directory) {
    if (!isTRAVIS()) {
        throw new Error("gh-pages-deploy-sh is for Travis CI.");
    }
    if (isNotDeploy()) {
        console.log("Don't deploy if it is pull-request");
        return Promise.resolve();
    }
    var currentDir = path.join(process.cwd(), ".");
    var deployDir = path.join(process.cwd(), directory) || currentDir;
    acho.info("deploy directory " + deployDir);
    var tmpObj = tmp.dirSync();
    var tmpDir = tmpObj.name;
    return Run("cp -rf " + deployDir + " " + tmpDir)
        .then(function () {
            var workDir = path.join(tmpDir, path.basename(deployDir));
            acho.info("tmp directory " + workDir);
            return Run("cd '" + workDir + "'");
        }).then(function () {
            acho.info("git init");
            return Run("git init");
        }).then(function () {
            return gitConfig.resolveGitName().then(function () {
                return gitConfig.resolveGitEmail()
            })
        }).then(function () {
            acho.info("git checkout -B gh-pages");
            return Run("git checkout -B gh-pages");
        }).then(function () {
            acho.info("rm .gitignore");
            return Run("git rm --ignore-unmatch -f .gitignore");
        }).then(function () {
            acho.info("git add && git commit");
            return Run("git add .").then(function () {
                return Run("git diff --quiet --exit-code --cached || git commit -m 'Update " + new Date().toISOString() + "'");
            });
        }).then(function () {
            acho.info("git push to gh-pages");
            var repositoryURL = remoteURLWithToken(process.env.GH_TOKEN);
            return Run("git push --force --quiet '" + repositoryURL + "' gh-pages > /dev/null 2>&1")
        }).then(function () {
            return Run("cd -");
        }).then(function () {
            acho.success("Finish deploy");
        });
}

module.exports = deploy;
