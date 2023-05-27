// var cache = [];
// var miniConsole = {
//   log: function () {
//     var args = arguments;
//     cache.push(function () {
//       return miniConsole.log.apply(miniConsole, args);
//     });
//   },
// };
// miniConsole(1);

// 这是当用户按下 F12 的时候，开始真正加载 miniConsole.js 的代码
// var handler = function (ev) {
//   console.log(111);
//   if (ev.keyCode === 113) {
//     var script = document.createElement("script");
//     script.onload = function () {
//       for (var i = 0, fn; (fn = cache[i++]); ) {
//         fn();
//       }
//     };
//     script.src = "./miniConsole.js";
//     document.getElementsByTagName("head")[0].appendChild(script);
//   }
// };

// document.body.addEventListener("keydown", handler, false);

// 整合上面 miniConsole 代理对象的代码
var miniConsole = (function () {
  var cache = [];
  // 这是当用户按下 F12 的时候，开始真正加载 miniConsole.js 的代码
  var handler = function (ev) {
    if (ev.keyCode === 113) {
      var script = document.createElement("script");
      script.onload = function () {
        for (var i = 0, fn; (fn = cache[i++]); ) {
          fn();
        }
      };
      script.src = "miniConsole.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  };
  document.body.addEventListener("keydown", handler, false);

  return {
    log: function () {
      var args = arguments;
      cache.push(function () {
        return miniConsole.log.apply(miniConsole, args);
      });
    },
  };
})();

miniConsole.log(11)