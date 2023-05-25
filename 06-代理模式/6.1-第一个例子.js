// 不用代理
// var Flower = function () {};

// var xiaoming = {
//   sendFlower: function (target) {
//     var flower = new Flower();
//     target.receiveFlower(flower);
//   },
// };

// var A = {
//   receiveFlower: function (flower) {
//     console.log("收到花" + flower);
//   },
// };

// xiaoming.sendFlower(A);

// 引入代理
// var Flower = function () {};

// var xiaoming = {
//   sendFlower: function (target) {
//     var flower = new Flower();
//     target.receiveFlower(flower);
//   },
// };

// var B = {
//   receiveFlower: function (flower) {
//     A.receiveFlower(flower);
//   },
// };

// var A = {
//   receiveFlower: function (flower) {
//     console.log("收到花" + flower);
//   },
// };

// xiaoming.sendFlower(B);

// 逻辑稍微复杂一点
var Flower = function () {};

var xiaoming = {
  sendFlower: function (target) {
    var flower = new Flower();
    target.receiveFlower(flower);
  },
};

var B = {
  receiveFlower: function (flower) {
    A.listenGoodMood(function () {
      A.receiveFlower(flower);
    });
  },
};

var A = {
  receiveFlower: function (flower) {
    console.log("收到花" + flower);
  },
  listenGoodMood(fn) {
    setTimeout(function () {
      fn();
    }, 10000);
  },
};

xiaoming.sendFlower(B);
