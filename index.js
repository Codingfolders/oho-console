const NodeVersion = process.version;
const majorVersion = parseInt(NodeVersion.substring(1).split('.')[0]);

if (majorVersion < 22) {
    console.error(`Sorry, Library doesn't work on Node.js lower than v22! Download the latest version(https://nodejs.org/en/download).`);
    console.error(`Current version: ${NodeVersion}`);
    return;
}

module.exports = require('./function/lib.js');