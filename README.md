# OhoConsole
> Simple, colorful, and clean console logger for Node.js

가볍고 간단한 콘솔 로깅 라이브러리

[한국어](#한국어) | [English](#english)

## 한국어

✨ 현재 버전: 2.0.1

### 주요 기능 
- **자동 타임스탬프: `[ 15:30 INFO ]` 형식으로 출력 시간 자동 표시**
- **로그 레벨 식별: INFO, WARN, ERROR 등으로 레벨 출력**
- **색상 지원: 빨간색, 노란색, 파란색, 초록색, 흰색 색상 적용으로 가독성 향상**
- **중복 메시지 방지: 이전과 동일한 메시지 출력 생략으로 가독성 향상**

### 사용 예시
#### 코드
``` js
const { msg, setColor } = require('oho-console');

setColor('yellow');
msg('info', '노란색 문자 메시지입니다!'); // 지정된 색상 메시지 출력
msg('info', '빨간색 문자 메시지입니다!', 'red'); // 빨간색 메시지 출력
msg('log', '중복된 메시지입니다!');
msg('log', '중복된 메시지입니다!'); // 중복 메시지 출력 생략
```
#### 출력
```
[ 15:30 INFO ] 노란색 문자 메시지입니다!
[ 15:30 INFO ] 빨간색 문자 메시지입니다!
[ 15:30 LOG ] 중복된 메시지입니다!
```

-----

## English
✨ Current Version: 2.0.1

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
