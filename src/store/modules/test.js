import {useTestAPI} from '@/api'
import swal from 'sweetalert';

const state = {
    test:[],
};

const getters = {
    getTest: state => state.test,
};

const actions = {
    async QueryTest({ commit }, filterTest) {
		return new Promise((resolve, reject) => {
			useTestAPI(filterTest)
				.then(response => {
					commit('set_test', response.data);
					// console.log(response)
					resolve(response.data);
				}).catch((error) => {
					// console.log(error);
					
					// reject(error);
					//
					try {
						if (error.response.status >= 500) {
							// confirm(error.response.status + '伺服器錯誤')
							swal(`${error.response.status}` , '伺服器錯誤')
							reject(error)
							return
						  }
						if (error.response.status >= 400) {
							// confirm(error.response.status + '客戶端錯誤')
							swal(`${error.response.status}` , '客戶端錯誤')
							reject(error)
							return
						  }
					} catch (error) {
						// confirm(error)
						swal(error)
						reject(error)
						return
					}
					//
				})
		})
	},

};

const mutations = {
    set_test(state, test){
        state.test = test;
    },
	
};

export default {
    state,
	getters,
	actions,
	mutations,
};