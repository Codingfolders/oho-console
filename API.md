# OhoConsole API
## msg
### Parameter
| Parameter | Type | Options | Description |
| - | - | - | - |
| info | string | color, isImportant | Outputs info message |
| warn | string | color, isImportant | Outputs warn message |
| error | string | color, isImportant | Outputs error message |
| list | string | title, character | Outputs list message |

### Options
| Option | Type  | Default | Description |
| - | - | - | - |
| color | string  | white | Set text color `[red/yellow/blue/green/white]` |
| isImportant | boolean  | true | Set message importance `[true/false]` |
| title | string | List | Set list title |
| character | string | - | Set list character |

## settings
### Parameter
| Parameter | Type | Default | Description |
| - | - | - | - |
| TextColor | string | For more details, please refer to the message default colors table in README | Set default text color `[red/yellow/blue/green/white]` |
| returnDuplicateMessageEnabled | boolean | true | Set whether to enable duplicate message return `[true/false]` |