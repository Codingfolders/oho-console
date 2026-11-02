// Check Node.js version
const NodeVersion = process.version;
const majorVersion = parseInt(NodeVersion.substring(1).split('.')[0]);

if (majorVersion < 14) {
    throw Error(`Sorry, Library doesn't work on Node.js lower than v14! Download the latest version(https://nodejs.org/en/download). Node.js version is lower than v14. Current version: ${NodeVersion}`);
}

module.exports = require('./function/lib.js');