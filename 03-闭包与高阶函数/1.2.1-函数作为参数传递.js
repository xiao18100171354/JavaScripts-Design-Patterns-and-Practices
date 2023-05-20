// 1. 回调函数

var getUserInfo = function (userId, callback) {
  $.ajax("http://www.baidu.com", function (data) {
    if (typeof callback === "function") {
      callback(data);
    }
  });
};

getUserInfo(13137, function (data) {
  console.log(data.username);
});

// 2. 委托
// var appendDiv = function () {
//   for (let i = 0; i < 100; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = i;
//     document.body.appendChild(div);
//     div.style.display = "none";
//   }
// };

// appendDiv();

var appendDiv = function (callback) {
  for (let i = 0; i < 100; i++) {
    var div = document.createElement("div");
    div.innerHTML = i;
    document.body.appendChild(div);
    if (typeof callback === "function") {
      callback(div);
    }
  }
};

appendDiv(function (node) {
  node.style.display = "none";
});
