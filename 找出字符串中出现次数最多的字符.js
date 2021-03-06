function maxr(char){
			var a = 0;
			var b = 1;	//b的初始位置就是a的右边1位
			var maxLength = 0; 	//重复的最大的数量
			var maxletter = "";  //重复数量最多的字母

			//循环，直到a指针指向了最后字母
			while(a != char.length - 1){
				//判断，两个指针指向的字母是否一样
				if(char.charAt(b) == char.charAt(a)){
					//两个指针指向的字母是相同的，那么b指针右移
					b++;
				}else{
					//两个指针指向的字母不同
					//和当前最大的进行比较
					if(b - a >= maxLength){
						//两个指针之间的距离比最大的还大，现在的b-a就是最大的距离
						maxLength = b - a;
						maxletter = char.charAt(a);	//a指针指向的就是这个字母
					}
					//让a指针右移
					//b指针也要跟着复位，就是a+1的位置
					a++;
					b = a + 1;
				}
			}
			return maxletter;
		}