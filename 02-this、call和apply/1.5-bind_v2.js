Function.prototype.bind = function () {
  var self = this;
  var context = [].shift.call(arguments);
  var args = [].slice.call(arguments);

  return function () {
    return self.apply(context, [].concat(args, [].slice.call(arguments)));
  };
};

var obj = {
  name: "sven",
};

var func = function (a, b, c, d) {
  console.log(this.name); // sven
  console.log([a, b, c, d]); // [1, 2, 3, 4]
}.bind(obj, 1, 2);

func(3, 4);
