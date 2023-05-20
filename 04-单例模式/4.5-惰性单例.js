// 惰性单例指的是有在需要的时候才创建对象实例。
// 惰性单例是单例模式的重点

// 1. 在页面加载完成后创建好div浮窗
// var loginLayer = (function () {
//   var div = document.createElement("div");
//   div.innerHTML = "我是登录浮窗";
//   div.style.display = "none";
//   document.body.appendChild(div);
//   return div;
// })();

// document.getElementById("loginBtn").onclick = function () {
//   loginLayer.style.display = "block";
// };

// 2. 当用户点击按钮时才开始创建div浮窗，但是失去了单例的效果
// var createLoginLayer = function () {
//   var div = document.createElement("div");
//   div.innerHTML = "我是登录浮窗";
//   div.style.display = "none";
//   document.body.appendChild(div);
//   return div;
// };

// document.getElementById("loginBtn").onclick = function () {
//   var loginLayer = createLoginLayer();
//   loginLayer.style.display = "block";
// };

// 3.
var createLoginLayer = (function () {
  var div;
  return function () {
    if (!div) {
      div = document.createElement("div");
      div.innerHTML = "我是登录浮窗";
      div.style.display = "none";
      document.body.appendChild(div);
    }
    return div;
  };
})();

document.getElementById("loginBtn").onclick = function () {
  var loginLayer = createLoginLayer();
  loginLayer.style.display = "block";
};
