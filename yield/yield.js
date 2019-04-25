function* outer() {
    yield 'begin';

    /*
     * 这行等价于 yield 'inner';就是把inner里面的代码替换过来
     * 同时获得的rt刚好就是inner的返回值
     */
    var rt = yield inner();
    console.log(rt);  // -> 输出：return from inner

    yield 'end';
}

function* inner() {
    yield 'inner';
    yield 'inner step 2';
    return 'return from inner';
}

console.log("var it = outer(), v; ->")
var it = outer(), v;

console.log("v = it.next().value; ->")
v = it.next().value;
console.log(v);            // -> 输出：begin

console.log("v = it.next().value; ->")
v = it.next().value;
console.log(v);            // -> 输出：inner

console.log("v = it.next().value; ->")
v = it.next().value;
console.log(v);            // -> 输出：end


v = it.next().value;
console.log(v);            // -> 输出：end

v = it.next().value;
console.log(v);            // -> 输出：end