// Environment Variables
let lastMessage = null;

let settings = require('#settings.json');

// sub function
function MessageFormatComponent (level, message, color) {
    // get OutputTime
    const CurrentTime = new Date();
    const OutputTime = {
        "hours": CurrentTime.getHours(),
        "minutes": CurrentTime.getMinutes(),
        "seconds": CurrentTime.getSeconds()
    }
    
    // Initial Variable
    const InitialColorCode = '\x1b[0m';
    
    // Format config
    const DisplayTime = `${String(OutputTime.hours).padStart(2, '0')}:${String(OutputTime.minutes).padStart(2, '0')}:${String(OutputTime.seconds).padStart(2, '0')}`;
    
    const finalColor = color || settings?.TextColor || '\x1b[37m' || 'white';
    const ColorCode = getColorCode(finalColor);

    const FormatComponent = `[${DisplayTime} ${level}] ${message}`
    const finalFormatComponent = `${ColorCode}${FormatComponent}${InitialColorCode}`
    
    return finalFormatComponent;
}

function getColorCode (color = 'white') {
    const colorsCode = {
        "red": "\x1b[31m",
        "yellow": "\x1b[33m",
        "blue": "\x1b[34m",
        "green": "\x1b[32m",
        "white": "\x1b[37m"
    }

    if (!colorsCode[color]) return colorsCode['white'];
    return colorsCode[color];
}

// main function
const ohoSettings = {
    TextColor: function (color = 'white') {
        const colorsName =  [
            "red",
            "yellow",
            "blue",
            "green",
            "white"
        ]
        if (!colorsName.includes(color)) return;
    
        settings.TextColor = color;
    },
    returnDuplicateMessageEnabled: function (isEnabled = true) {
        if (typeof isEnabled !== 'boolean') return;
        settings.returnDuplicateMessageEnabled = isEnabled;
    }
}

const msg = {
    log: function (message = '', color = settings.TextColor, isImportant = false) {
        // If the last message and the current message match (ignore duplicate when not isImportant)
        if (!isImportant && settings.returnDuplicateMessageEnabled && message === lastMessage) return;

        const level = 'LOG';
        const Format = MessageFormatComponent(level, message, color, isImportant);

        console.log(Format);

        // last message update
        lastMessage = message;
    },
    info: function (message = '', color = settings.TextColor, isImportant = false) {
        // If the last message and the current message match (ignore duplicate when not isImportant)
        if (!isImportant && settings.returnDuplicateMessageEnabled && message === lastMessage) return;

        const level = 'INFO';
        const Format = MessageFormatComponent(level, message, color, isImportant);

        console.log(Format);

        // last message update
        lastMessage = message;
    },
    warn: function (message = '', color = settings.TextColor, isImportant = false) {
        // If the last message and the current message match (ignore duplicate when not isImportant)
        if (!isImportant && settings.returnDuplicateMessageEnabled && message === lastMessage) return;

        const level = 'WARN';
        const Format = MessageFormatComponent(level, message, color, isImportant);

        console.log(Format);

        // last message update
        lastMessage = message;
    },
    error: function (message = '', color = settings.TextColor, isImportant = false) {
        // If the last message and the current message match (ignore duplicate when not isImportant)
        if (!isImportant && settings.returnDuplicateMessageEnabled && message === lastMessage) return;

        const level = 'ERROR';
        const Format = MessageFormatComponent(level, message, color, isImportant);

        console.log(Format);

        // last message update
        lastMessage = message;
1    }
}

// module exports
module.exports = {
    ohoSettings,
    msg
}