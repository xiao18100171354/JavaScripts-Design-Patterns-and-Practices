// 策略组
var strategies = {
  S: function (salary) {
    return salary * 4;
  },
  A: function (salary) {
    return salary * 3;
  },
  B: function (salary) {
    return salary * 2;
  },
};

// 环境组
var calculateBonus = function (level, salary) {
  return strategies[level](salary); // 计算奖金的操作委托给策略组
};

console.log(calculateBonus("S", 20000)); // 80000
console.log(calculateBonus("A", 10000)); // 30000
