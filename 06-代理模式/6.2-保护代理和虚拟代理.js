// 保护代理和虚拟代理是两种代理模式

// 保护代理
// 代理 B 可以帮助 A 过滤掉一些请求，比如送花的人中年龄太大或者没有宝马车的，这种请求就可以直接在代理 B 处理拒绝掉。
// ! 保护代理用于控制不同权限的对象对目标对象的访问

// 虚拟代理
// 假设现实中的花价格不菲，导致在程序世界里，new Flower 也是一个代价昂贵的操作，
// 那么我们可以把 new Flower 操作交给代理 B 去执行，代理 B 会选择在 A 心情好时在执行 new Flower，这就是虚拟代理
// ! 虚拟代理把一些开销很大的对象，延迟到真正需要它的时候才去创建，代码如下：
var B = {
  receiveFlower: function () {
    A.listenGoodMood(function () {
      var flower = new Flower();
      A.receiveFlower(flower);
    });
  },
};
