// 同步文件方法
var synchronousFile = function (id) {
  console.log("开始同步文件，id为：" + id);
};

var checkbox = document.getElementsByTagName("input");

for (var i = 0, c; (c = checkbox[i++]); ) {
  c.onclick = function () {
    if (this.checked === true) {
      // 正常同步文件
      //   synchronousFile(this.id);

      // 引入代理后同步文件
      proxySynchronousFile(this.id);
    }
  };
}

// 引入代理后的同步文件方法
var proxySynchronousFile = (function () {
  var cache = [], // 保存一段时间内需要同步的 ID
    timer; // 定时器

  return function (id) {
    cache.push(id);
    if (timer) { // 保证不会覆盖已经启动的定时器
      return;
    }

    timer = setTimeout(() => {
      synchronousFile(cache.join(",")); // 通过代理调用真正的同步文件方法
      clearTimeout(timer);
      timer = null;
      cache.length = 0;
    }, 2000);
  };
})();
