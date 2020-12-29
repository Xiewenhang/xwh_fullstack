//es6手册
class point{
constructor(x,y)
{
    this.x = x;
    this.y = y;
}
toString() {
    return '(' + this.x + ',' + this.y + ')';
}
}

//js里面没有类，class只是语法糖
console.log(typeof point);