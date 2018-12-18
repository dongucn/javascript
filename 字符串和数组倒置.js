function rev1(char){
	let str = "";
for(let i = char.length - 1 ; i >= 0 ; i--){
	str += char.charAt(i);
}
return str;
}

function rev2(char){
	//"空"将字符串拆分成数组;
	let arr = char.split("");
	//reverse() 方法用于颠倒数组中元素的顺序。
	arr.reverse();
	//join() 方法用于把数组中的所有元素放入一个字符串。
	return arr.join("");
}