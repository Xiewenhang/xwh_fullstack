# js 有没有能
 console.log(a==1 && a==2 && a==3) // ture
 把神三元的所有输出全部照单查收
 null是对象嘛？ typeof  null // object
 7中简单
 JS存在一个bug，最初版本使用的是32位系统
 二进制，前3位来用来标明他是什么类型的
 undifend null 00000000000000
 {} 3位  000  Object
 typeof  三位
 为了性能考虑存变量信息   000 Object
 Object.prototype.toString() // 类型转换

 #  ‘1’.toString()
    String -> Object上的
    Object  是所有对象的原型对象  Array  Function   .... String
    简单数据类型不会有方法
        1. 创建包装类型   new String('1')
        2.调用该实例的方法  '1'.toString   s.toString（）给回去
        3.使命完成   s=null   执行完方法后  立即销毁这个实例
         typeof('1')   String
         3. s = null 有什么用
