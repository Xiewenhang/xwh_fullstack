// var a = [1,2,3];
// a.join = a.shift; 其中一种
// && 与

// 对 象  类型转化 1
const a = {
    i: 1,
    valueOf: () => {
        return a.i++;
    }
}
console.log(a==1 && a==2 && a==3) // true