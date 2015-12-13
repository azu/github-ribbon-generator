// LICENSE : MIT
"use strict";
const defaultOptions = Object.freeze({
    color: "black",
    position: "right"
});
/**
 * @return {string}
 */
export function GitHubRibbonStyle(options = {}) {
    const position = options.position || defaultOptions.position;
    switch (position) {
        case "left":
            return "position: absolute; top: 0; left: 0; border: 0;";
        case "right":
            return "position: absolute; top: 0; right: 0; border: 0;"
    }
    throw new Error("should not reach. position: " + position);
}

export function colorToHex(color) {
    switch (color) {
        case "red":
            return "aa0000";
        case "green":
            return "007200";
        case "black":
            return "121621";
        case "orange":
            return "ff7600";
        case "gray":
            return "6d6d6d";
        case "white":
            return "ffffff";
    }
    throw new Error("should not reach. color: " + color);
}
/**
 *
 * @param {defaultOptions} options
 * @returns {string} github ribbon url
 * @constructor
 */
export function GitHubRibbonImage(options = {}) {
    const color = options.color || defaultOptions.color;
    const position = options.position || defaultOptions.position;
    const colorHex = colorToHex(color);
    return `https://s3.amazonaws.com/github/ribbons/forkme_${position}_${color}_${colorHex}.png`;
}

export function GitHubCopyPaste(options = {}) {
    const repositoryURL = options.repositoryURL;
    const imageURL = GitHubRibbonImage(options);
    const linkStyle = GitHubRibbonStyle(options);
    return `<a href="${repositoryURL}"><img style="${linkStyle}" src="${imageURL}" alt="Fork me on GitHub"></a>`
}