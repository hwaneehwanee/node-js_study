//배열
var members = ['믹스베리', '블루베리', '딸기'];

console.log(members[1]);

var i=0;

while(i<members.length){
    console.log('array loop', members[i]);
    i++;
}

var roles = {
    'programmer' : 'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
}

console.log(roles.designer);
console.log(roles['designer']);


for(var name in roles){
    console.log('object => ', name, ' value => ', roles[name]);
}

//객체