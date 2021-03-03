// 隐式类型转换
// 当一侧操作数位String时，会优先将另一侧转换为字符串类型
console.log('1' + 2) // '12'
// 当一侧操作数为Number类型 另一侧会转换成Number
console.log(1 + true) // 2

// 为Number   另一侧为引用类型
console.log(1 + {}); //1[object Object]
console.log(1 + {toString:function(){return 'ddd'}})
// 当对象   在表达式if  ===  数字  字符串  toString（）
// 对象提供value  类型转化
console.log(3*{valueOf:function() {return 5}})


// console.log(3 + {} , 3*{})
console.log({} + {})
