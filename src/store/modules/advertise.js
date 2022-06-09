import { useGetAdsListAPI } from '@/api'




const state = {
	
    AdList:[], //廣告List清單
	
};



const getters = {
	 
	// 取得廣告List清單
	getAdList: state => state.AdList,
	
};



const actions = {
     
	async QueryAdsListAPI({ commit }, filterAds) {
		return new Promise((resolve, reject) => {
			useGetAdsListAPI(filterAds)
				.then(response => {
					// console.log('set_AdsList廣告', response.data)
					commit('set_AdsList', response.data);
					resolve(response.data);
				}).catch((error) => {
					reject(error);
				})
		})
	},

}




const mutations = {
    
    // 寫入廣告設定清單
	set_AdsList(state, AdList) {
		state.AdList = AdList;
	},
};




export default {
	state,
	getters,
	actions,
	mutations
};
