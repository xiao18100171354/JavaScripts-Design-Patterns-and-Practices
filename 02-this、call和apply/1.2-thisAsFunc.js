// 2. 作为普通函数调用
window.name = "globalName";

var getName = function () {
  return this.name;
};

console.log(getName()); // globalName

var myObject = {
  name: "sven",
  getName: function () {
    return this.name;
  },
};

var getName2 = myObject.getName;
console.log(getName2()); // globalName
