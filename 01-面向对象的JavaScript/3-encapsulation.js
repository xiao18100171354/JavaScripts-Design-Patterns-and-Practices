// 封装：在其他语言如Java中，封装数据是由语法解析来实现的，
// 这些语言提供了 private、public、protected等关键字来提供不同的访问权限。
// 封装的目的是将信息隐藏，封装应该被视为“任何形式的封装”。

// 早期JavaScript中并没有提供对这些关键字的支持，
// 我们可以通过变量的作用域来实现封装特性，但且只能模拟 private和public这两中特性。
var myObject = (function () {
  var _name = "sven"; // 私有(private)属性

  return {
    getName: function () {
      // 公开(public)方法
      return _name;
    },
  };
})();

console.log(myObject.getName()); // sven
console.log(myObject._name); // undefined

// 在ES6中，还可以通过Symbol创建私有属性。
