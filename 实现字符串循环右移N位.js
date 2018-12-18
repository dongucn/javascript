//方法1，数组法
function rightchange(char,n){
 	//以"空"转为数组
 	var arr = char.split("");
 	//循环执行右移
 	for(var i = 1 ; i <= n ; i++){
 		arr.unshift(arr.pop());
 	}
 	return arr.join("");
 }

//方法2
 function rightchange(char,n){
	n = n % char.length;	//子串长度，移动n位，等于移动1位
	if(n == 0) return char;	//移动0位，就是返回原字符串	
	return char.substr(-n) + char.substr(0,char.length - n);
}
