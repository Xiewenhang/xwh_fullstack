- 阮一峰
 1.js的变量数据类型由值来决定，
    常量的话，es6以前没有常量 var
    - 类型不可改变
    - 简单类型的值不可变，复杂数据类型的值是可以改变的
    - 数值型 字符串 布尔值 undefined null symbol 对象:（数组，函数)
2.typrof [1,2,3] 如何知道是数组？
     区分简单数据类型和复杂数据类型
     复杂数据类型中function
     typeof 可以正确（细致） 得到数据类型
     number string null boolean undefined symbol object（array，function）
3.Object.prototype.toString.call()
    Object 是谁？是所有对象的原型对象？这种机制怎么构建起来的？
    prototype 啥玩意
    call 借
    