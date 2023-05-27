// 外部迭代器必须显式地请求迭代下一个元素

var Iterator = function (obj) {
  let current = 0;

  const next = function () {
    current += 1;
  };

  const isDone = function () {
    return current >= obj.length;
  };

  const getCurrItem = function () {
    return obj[current];
  };

  return {
    next,
    isDone,
    getCurrItem,
    length: obj.length,
  };
};

const compare = function (iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    alert("不等");
  }
  while (iterator1.isDone() && iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      alert("不等");
    }
    iterator1.next();
    iterator2.next();
  }
  alert("相等");
};

const iterator1 = Iterator([1, 2, 3]);
const iterator2 = Iterator([1, 2, 3]);
compare(iterator1, iterator2);
