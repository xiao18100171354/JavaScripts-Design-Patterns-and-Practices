// 奖金根据工资基数和绩效等级得出

// 1. 最初代码实现
var calculateBonus = function (performanceLevel, salary) {
  if (performanceLevel === "S") {
    return salary * 4;
  }

  if (performanceLevel === "A") {
    return salary * 3;
  }

  if (performanceLevel === "B") {
    return salary * 2;
  }
};

calculateBonus("B", 20000); // 40000
calculateBonus("S", 6000); // 24000

// 缺点
// 1. calculateBonus 函数比较庞大，包含了大量的 if-else 语句
// 2. calculateBonus 函数缺乏扩展性，如果增加了一种新的绩效C，或者想改变绩效S的奖金系数为5，则需要深入 calculateBonus 进行修改
// 3. 复用性差

// 2. 使用组合函数重构代码
var performanceS = function (salary) {
  return salary * 4;
};

var performanceA = function (salary) {
  return salary * 3;
};

var performanceB = function (salary) {
  return salary * 2;
};

var calculateBonus = function (performanceLevel, salary) {
  if (performanceLevel === "S") {
    return performanceS(salary);
  }

  if (performanceLevel === "A") {
    return performanceA(salary);
  }

  if (performanceLevel === "B") {
    return performanceB(salary);
  }
};

// 缺点：calculateBonus 函数还是很庞大且扩展性也不大

// 3. 使用策略模式重构代码
// 3.1 策略类
var performanceS = function () {};
performanceS.prototype.calculate = function (salary) {
  return salary * 4;
};

var performanceA = function () {};
performanceS.prototype.calculate = function (salary) {
  return salary * 3;
};

var performanceB = function () {};
performanceS.prototype.calculate = function (salary) {
  return salary * 2;
};

// 3.2 环境类
var Bonus = function () {
  this.salary = null; // 工资
  this.strategy = null; // 绩效等级对应的策略对象
};

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary; // 设置员工的工资
};

Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy; // 设置员工绩效等级对应的策略对象
};

Bonus.prototype.getBonus = function () {
  if (!this.strategy) {
    throw new Error("未设置 strategy 属性");
  }
  return this.strategy.calculate(this.salary); // 把计算奖金的操作委托给对应的策略对象
};

var bonus = new Bonus();

bonus.setSalary(10000);
bonus.setStrategy(new performanceS());
console.log(bonus.getBonus()); // 40000

bonus.setStrategy(new performanceA());
console.log(bonus.getBonus()); // 30000