## Not Found 구현
존재하지 않는 정보에 대한 요청이 들어왔을때 오류 메시지를 전송하는 예제.
```
# 해당 디렉토리로 이동합니다.
cd node-js_study/chap06. Not Found 구현

# main.js를 실행하여 웹서버를 구동합니다.
node main.js

# 웹브라우져를 실행하여 아래 URL로 접속합니다.
 1) http://localhost:3000?id=HTML  => 정상
 2) http://localhost:3000/favico   => Not Found 발생

# url.parse(_url, true)내용을 console.log로 확인하여 URL이 변경될때마다 pathname에 어떤 값이 있는지 확인.
```
