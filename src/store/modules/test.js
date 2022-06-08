import {useTestAPI} from '@/api'

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
					resolve(response.data);
				}).catch((error) => {
					reject(error);
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