- 函数表达式
    js 变量或常量的类型不需要声明
    let a:string = "hello"；
    js是弱类型语言，变量的类型是有值去决定的
        写法：let item;
                console.log(typeof item);
                item=(sum='30')=>{
                    return sum;
                }
                console.log(typeof item);
                console.log(item());
- js类型：
    1.undefind 未定义 类型没有被决定
    2.null 为空
    3.number
    4.string
    5.boolean 布尔类型
以上是简单数据类型 
    6.函数 数组 对象 Object
    7.symbol
- 变量的值由值来决定
    let func=（）=>{} 优雅
- es6 函数的参数可以设定给默认值
- === 除了值外类型也要相等
- 为什么要写注释？1.好的习惯 2.好协做
- 策略模式
    在玩游戏时，升级包
    决策者和执行人分离，适合大项目
    js用一个json object就实现了策略模式,
