class Bar{
    doStuff(){
        console.log('stuff');
    }
}
console.log(typeof Bar);
const b = new Bar();
b.doStuff();
console.log(b.constructor === Bar === Bar.prototype.constructor);
// === Bar.prototype.constructor