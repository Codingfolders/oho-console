# OhoConsole
> Simple, colorful, and clean console logger for Node.js

가볍고 간단한 콘솔 로깅 라이브러리

[⌈github repository⌋](https://github.com/Codingfolders/oho-console/) | [⌈npm library ¦ 4.0.0⌋](https://www.npmjs.com/package/oho-console) | [⌈한국어⌋](#한국어) | [⌈English⌋](#english)

## 한국어

Node.js 5버전 이상까지 지원합니다!

### 주요 기능
- **자동 타임스탬프: `[ 15:30:00 INFO ]` 형식으로 출력 시간 자동 표시**
- **로그 레벨 식별: INFO, WARN, ERROR 등으로 레벨 출력**
- **색상 지원: 빨간색, 노란색, 파란색, 초록색, 흰색 색상 적용으로 가독성 향상**
- **중복 메시지 방지: 이전과 동일한 메시지 출력 생략으로 가독성 향상**

### 사용 예시
#### 예시 1
- 코드
``` js
const { msg, settings } = require('oho-console');

settings.TextColor('yellow'); // 기본 설정: white
msg.info('노란색 문자 메시지입니다!'); // 기본 색상으로 출력
msg.info('빨간색 문자 메시지입니다!', { color: 'red' }); // 빨간색으로 출력
```
- 출력
```
[ 15:30:00 INFO ] 노란색 문자 메시지입니다!
[ 15:30:00 INFO ] 빨간색 문자 메시지입니다!
```

#### 예시 2
- 코드
``` js
const { msg, settings } = require('oho-console');

msg.info('이 메시지는 중복되었습니다!'); // 기본 색상으로 출력
msg.info('이 메시지는 중복되었습니다!'); // 출력 건너뜀

settings.returnDuplicateMessageEnabled(false); // 기본 설정: true

msg.info('이 메시지는 중복되었습니다!'); // 기본 색상으로 출력
msg.info('이 메시지는 중복되었습니다!');
```
- 출력
```
[ 15:30:00 INFO ] 이 메시지는 중복되었습니다!
[ 15:30:00 INFO ] 이 메시지는 중복되었습니다!
[ 15:30:00 INFO ] 이 메시지는 중복되었습니다!
```

-----

## English

Supports Node.js version 22 or higher!

### Key Features 
- **Automatic Timestamp: Displays the time in `[ 15:30:00 INFO ]` format**
- **Log Level Identification: Clearly distinguishes log levels such as INFO, WARN, and ERROR**
- **Color Support: Enhances readability with Red, Yellow, Blue, Green, and White**
- **Duplicate Message Prevention: Keep your console clean by skipping identical consecutive messages**

### Usage Example
#### Example 1
- Code
``` js
const { msg, settings } = require('oho-console');

settings.TextColor('yellow'); // default Settings: white
msg.info('This is a yellow text message!'); // Outputs in the default color
msg.info('This is a red text message!', { color: 'red' }); // Outputs in red
```
- Output
```
[ 15:30:00 INFO ] This is a yellow text message!
[ 15:30:00 INFO ] This is a red text message!
```

#### Example 2
- Code
``` js
const { msg, settings } = require('oho-console');

msg.info('This message is a duplicate!'); // Outputs in the default color
msg.info('This message is a duplicate!'); // Outputs skipped

settings.returnDuplicateMessageEnabled(false); // default Settings: true

msg.info('This message is a duplicate!'); // Outputs in the default color
msg.info('This message is a duplicate!');
```
- Output
```
[ 15:30:00 INFO ] This message is a duplicate!
[ 15:30:00 INFO ] This message is a duplicate!
[ 15:30:00 INFO ] This message is a duplicate!
```
