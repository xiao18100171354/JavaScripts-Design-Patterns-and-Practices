// 在4.2中，我们使用了自执行匿名函数和闭包实现了“透明”的单例模式
// 在自执行匿名函数中返回的真正的 Singleton 构造方法 CreateDiv，并且把 instance 封装了起来
// 这无疑是增加了代码的复杂度

// 1. 把负责管理单例的代码提取出来，它就是一个普通的创建div的类
var CreateDiv = function (html) {
  this.html = html;
  this.init();
};

CreateDiv.prototype.init = function () {
  var div = document.createElement("div");
  div.innerHTML = this.html;
  document.body.appendChild(div);
};

// 2. 引入代理类 ProxySingletonCreateDiv
var ProxySingletonCreateDiv = (function () {
  var instance;
  return function (html) {
    // if (instance) {
    //   return instance;
    // }

    // return (instance = new CreateDiv(html));

    if (!instance) {
      instance = new CreateDiv(html);
    }

    return instance;
  };
})();

var a = new ProxySingletonCreateDiv("sven1");
var b = new ProxySingletonCreateDiv("sven2");

alert(a === b);
