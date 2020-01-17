//ECMAScript 6에서 새로운 문자열 표기법 추가.
var name = 'hwaneehwanee';

//기존방식 문자열에 변수를 +로 연결하기도 힘들고 보기도힘들고.. 줄바꿈시 \n 넣어야하고.. 
var str = 'My name is ' + name + '. ^^';
str += '\n hi!!';
console.log(str);


//template 표기법 사용하면 적은대로 나옴. 
var str2 = `My name is ${name}. ^^
 hi!!`;
console.log(str2);



