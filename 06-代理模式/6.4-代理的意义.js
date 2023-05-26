// 不使用代理的预加载图片实现
var MyImage = function () {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  var img = new Image();
  img.onload = function () {
    imgNode.src = img.src;
  };

  return {
    setSrc: function (src) {
      imgNode.src = "本地图片";
      img.src = src;
    },
  };
};

//! 单一职责原则
// 为了说明代理的意义，需要引入面向对象设计的原则 -- 单一职责原则
// 单一职责原则指的是，就是一个类（通常也包括对象和函数）而言，应该仅有一个引起它变化的原因。
// 如果一个对象承担了多项职责，就意味着这个对象将变得巨大，引起它变化的原因可能会有多个。
// 面向对象设计鼓励将行为分布到细粒度的对象之中，如果一个对象承担的职责过多，等于把这些职责耦合到了一起，
// 这种耦合会导致脆弱和低内聚的设计。
// 从而当变化发生时，设计可能会遭到意外的破坏。
// 职责被定义为“引起变化的原因”

// 现在我们回来讲一下上面那段“不使用代理的预加载图片代码实现”
// 上段代码中的 MyImage 对象，它除了负责给 img 节点设置 src 外，还要负责预加载图片。
// 我们在处理其中一个职责时，有可能因为其强耦合性影响另外一个职责的实现。