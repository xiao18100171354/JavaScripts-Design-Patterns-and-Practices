// 单例模式的核心就是确保只有一个实例，并提供全局访问。

// 在JS中，全局变量当成单例模式来使用，但是全局变量并不是真正意义上的单例，它只是JS语言的一个特性。
// 至于全局变量为什么可以当作单例模式来使用，因为它符合单例模式的两个条件（唯一和可全局访问）

// 但是在 JS 中，使用全局变量很容易造成命名空间污染的问题，需要加以限制和管理。
// 我们可以使用以下几种方式去相对性降低全局变量带来的命名污染

// 1. 使用命名空间
var namespace = {
  a: function () {
    alert(1);
  },
  b: function () {
    alert(2);
  },
};

// 或者动态创建命名空间
var MyApp = {};

MyApp.namespace = function (name) {
  var parts = name.split(".");
  var current = MyApp;
  for (const i in parts) {
    if (!current[parts[i]]) {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
};

MyApp.namespace("event");
MyApp.namespace("dom.style");

console.dir(MyApp);

// 2. 使用闭包封装私有变量
var user = (function () {
  var __name = "sven",
    __age = 29;
  return {
    getUserInfo: function () {
      return __name + "-" + __age;
    },
  };
})();
