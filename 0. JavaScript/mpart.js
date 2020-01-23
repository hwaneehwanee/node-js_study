var M = {
    v: 'v',
    f: function(){
        console.log(this.v);
    }
}

//객체M을 외부에서도 사용할수 있도록 함.
module.exports = M;

