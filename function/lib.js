const defaultTextColor = '\x1b[0m';
let TextColor = '\x1b[0m';

let lastMessage = null;

function getTime () {
    const CurrentTime = new Date();
    const OutputTime = {
        "hours": CurrentTime.getHours(),
        "minutes": CurrentTime.getMinutes(),
        "seconds": CurrentTime.getSeconds()
    }
    return OutputTime;
}

// =====

function msg (level, message, color) {
    //
    const Time = getTime();

    if (lastMessage && lastMessage === message) return;
    lastMessage = message;
    
    //
    if (color) setColor(color);

    const DisplayTime = `${String(Time.hours).padStart(2, '0')}:${String(Time.minutes).padStart(2, '0')}:${String(Time.seconds).padStart(2, '0')}`;
    const DisplayLevel = level.toUpperCase();

    console.log(TextColor + `[ ${DisplayTime} ${DisplayLevel} ] ${message}` + defaultTextColor);
    if (color) TextColor = defaultTextColor;

    if (!lastMessage || lastMessage !== message) lastMessage = message;
}

function setColor (color) {
    const validColor = [
        'red',
        'yellow',
        'blue',
        'green',
        'white'
    ]
    const Colors = {
        'red': '\x1b[31m',
        'yellow': '\x1b[33m',
        'blue': '\x1b[34m',
        'green': '\x1b[32m',
        'white': '\x1b[0m'
    }

    const isValid = validColor.includes(color);
    if (!color) return;
    if (!isValid) return;    

    TextColor = Colors[color];
}

module.exports = {
    msg,
    setColor
}