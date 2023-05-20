// 4.1中，我们实现了 Singleton 类，并且实现了一个标准的单例模式。
// 但是有一个问题，就是使用者在使用 Singleton 类的时候，必须知道它是一个单例类，
// 因为使用它跟以往通过 new 关键字的方式获取对象不同，而是使用 Singleton.getInstance 方法来获取对象
// 所以 4.1 中的 Singleton 类 “不透明”
// 下面来实现一个透明的单例模式：

const CreateDiv = (function () {
  var instance;

  var CreateDiv = function (html) {
    if (instance) {
      return instance;
    }

    this.html = html;
    this.init();

    return (instance = this);
  };

  CreateDiv.prototype.init = function () {
    var div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };

  return CreateDiv;
})();

const a = new CreateDiv("sven1");
const b = new CreateDiv("sven2");

alert(a === b);
