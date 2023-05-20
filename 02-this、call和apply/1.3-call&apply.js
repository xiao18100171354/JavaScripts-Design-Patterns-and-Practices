// Function.prototype.call 和 Function.prototype.apply 可以动态地改变传入函数的 this

var obj1 = {
  name: "sven",
  getName: function () {
    return this.name;
  },
};

var obj2 = {
  name: "anne",
};

console.log(obj1.getName()); // sven
console.log(obj1.getName.call(obj2)); // anne
