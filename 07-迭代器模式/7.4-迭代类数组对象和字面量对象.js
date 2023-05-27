// 迭代器模式不仅可以迭代数组，还可以迭代一些类数组的对象。
// 如 arguments、{"0": "a", "1":"b"} 等
// 只要被迭代的聚合对象拥有 length 属性而且可以通过下标访问，那么它就可以被迭代。

$.each = function (obj, callback) {
  var value,
    i = 0,
    length = obj.length,
    isArray = isArrayLike(obj);

  if (isArray) {
    for (; i < length; i++) {
      value = callback.call(obj[i], i, obj[i]);
      if (value === false) {
        break;
      }
    }
  } else {
    for (i in obj) {
      value = callback.call(obj[i], i, obj[i]);
      if (value === false) {
        break;
      }
    }
  }
};
