// 有哪些情况的是undifind
let a;//声明 没有赋值
// 变量声时，js类型是有值来决定的  1
console.log(typeof a);// undifind
//函数没有返回值 2
const fnNoReturn = () =>{};
console.log(fnNoReturn(),'2');
// 参数不传值  3
const fn = (b) =>{
    // 一运行就有的 this-> 指针对象 指向一个对象
    // console.log(arguments);
    console.log(typeof b);
}
console.log(fn(1,2,3));
// 
const o ={
    c :  2,
}
console.log(o.d,'4');

//console.log(zr);// 语法错误
console.log(null == undefind);
console.log(null === undefind);
