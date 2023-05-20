// 3. 作为构造器使用

var MyClass = function (name) {
  this.name = name;
};

var obj = new MyClass("sven");
console.log(obj.name); // sven

// 如果构造器显式返回了一个object类型的对象，那么此次运算的最终会返回这个对象，而不是我们之前期待的this。
var MyClass2 = function () {
  this.name = "sven";
  return {
    name: "anne",
  };
};

var obj2 = new MyClass2();
console.log(obj2.name); // anne

// 如果构造器不显式地返回任务数据，或者是返回一个非对象类型地数据，就不会造成上面的问题。
var MyClass3 = function () {
  this.name = "sven";
  return "anne"; // 返回 string 类型
};

var obj3 = new MyClass3();
console.log(obj3.name); // sven
