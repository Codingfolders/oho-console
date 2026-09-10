// Normal Variables
let lastMessage = null;

// Configuration
let config = require('#config.json');

// sub function
function GetColorCode (color = 'white') {
    try {
        const colors = {
            red: '\x1b[31m',
            yellow: '\x1b[33m',
            blue: '\x1b[34m',
            green: '\x1b[32m',
            white: '\x1b[37m'
        }

        const colorCode = colors[color];

        return colorCode ? colorCode : '\x1b[37m';
    } catch (err) {
        return '\x1b[37m';
    }
}

function FormattedMessageOutput (level, message, options = {}) {
    // current message and last message, returnDuplicateMessageEnabled config check
    if (!options.isImportant && config.returnDuplicateMessageEnabled && message === lastMessage) return;

    try {
        const now = new Date();
        
        const initialColorCode = '\x1b[0m';

        const formattedTime = new Intl.DateTimeFormat('sv-SE', { timeStyle: 'medium' }).format(now);    
        const colorCode = options?.color ? GetColorCode?.(options?.color) : (config?.colorCode ?? initialColorCode);
        const formattedMessage = colorCode + `[${formattedTime} ${level.toUpperCase()}] ${message}` + initialColorCode;

        console[level](formattedMessage);
        
        lastMessage = message;
    } catch (err) {
        console.error('Error occurred while formatting message:', err);
    }
}

function FormattedListOutput (args = [], options = {}) {
    try {
        const messages = args.map((i) => `${options.character || '-'} ${i}`);
        
        console.info(`${options?.title ?? 'List'}\n${messages.join('\n')}`);
    } catch (err) {
        console.error('Error occurred while creating list:', err);
    }
}

// main function
const settings = {
    TextColor: function (color) {
        config.colorCode = GetColorCode?.(color);
    },
    returnDuplicateMessageEnabled: function (isEnabled = true) {
        if (typeof isEnabled === 'boolean') config.returnDuplicateMessageEnabled = isEnabled;
    }
}

const msg = {
    log: function (message = '', options = {}) {
        FormattedMessageOutput('log', message, options);
    },
    info: function (message = '', options = {}) {
        FormattedMessageOutput('info', message, options);
    },
    warn: function (message = '', options = {}) {
        FormattedMessageOutput('warn', message, options);
    },
    error: function (message = '', options = {}) {
        FormattedMessageOutput('error', message, options);
    },
    list: function (args = [], options = {}) {
        if (!Array.isArray(args) || args.length <= 0) return msg?.error('The first argument must be an array or contain values.', { color: 'red', isImportant: true });

        FormattedListOutput(args, options);
    }
}

// module exports
module.exports = {
    settings,
    msg
}