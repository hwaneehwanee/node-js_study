// 데이터와 처리 방법을 담는 그릇으로서 객체
var v1 = 'v1';
// 10000줄의 변수선언 코드
v1 = 'egoing';
var v2 = 'v2';

//서로 비슷한 변수를 객체안에 모아둔다. (폴더로 파일을 정리정돈하는것과 같은 상황)
var o = {
    v1: 'v1',
    v2: 'v2'
}

function f1(){
    console.log(o.v1);
}

function f2(){
    console.log(o.v2);
}

//서로 연관된 값가 함수를 객체에 정리정돈할수 있다.
var o2 = {
    v1: 'v1',
    v2: 'v2',
    f1: function(){
        console.log(this.v1);
    },
    f2: function(){
        console.log(this.v2);
    }
}
o2.f1();
o2.f2();