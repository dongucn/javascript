//Javascript获取数组中最大和最小值

// 1.排序法
var arr = [10,1,2,3,4,5,6,7,8,9];
arr.sort(function (a, b) {
  return a-b;
});
var min = arr[0];  
var max = arr[arr.length - 1];


// 2.假设法
// 假设当前数组中的第一个值是最大值，然后拿这个最大值和后面的项逐一比较，如果后面的某一个值比假设的值还大，说明假设错了，我们把假设的值进行替换。最后得到的结果就是我们想要的。
var arr = [10,1,2,3,4,5,6,7,8,9];
// 获取最大值：
var max = arr[0];
for(var i = 1; i < arr.length; i++) {
   var cur = arr[i];
   cur > max ? max = cur : null
}
// 获取最小值：
var arr = [10,1,2,3,4,5,6,7,8,9];
var min = arr[0];
for(var i = 1; i < arr.length; i++) {
  var cur = arr[i];
  cur < min ? min = cur : null
} 


// 3. 使用 Math 中的 max/min 方法,可以使用apply来实现。apply传入的是一个数组。
var arr = [10,1,2,3,4,5,6,7,8,9];
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);


// 4. 使用ES6的扩展运算符
 var arr = [10,1,2,3,4,5,6,7,8,9];
 console.log(arr.Math(...arr)); 