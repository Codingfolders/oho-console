// Normal Variables
let lastMessage = null;

// Configuration
let config = require('#config.json');

// File Link
const { GetColorCode } = require('#function/Color.js');

// FormattedMessageOutput Logic
function FormattedMessageOutput (level, message, { color, isImportant = false }) {
    // current message and last message, returnDuplicateMessageEnabled config check
    if (!isImportant && config.returnDuplicateMessageEnabled && message === lastMessage) return;

    try {
        const now = new Date();
        
        const initialColorCode = '\x1b[0m';
        
        const formattedTime = new Intl.DateTimeFormat('sv-SE', { timeStyle: 'medium' }).format(now);
        const colorCode = color ? GetColorCode?.(color) : (config?.colorCode[String(level)] || initialColorCode);
        const formattedMessage = colorCode + `[${formattedTime} ${level.toUpperCase()}] ${message}` + initialColorCode;

        console[String(level)](formattedMessage);
        
        lastMessage = message;
    } catch (err) {
        console.error('Error occurred while formatting message:', err);
    }
}

// FormattedListOutput Logic
function FormattedListOutput (args = [], { character = '-', title = 'List' }) {
    try {
        const messages = args.map(item => `${character} ${item}`);
        
        console.info(title);
        console.info(messages.join('\n'));
    } catch (err) {
        console.error('Error occurred while creating list:', err);
    }
}

// main function
const settings = {
    TextColor: function (color, level) {
        if (!level || level === 'all') {
            const colorCode = GetColorCode(color);

            if (!config.colorCode) return;

            Object.keys(config.colorCode).forEach(key => {
                config.colorCode[String(key)] = colorCode;
            })
        }
        
        config.colorCode[String(level)] = GetColorCode?.(color);
    }, returnDuplicateMessageEnabled: function (isEnabled) {
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