//常用法
var str1;
var str2;
ar str;
for(var i = 1 ; i <= 5 ; i++){
	str1 = repeat(" ",5 - i);
	str2 = repeat("*",2 * i - 1);
	str = str1 + str2;
	console.log(str);
}
		
		
		//二分法
		function repeat(char,n){
			var str = "";
			while(true){
				if(n % 2 == 1){
				//奇变偶不变
				str += char;
				}
				//验证
				if(n == 1 || n == 0){
					break;
				}
				//改变n的值
				n = parseInt(n / 2);
				//每次循环，char都要倍增
				char = char + char;
			}
			return str;
		}
