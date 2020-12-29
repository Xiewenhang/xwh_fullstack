function cat(name,color){
    //new的时候一定会执行cat
    this.name=name;//this指向他的实例
    this.color=color;
    this.type="猫科动物"
    //prototype 要生成的原因
    this.eat=function(){
        console.log('老鼠');
    }

}
//prototype原型对象
cat.prototype.eat=function(){
    console.log("老鼠")
}
cat.prototype.type='猫科动物'
// (this.eat=function(){
//     console.log('老鼠');
// })=类似于=cat.prototype.eat=function（）{
//     console.log('老鼠');
// }
//实例化
//new的执行过程
var cat1 =new cat("大毛","黑色");
var cat2= new cat("二毛","黄色");
//console.log(cat1.constructor);//构造函数
console.log(cat1.constructor==cat2.constructor);
console.log(cat1 instanceof cat);
console.log(cat2 instanceof cat);
console.log(cat1.eat());
