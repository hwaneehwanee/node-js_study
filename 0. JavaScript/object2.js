/**
 * 값으로서 함수
 */

 //일반적인 함수선언
 function f1(){
     console.log(1+1);
     console.log(1+2);
 }
 
 //조건문은 값이 될수 없다.
 //var i = if(true){console.log(1)}
 //var i = while(true){console.log(1)}

 //값으로서 함수
 var f = function(){
    console.log(1+1);
    console.log(1+2);
 }
 console.log(f);
 f();

 //배열의 원소로서 함수도 사용 가능.
 var a = [f];
 a[0]();

 //객체의 속성으로서 함수도 사용 가능.
 var o = {
     func: f
 }
 o.func();