import axios from "axios";
import store from '@/store'


export function apiGetAdsList(filterAds) {
	// const token = store.getters.getToken;//取得Token
	return new Promise((resolve, reject) => {
		//查詢參數條件
		let data = JSON.stringify(filterAds);   
	 
		// console.log('查詢參數條件',data);
		// console.log('url = ',process.env.VUE_APP_BACKEND_ADS_SERVICE_URL + '/listAds' );
		let config = {
			method: 'POST',
			url: 'https://app.sjen.com.tw/advertise/listAds'  ,
			headers: {
				//"Access-Control-Allow-Origin": "*",	
				"Access-Control-Allow-Origin":"*",			
				"Content-Type": 'application/json' 	 
				// "Authorization": `Bearer ${token}`
			},
			data: data
		};
		
		axios(config).then(function (response) {
			resolve(response.data);
		}).catch(function (error) {
			reject(error)
		})
	});
}
 
