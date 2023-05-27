// 迭代器模式就是循环访问聚合对象中的各个元素

// 7.1 jQuery中的迭代器
// $.each([1, 2, 3], function (i, n) {
//   console.log(`当前下标为${i}`);
//   console.log(`当前值为${n}`);
// });

// 7.2 实现自己的迭代器
// each 函数接受 2 个参数，第一个为被循环的对象，第二个为循环中的每一步后将被触发的回调函数
var each = function (ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    callback.call(ary[i], i, ary[i]);
  }
};
each([1, 2, 3], function (i, n) {
  console.log(i, n);
});
