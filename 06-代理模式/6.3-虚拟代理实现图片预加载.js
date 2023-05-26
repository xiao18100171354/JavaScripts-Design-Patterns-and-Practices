var myImage = (function () {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);

  return {
    setSrc: function (src) {
      imgNode.src = src;
    },
  };
})();

myImage.setSrc("图片链接");

// 引入 proxyImage 代理对象
var proxyImage = function () {
  var img = new Image();
  // img 加载成功的回调
  img.onload = function () {
    myImage.setSrc(this.src);
  };

  return {
    setSrc: function (src) {
      myImage.setSrc("虚拟loading图片");
      img.src = src;
    },
  };
};

// 通过 proxyImage 间接访问 myImage。
// 在真正的图片加载好之前，先把img节点的src设置为一张本地的图片。