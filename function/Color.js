// GetColorCode Logic
function GetColorCode (color = 'white') {
    try {
        const colors = {
            red: '\x1b[31m',
            yellow: '\x1b[33m',
            blue: '\x1b[34m',
            green: '\x1b[32m',
            white: '\x1b[37m'
        }

        const colorCode = colors[String(color).toLowerCase()];

        return colorCode || '\x1b[37m';
    } catch (err) {
        return '\x1b[37m';
    }
}

module.exports = {
    GetColorCode
}