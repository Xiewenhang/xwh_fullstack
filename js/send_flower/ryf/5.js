function cat(name,color){
    this.name=name;//this指向他的实例
    this.color=color;
}
//实例化
var cat1 =new cat("大毛","黑色");
var cat2= new cat("大毛","黑色");
//console.log(cat1.constructor);//构造函数
console.log(cat1.constructor==cat2.constructor);
console.log(cat1 instanceof cat);
console.log(cat2 instanceof cat);
