exports.install = function(Vue, options) {
	/*
		↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		倒计时计算
		↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	
		startDate:开始时间
		endDate:结束时间
		
		实例：
		this.$countDown('2021-09-15 16:00:00','2021-09-15 17:00:00')
		
		结果：
		{lefttime: 3600000, leftd: 0, lefth: 1, leftm: 0, lefts: 0}
	*/
	Vue.prototype.$countDown = function(startDate,endDate) {
		let start = startDate.replace(/-/g, '/')
		let end = endDate.replace(/-/g, '/')
		let nowtime = new Date(start); //获取当前时间
		let endtime = new Date(end); //定义结束时间
		let lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
			leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
			lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24), //计算小时数
			leftm = Math.floor(lefttime / (1000 * 60) % 60), //计算分钟数
			lefts = Math.floor(lefttime / 1000 % 60); //计算秒数
		let arr = {
			lefttime: lefttime, // 剩余时间戳
			leftd: leftd, // 剩余天数
			lefth: lefth, // 剩余小时
			leftm: leftm, // 剩余分钟
			lefts: lefts, // 剩余秒数
		}
		return arr;
	};
	
	
	
	
	/*
		↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		生成id
		↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	
		length:id的长度
		
		实例：
		this.$getId(13)
		
		结果：
		id01vwqV1Vidn
	*/
	Vue.prototype.$getId = function(length) {
		if (length > 0) {
			var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H",
				"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
				"b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
				"u", "v", "w", "x", "y", "z"
			];
			var nums = "";
			for (var i = 0; i < length; i++) {
				var r = parseInt(Math.random() * 61);
				nums += data[r];
			}
			return nums;
		} else {
			return false;
		}
	}
	
	
	
	
	/*
		↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		小程序复制链接 需要保证url是字符串
		↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
		
		url:需要复制的字符串
		
		实例：
		this.$copyUrl('xxx')
		
		结果：
		成功this返回isCopy为true
		失败this返回isCopy为false
	*/
	Vue.prototype.$copyUrl = function(url) {
		let this_ = this;
		//意思是H5端没有这个接口！！！
		uni.setClipboardData({
			data: url, //要被复制的内容
			success: function() {
				this_.isCopy = true;
			},
			fail: function(err) {
				this_.isCopy = false;
			}
		});
	};
	
	
	
	
	/*
		↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		手机号正则
		↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
		
		id:需要匹配的字符串
		
		实例：
		this.$phone('xxx')
		
		结果：
		true或者false
	*/
	Vue.prototype.$phone = function(id) {
		let phone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
		if(phone.test(id)){
			return true;
		} else {
			return false;
		}
	};
	
	
	
	
	/*
		↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		身份证号正则
		↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
		
		id:需要匹配的字符串
		
		实例：
		this.$idCard('xxx')
		
		结果：
		true或者false
	*/
	Vue.prototype.$idCard = function(id) {
		let _IDRe18 = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
		let _IDre15 = /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/;
		// 校验身份证：
		if(_IDRe18.test(id) || _IDre15.test(id)) {
			return true;
		} else {
			return false;
		}
	};
	
	
	
	
	/* 
		↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		合并指定参数相同的数组对象
		↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
		
		arr:需要匹配的数组 数据类型数组包对象
		name:arr内部需要匹配的参数名 数据类型字符串
		arr1:需要匹配的数组 数据类型数组包对象
		name1:arr1内部需要匹配的参数名 数据类型字符串
		
		实例：
		let a = [{name: '明',id: 1},{name: '红',id: 2}];
		let b = [{name: '刘',uid: 3},{name: '红',uid: 2,sex: '女',}];
		console.log(this.$mergeArr(a,'id',b,'uid'))
		
		结果：
		[
			{name: "刘", uid: 3},
			{name: "红", uid: 2, sex: "女", id: 2},
			{name: "明", id: 1}
		]
	*/
	Vue.prototype.$mergeArr = function(arr,name,arr1,name1) {
		let list = arr.reduce((pre,cur)=>{
		    let target=pre.find(ee=>ee[name1] == cur[name])
		    if(target){
		        Object.assign(target,cur)
		    }else{
		        pre.push(cur)
		    }
		    return pre
		},arr1)
		return list;
	};
};
