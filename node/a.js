module.exports = {
    add:function (a,b) {
        return a+b;
        
    },
    minus: function(a,b){
        return a-b;
    },
}
// 模块在别的地方的调用，需要先实例化一个对象
// const modA = require('./a.js');后面为该文件的地址
