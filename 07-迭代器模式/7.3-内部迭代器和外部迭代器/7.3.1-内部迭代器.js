// 内部迭代器
// 像我们在 7.2 中手写的 each 迭代器函数，就是一个内部迭代器
// 它的内部已经定义好了迭代规则，完全由它接手整个迭代过程，外部只需要一次初始调用就好了，用户无需关心迭代器内部的实现
// 但是这也是它的缺点，正由于内部迭代器的迭代规则已经被提前规定，上面的 each 函数就无法同时迭代2个数组了

// 当我们要判断两个数组中元素的值是否完全相等时，如果不改写 each 函数本身的代码，
// 就只能从 each 的回调函数中入手

var compare = function (ary1, ary2) {
  if (ary1.length !== ary2.length) {
    throw new Error("ary1 和 ary2 不相等");
  }
  each(ary1, function (i, n) {
    if (n !== ary2[i]) {
      throw new Error("ary1 和 ary2 不相等");
    }
  });
  alert(" ary1 和 ary2 相等");
};
