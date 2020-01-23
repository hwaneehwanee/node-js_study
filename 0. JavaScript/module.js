/**
 * 모듈의 형식, 객체도 많아지면 정신없어지기 때문에 정리정돈이 필요한 더 큰틀이 필요.
 */
//  var M = {
//      v: 'v',
//      f: function(){
//          console.log(this.v);
//      }
//  }

//외부모듈을 가져온다.
var part = require('./mpart.js');
console.log(part);
part.f();

