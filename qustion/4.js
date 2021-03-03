// [] object Array []   ![]
  // 直观上他是矛盾的
//   类型转换  隐士类型  只有三种   数值  字符串  布尔值
// [] 转换成 boolean
//   什么东西触发类型转换？  ==
//   [] => false Boolean
// console.log([] = true)
console.log({} == {}) //  false
console.log([] == ![]); ///true  所以这个就说0 == 0
console.log(![],'-----',) // 0
console.log(Number([]))   // 显示的类型转换 数字0
console.log(Boolean([]) == Boolean(![]))
