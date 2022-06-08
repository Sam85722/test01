import axios from 'axios';
//import store from '@/store'

export function apiTest(){
    // const token = store.getters.getToken;
    return new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: 'https://app.sjen.com.tw/nms/pharmacist-service/self/canned-messages',
            headers: { }
            };

        axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            // console.log(JSON.stringify(response.data.data));

        
            //var axi_data = response.data.data
            //axiosDataList.axi = axi_data;
            //console.log(JSON.stringify(axiosDataList.axi))

            resolve(response.data);
        })
        .catch(function (error) {
            console.log(error);
            reject(error);
        });

    });
}