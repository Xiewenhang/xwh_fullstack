// 所有的奖金策略用json object 来表达
const strategies = {
    "S":(salary,a)=>{return salary*18+a},//==S(salart){return salary*18},
    "A":(salary,a)=>{return salary*15+a},
    "B":(salary,a)=>{return salary*13+a},
    "C":(salary,a)=>{return salary*12+a},
}
console.log(typeof strategies);
const calculateBounce=(salary,level='C',a)=>{
    // return level=='A'?salary*13:(level=='B'?salary*15:salary*12);
    return strategies[level](salary,a);
}
console.log(calculateBounce(1,'B',1));
  