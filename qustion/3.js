

var a = 0xa; // 这是什么？  // 进制   16 0x开头
console.log(typeof a)
var b = 010  // 八进制？
var c = 0b01 // 二进制
console.log(c+3); //转换成十进制

console.log(0.1 + 0.2) // 0.3000000004


// js浮点数类型不精确
// js没有浮点数类型   number   new number() 不适合高精度的运算
    // js 转成二进制的时候  无限的循环  32位  舍弃了一些位
    // 二进制相加  不正确
console.log(Number.parseInt('010',8))
console.log(Number.parseInt("20",2))// NAN

// 跟什么相关？  上溢出  大数字   BigInt(提出)
console.log(99999999999999999) // 100000000000000000
console.log(9999999999999999999999n)