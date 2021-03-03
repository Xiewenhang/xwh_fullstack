// JS类型转换
// 只有三种  转换成数字
//          转换成布尔值
//          转换成字符串
// 隐士类型转化



// 显示类型转化
let obj = {name: 'obj'}; // 引用类型
console.log(obj.toString()); // [object Object]  || null
// console.log(typeof null);
console.log(Object.prototype.toString.call(null));

// 不可运行  '1'简单数据类型   .toString() 新手
// 1.  谁的prototype？String  引用类型？    转换
//  string 是简单类型，  什么类型  我们忽略了？(区别于引用类型)
//  Js 提供了 Number() String()  Boolean()  包装类型
//    为了方便
// 字符串  对象
'1'.toString(); // 可执行嘛？  为什么？  在执行的瞬间
// 立即
// var s = new Object('1')
// // console.log(s)
// s = null  // 清空
//  // symbol   BigInt
// // var s= new Object('1')  //类型转换

var s1 = 'sj'
console.log(typeof s1)
console.log(s1.toString()) // 暂时的
s1.coll = 'sdf' // 对象   动态给对象设置属性
console.log(s1.coll) //undifind