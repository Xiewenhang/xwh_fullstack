//函数 对象
// js 类型
const arr=[1,2,3];// object
const obj={a:1};
obj.b=2;
arr.push(3);//在写入了一个数据
console.log(arr);
console.log(obj);
console.log(typeof arr);
let a;//声明一个变量 undefind  类型未定义
console.log(typeof a);
a=1;
console.log(typeof a);
function Cart(){
    this.type="择耳";
}
Cart.prototype.sayHello=function(){
    console.log('喵');
}