// 多态：同一操作作用与不同的对象上面，可以产生不同的解释和不同的执行结果

// var makeSound = function (animal) {
//   if (animal instanceof Duck) {
//     console.log("嘎嘎嘎");
//   } else {
//     console.log("咯咯咯");
//   }
// };

// var Duck = function () {};
// var Chicken = function () {};

// makeSound(new Duck());
// makeSound(new Chicken());

// 将“做什么”和“谁去做以及怎么做”分离开来，也就是将“不变的事物”和“可能改变的事物”分离
// 以上代码中，“不变的”是动物会叫，但是不同类型的动物具体是怎么叫是“可变的”。

// 把不变的部分隔离出来，把可变的部分封装起来，即“开发-封闭”原则

// 以下是改写后的代码：
var makeSound = function (animal) {
  animal.sound();
};

var Duck = function () {};
Duck.prototype.sound = function () {
  console.log("嘎嘎嘎");
};
var Chicken = function () {};
Chicken.prototype.sound = function () {
  console.log("咯咯咯");
};

makeSound(new Duck());
makeSound(new Chicken());

// 如果后续我们要加狗叫这个动作
var Dog = function () {};
Dog.prototype.sound = function () {
  console.log("汪汪汪");
};
makeSound(new Dog());
