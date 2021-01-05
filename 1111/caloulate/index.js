//年收入？ 12*salary
//bonus 表现相关
//函数表达式 箭头函数；
//故事场景,默认选择一个值
let calculateBounce;
console.log(typeof calculateBounce);
calculateBounce='1111';
console.log(typeof calculateBounce);
calculateBounce=2;
console.log(typeof calculateBounce);
calculateBounce=true;
console.log(typeof calculateBounce);
calculateBounce=null;
console.log(typeof calculateBounce);
/**
 * @author xwh
 * @data 20-12
 * @function 工资计算
 * @param{salary:number,level:string}
 * @return 总工资 number
 */
calculateBounce=(salary,level='C')=>{
    var sum;
    if(level=='A'){
        sum=salary*17;
    }
    else if(level=='B'){
        sum=salary*15;
    }
    else if(level=='C'){
        sum=salary*14
    }
    else if(level=='D')
    {
        sum=salary*13
    }
return sum;
}
console.log(typeof calculateBounce);
console.log(calculateBounce(22000));
console.log(typeof [1,2,3]);
let item;
item=(sum)=>{
    var a;
}