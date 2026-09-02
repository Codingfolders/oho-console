// Normal Variables
let lastMessage = null;

// config load
let config = require('#config.json');

// sub function
function getColorCode (color = 'white') {
    try {
        const colors = [
            {name: 'red', code: '\x1b[31m'},
            {name: 'yellow', code: '\x1b[33m'},
            {name: 'blue', code: '\x1b[34m'},
            {name: 'green', code: '\x1b[32m'},
            {name: 'white', code: '\x1b[37m'},
        ]

        const colorCode = colors?.find?.(i => i.name === color)?.code;

        if (!colorCode) return '\x1b[37m';

        return colorCode;
    } catch (err) {
        console.error('Error occurred while getting color code:', err);
        return '\x1b[37m';
    }
}

function FormattedMessageOutput (level, message, options = {}) {
    if (!options.isImportant && config?.returnDuplicateMessageEnabled && message === lastMessage) return;

    try {
        // get OutputTime
        const now = new Date();
        
        // Initial Variable
        const initialColorCode = '\x1b[0m';

        // Format
        const formattedTime = new Intl.DateTimeFormat('sv-SE', { timeStyle: 'medium' }).format(now);
        const colorCode = options?.color ? getColorCode?.(options?.color) : (config?.colorCode ?? initialColorCode);
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
        config.colorCode = getColorCode?.(color);
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
        if (!Array.isArray(args)) {
            console.error('The first argument must be an array.');
            return;
        }

        FormattedListOutput(args, options);
    }
}

// module exports
module.exports = {
    settings,
    msg
}