// 丢失的this

// example 1
var obj = {
  name: "sven",
  getName: function () {
    return this.name;
  },
};

var getName = obj.getName;
console.log(getName()); // undefined

// example 2
var getId = function (id) {
  return document.getElementById(id);
};

getId("div1");
