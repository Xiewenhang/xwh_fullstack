// 所有的奖金策略用json object 来表达
const strategies = {
    "S":(salary)=>{return salary*18},//==S(salart){return salary*18},
    "A":(salary)=>{return salary*15},
    "B":(salary)=>{return salary*13},
    "C":(salary)=>{return salary*12},
}
console.log(typeof strategies);
const calculateBounce=(salary,level='C')=>{
    // return level=='A'?salary*13:(level=='B'?salary*15:salary*12);
    return strategies[level](salary);
}
console.log(calculateBounce(22000,'B'));
