var googleMap = {
  show: function () {
    console.log("开始渲染谷歌地图");
  },
};

var baiduMap = {
  show: function () {
    console.log("开始渲染百度地图");
  },
};

// 只能满足谷歌地图的渲染，无法渲染其他地图
var renderMap1 = function () {
  googleMap.show();
};

renderMap1();

// 扩展后，通过条件判断，可以同时满足谷歌和百度两个地图的渲染
var renderMap2 = function (type) {
  if (type === "google") {
    googleMap.show();
  } else if (type === "baidu") {
    baiduMap.show();
  }
};

renderMap2("google");
renderMap2("baidu");

// 利用多态的思想，把程序中相同的部分抽象处理
var renderMap3 = function (map) {
  if (map.show instanceof Function) {
    map.show();
  }
};

renderMap3(googleMap);
renderMap3(baiduMap);

var sosoMap = {
  show: function () {
    console.log("开始渲染搜搜地图");
  },
};
renderMap3(sosoMap);
