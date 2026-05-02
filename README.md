# OhoConsole
> Simple, colorful, and clean console logger for Node.js

A lightweight and simple console logging library

[한국어](README_ko.md) | [English](README.md)

## English
✨ Current Version: 2.0.2

### Key Features 
- **Automatic Timestamp: Displays the time in `[ 15:30 INFO ]` format**
- **Log Level Identification: Clearly distinguishes log levels such as INFO, WARN, and ERROR**
- **Color Support: Enhances readability with Red, Yellow, Blue, Green, and White**
- **Duplicate Message Prevention: Keep your console clean by skipping identical consecutive messages**

### Usage Example
#### Code
``` js
const { msg, setColor } = require('oho-console');

setColor('yellow');
msg('info', 'This is a yellow text message!'); // Outputs in the default color
msg('info', 'This is a red text message!', 'red'); // Outputs in red
msg('log', 'This message is a duplicate!');
msg('log', 'This message is a duplicate!'); // Outputs skipped
```
#### Output
```
[ 15:30 INFO ] This is a yellow text message!
[ 15:30 INFO ] This is a red text message!
[ 15:30 LOG ] This message is a duplicate!
```
