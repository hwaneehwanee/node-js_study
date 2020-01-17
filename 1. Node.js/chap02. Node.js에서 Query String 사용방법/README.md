## Node.js에서 Query String 사용방법
Node.js에서 URL의 Query String을 사용하는 방법예제
```
# 1.웹서버만들기 디렉토리로 이동합니다.
cd node-js_study/1.웹서버만들기

# 웹서버를 실행합니다.
node main.js

# 웹브라우져를 실행하여 아래 URL로 접속합니다.
http://localhost:3000?id=HTML

# URL의 물음표(?)뒤 부분을 Query String이라고 하며 '=' 기호로 name과 value를 구분합니다.
# id=HTML의 value값인 'HTML' 값 변경하며 터미널(콘솔)에 어떻게 찍히는지 확인.
# Query String을 Node.js에서 어떻게 파싱하는지 확인.
```
