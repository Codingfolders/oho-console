# OhoConsole
가볍고 간단한 콘솔 관리 라이브러리
A lightweight and simple console management library

✨ 현재 버전: 2.0.1

## 주요 기능 
- **자동 타임 스태프: `[ 15:30 INFO ]` 형식으로 출력 시간 자동 표시**
- **로그 레벨 식별: INFO, WARN, ERROR 등으로 레벨 출력**
- **색상 지원: 빨간색, 노란색, 파란색, 초록색, 흰색 색상 적용으로 가독성 향상**
- **중복 메시지 방지: 이전의 메시지와 같은 메시지의 출력 생략하여 가독성 향상**

## 예시
===== 코드 =====
``` js
const { msg, setColor } = require('oho-console');

setColor('yellow');
msg('info', 'This is a yellow text message!'); // 노란색 메시지 출력
msg('info', 'This is a red text message!', 'red'); // 빨간색 메시지 출력
msg('log', 'This message is a duplicate!'); // 지정된 색상(노란색) 메시지 출력
msg('log', 'This message is a duplicate!'); // 중복 메시지 출력 생략
```
===== 출력 =====
<span style="color:yellow">[ 15:30 INFO ] This is a yellow text message!</span>
<span style="color:red">[ 15:30 INFO ] This is a red text message!</span>
<span style="color:yellow">[ 15:30 LOG ] This message is a duplicate!</span>

-----

✨ Current Version: 2.0.1

## Key Features 
- **Automatic TimeStamp: Automatic displays the time in `[ 15:30 INFO ]` format**
	- **Log Level Identification: Clearly distinguishes log levels such as INFO, WARN, and ERROR**
	- **Color Support: Ehances readability with support for Red, Yellow, Blue, Green, White**
- **Duplicate Message Prevention: Keep your console clean by skipping identical consecutive messages**

## Usage Example
### Code
``` js
const { msg, setColor } = require('oho-console');

setColor('yellow');
msg('info', 'This is a yellow text message!'); // 노란색 메시지 출력
msg('info', 'This is a red text message!', 'red'); // 빨간색 메시지 출력
msg('log', 'This message is a duplicate!'); // 지정된 색상(노란색) 메시지 출력
msg('log', 'This message is a duplicate!'); // 중복 메시지 출력 생략
```
### Output
<span style="color:yellow">[ 15:30 INFO ] This is a yellow text message!</span>
<span style="color:red">[ 15:30 INFO ] This is a red text message!</span>
<span style="color:yellow">[ 15:30 LOG ] This message is a duplicate!</span>