const Base_Url = "http://localhost:80"

export const reqeustDataMethod = (options)=> {
	
	return new Promise ((resolve, reject) => {
		uni.request({
			url: Base_Url+options.url,
			method:options.method || 'GET',
			data: options.data || {},
			
			success: (res) => {
				if(res.data.status !== 0) {
					return uni.showToast({
						title: "获取失败",
						icon: "fail",
					})
				}
				resolve(res)
			},
			
			fail: (err) => {
				return uni.showToast({
					title: "请求接口失败",
					icon: "error",
				})
				reject(err)
			}
		})
	})
	
	// return new Promise((resolve,reject)=> {
	// 	uni.request({
	// 		url: Base_Url + options.url,
	// 		method: options.method || 'GET',
	// 		data: options.data || {},
			
	// 		success:(res)=> {
				// if(res.data.status !== 0) {
				// 	return uni.showToast({
				// 		title: "获取失败",
				// 		icon: "fail",
				// 	})
				// }
				// resolve(res)
	// 		},
			
	// 		fail: (err) => {
				// return uni.showToast({
				// 	title: "请求接口失败",
				// 	icon: "error",
				// })
				// reject(err)
	// 		}
	// 	})
	// })
}