// 1. 缓动算法
// 入参：接受 4 个参数，分别代表 动画已消耗的时间、小球原始位置、小球目标位置、动画持续时间
// 返回值：动画元素应该处在的位置

// 封装策略
var tween = {
  linear: function (t, b, c, d) {
    return (c * t) / d + b;
  },
  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  strongEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  strongEaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  sineaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sineaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
};

var Animate = function (dom) {
  this.dom = dom; // 进行运动的 dom 节点
  this.startTime = 0; // 动画开始时间
  this.startPos = 0; // 动画开始时，dom 节点的位置，即 dom 的初始位置
  this.endPos = 0; // 动画结束时，dom 节点的位置，即 dom 的目标位置
  this.propertyName = null; // dom 节点需要被改变的 css 属性名
  this.easing = null; // 缓动算法
  this.duration = null; // 动画持续时间
};

/**
 * start 方法负责启动这个动画
 * @param {*} propertyName 要改变的 css 属性名，比如 ‘left’、‘top’，分别表示左右移动和上下移动
 * @param {*} endPos 小球运动的目标位置
 * @param {*} duration 动画的持续时间
 * @param {*} easing 缓动算法
 */
Animate.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date();
  this.startPos = this.dom.getBoundingClientRect()[propertyName];
  this.propertyName = propertyName;
  this.endPos = endPos;
  this.duration = duration;
  this.easing = tween[easing];

  var self = this;
  var timeId = setInterval(() => {
    if (self.step() === false) {
      clearInterval(timeId);
    }
  }, 19);
};

/**
 * 小球运动的每一帧要做的事情
 * @returns false | undefined
 */
Animate.prototype.step = function () {
  var t = +new Date(); // 取得当前时间戳
  if (t > this.startTime + this.duration) {
    // 说明动画已经结束了
    this.update(this.endPos); // 更新小球的 css 属性值
    return false;
  }
  var pos = this.easing(
    t - this.startTime,
    this.startPos,
    this.endPos - this.startPos,
    this.duration
  ); // pos 为小球当前位置
  this.update(pos); // 更新小球的 css 属性值
};

Animate.prototype.update = function (pos) {
  this.dom.style[this.propertyName] = pos + "px";
};

var div = document.getElementById('div');
var animate = new Animate(div)
animate.start('left', 500, 1000, 'easeIn');
// animate.start('top', 1500, 500, 'easeIn')