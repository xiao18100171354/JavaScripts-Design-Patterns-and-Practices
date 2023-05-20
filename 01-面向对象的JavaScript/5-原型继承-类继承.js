var A = function () {};
A.prototype = { name: "sven" };
var a = new A();

var B = function () {};
B.prototype = a;

var b = new B();
console.log(b.__proto__ === a);
console.log(b.name); // sven

// 以上代码执行的时候，引擎做了下面这些事情：
// 1. 首先，尝试遍历对象b中的所有属性，但是没有找到name这个属性。
// 2. 查找name属性的请求被委托给b对象的构造器的原型，它被b.__proto__记录着并且指向B.prototype
//    而B.prototype被设置为一个通过new A()创建出来的对象。
// 3. 在该对象中还是没有找到了name属性，于是请求继续被委托给这个对象的构造器的原型A.prototype
// 4. 在A.prototype中找到了name属性，并返回它的值

// 继承总是发生在对象和对象之间
