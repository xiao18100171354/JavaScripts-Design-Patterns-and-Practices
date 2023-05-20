var obj = { name: "sven" };
var A = function () {};
A.prototype = obj;

var a = new A();
console.log(a.name); // sven;

// 上面这段代码执行的时候，引擎做了下面这些事情：
// 1. 首先尝试遍历对象 a 中的所有属性，但没有找到 name 属性
// 2. 查找 name 属性的这个请求，被委托给对象 a 的构造器的原型，它被 a.__proto__ 记录着并且指向 A.prototype，
//    而 A.prototype 被设置为对象 obj
// 3. 在对象 obj 中找到了 name属性，并返回它的值
