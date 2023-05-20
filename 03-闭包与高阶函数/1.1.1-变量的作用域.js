/**
 * 1.当在函数中声明一个变量的时候，如果该变量前面没有带上关键字 var ，这个变量就会变成全局变量，
 * 这当然是一种容易造成命名冲入的做法。
 * 2.使用 var 关键字在函数中声明一个变量，这时候的变量即是局部变量，
 * 只有在该函数内部才能访问到这个变量，在函数外部是访问不到的。
 */

var func = function () {
  var a = 1;
  console.log(a); // 1
};
func();
// console.log(a); // a is not defined

/**
 * 在JS中，函数可以创造函数作用域，在函数里面可以看到函数外面的变量，但是函数外不能看到函数内的变量。
 * 变量的搜索从内到外，而不是从外到内：
 *     在函数中搜索一个变量时，如果该函数内并没有声明这个变量，那么此次搜索的过程会随着代码执行环境
 *     创建的作用域链往外层逐层搜索，一直搜索到全局对象为止。
 */

var a = 1;
var func1 = function () {
  var b = 2;
  var func2 = function () {
    var c = 3;
    console.log(b); // 2
    console.log(a); // 1
  };

  func2();
  //   console.log(c); // ReferenceError: c is not defined
};

func1();
