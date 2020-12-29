// @param{*}o
// @param{any} o
// @return boolean
const isTypeof=(o,type)=>{
    //打补丁
    if(['number','boolean','function','string'].indexOf(type)>0){
        return typeof o===type;//indexOf 判断元素是否在数组内 在就>1 不在输出-1
    }
    return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0;
    //console.log('是对象')
}
let a=[1,2,3];
//let a="hello";
//let a;
//let a=null;//宁缺
//null array 是有问题的
//console.log(typeof a);
console.log(isTypeof (a,'array'));