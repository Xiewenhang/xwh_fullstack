// class Bar{
//     doStuff(){
//         console.log('stuff');
//     }
// }
// console.log(typeof Bar);
// const b = new Bar();
// b.doStuff();
// console.log(b.constructor === Bar === Bar.prototype.constructor);
// // === Bar.prototype.constructor
var cars =[3,2,4]
var target=6
// var twoSum=
function twoSum(nums, target) {
    var i = 0;
    var j = 0;
    var arr;
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(target==cars[i]+cars[j]&&i!=j)
            {
                arr=[i,j]
                return arr
            }
        }
    }
};
var sum=twoSum(cars,target)
console.log(sum);