//函数是天生可以复用的
//let a="hello";
//let a;
//let a=null;//宁缺
//null array 是有问题的
//console.log(typeof a);
//如何复用 
function cat(name,color){
    return{
        name,
        color
    }
}
var cat1=cat("大毛","黄色");
var cat2=cat("二毛","黑色");
