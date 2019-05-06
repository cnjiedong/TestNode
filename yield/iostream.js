var fs = require('fs')

var contents = fs.readFileSync('nodetest.txt')
//fs.writeFileSync('nodetest.txt','this is a text content for testing node.js')
console.log(contents)
var var1 = 2;
{
    let var1 = 3;
    console.error(var1);
}

global.var2=50;
var var2 = 100;
{
    var var2 = 200;
}
console.log(var2);
let count = 0
function fn(){
    var msg = count + " : this is a message inside function";
    console.log(msg);
    let t = setInterval(fn, 1000);
    count++;
    if(count == 10000){
        console.info("done, eixt!")
        process.exit(0)
    }
}
console.time("定时器");

let t1 = setInterval(fn, 1000);
let t2 = setInterval(fn, 1000);
let t3 = setInterval(fn, 1000);
let t4 = setInterval(fn, 1000);

//console.log(global)
//clearInterval(t1);
console.timeEnd("定时器")