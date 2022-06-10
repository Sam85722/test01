import store from '@/store';
// import {reactive,ref} from 'vue'


export function adsParament() {
    //---------------廣告設定查詢參數------------------
    
    const filterAds = {        
      "current_page": 1,//頁碼
      "per_page": 5,//每頁數量
      "order": "ID", //key=id
      "desc": "desc", //由大到小    
      "id":-1,
      "name":"",//廣告名稱"父親節促銷11",
      "type":"",//版面代號 :"3",
      "store_id":"",//分店代號 "0", 
      "start_date":"",//上架日期 "2022-05-01",
      "end_date":"",//下架日期 "2022-12-31",
      "promotion_id":"",//促銷代號 "0",
      "create_date":"",//建檔日期 "2022-05-11 18:22:27",
      "pid":"",//建檔人員 "test", 
      "content":"",//廣告描述內容 "", 
      "customer_no":"",//客戶編號 "00001894"  
    };
    
    
    //---------------廣告LIST Data---------------------
    // const AdsListData = reactive({
    //   data: []
    // });
    
  
    //---------------分頁元件-專用-----------------
    const pages = reactive({
      data: {
        current_page: 1, //頁碼
        last_page: 0, //最後一頁
        next_page: 0, //下一頁
        per_page: 5,//每頁數量
        prev_page: 0,//上一頁
        total: 0,
      }
    })
    

    
    return { 
      filterAds,
      // AdsListData,
      pages};
  }

