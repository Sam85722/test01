<template>
  <div class="advertise-management-list">
          
          <!--  -->
          

            <div style="display: inline; padding-top: 0px; text-align: right">
            <el-pagination
              background
              layout=" total, jumper, prev, pager, next, sizes"
              @current-change="handleChangePages"
              :page-size="pages.data.per_page"
              :page-sizes="[5, 10, 15, 20]"
              :current-page="pages.data.current_page"
              @size-change="handleSizeChange"
              :total="pages.data.total"
            >
            </el-pagination> 
            </div>
          

          <!--  -->


          <el-table
            :data="advertiseList.data"         
            @select="HandleSelectChange" 
            border
            stripe
            style="width: 100%"
          >
            <el-table-column  sortable  min-width="10%" label="圖片" align="center">
              <template #default="scope">
                <img
                  :src="scope.row.picture"
                  style="max-height: 100%; max-width: 100%; width: 150px;"
                />
              </template>
            </el-table-column>

            <el-table-column
              sortable
              min-width="10%"
              label="建立日期"
              prop=""
            >
              <template #default="scope">
                
                  <!-- <el-icon><timer /></el-icon>
                  <span class="aaa" readonly style="margin-left: 10px">{{ scope.row.create_date }}</span> -->
                  <el-date-picker
                    type="date"
                    v-model="scope.row.create_date"
                    format="YYYY-MM-DD"
                    readonly
                    disabled
                  >
                  </el-date-picker>
                  
              </template>
            </el-table-column>
            <el-table-column
              sortable
              min-width="10%"
              label="廣告名稱"
              prop="name"
            />
            <el-table-column
              sortable
              min-width="10%"
              label="版面名稱"
              prop="type_name"
            />
            <el-table-column
              sortable
              min-width="10%"
              label="上架日期"
              prop=""
            >
              <template #default="scope">
                
                  <!-- <el-icon><timer /></el-icon>
                  <span class="aaa" readonly style="margin-left: 10px">{{ scope.row.create_date }}</span> -->
                  <el-date-picker
                    type="date"
                    v-model="scope.row.start_date"
                    format="YYYY-MM-DD"
                    readonly
                    disabled
                  >
                  </el-date-picker>
              </template>
            </el-table-column>

            <el-table-column
              sortable
              min-width="10%"
              label="下架日期"
              prop=""
            >
              <template #default="scope">
                
                  <!-- <el-icon><timer /></el-icon>
                  <span class="aaa" readonly style="margin-left: 10px">{{ scope.row.create_date }}</span> -->
                  <el-date-picker
                    type="date"
                    v-model="scope.row.end_date"
                    format="YYYY-MM-DD"
                    readonly
                    disabled
                  >
                  </el-date-picker>
              </template>
            </el-table-column>
            <el-table-column  min-width="10%" label="編輯">
              <template #default="scope">
                <AdvertiseEditPage 
                  :id="scope.row.id"
                  :filterSlideShowPictures="filterSlideShowPictures"
                />
                <el-button type="danger" size="mini" @click="HandleJump"
                >新增</el-button
              >
              </template>
            </el-table-column>

            <el-table-column  min-width="10%" label="刪除">
              <template #default="scope">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="刪除第二螢幕廣告設定"
                  placement="right"
                >
                  <el-button
                    type="danger"
                    size="mini"
                    @click="DeleteSlideShowPictures(scope.row.id)"
                  >
                    刪除
                  </el-button>
                </el-tooltip>
              </template>
            </el-table-column>


          </el-table>

          <el-button @click="Click" style="color:red;">點擊載入</el-button>
          <el-button @click="Render" style="color:blue;">渲染畫面</el-button>
  </div>
</template>

<script>
import {onMounted, reactive } from "vue";

// import { watch } from "vue";


import store from "@/store";
// import axios from "axios";
// import router from '@/router'
 
// import { useAdsParament, } from "@/modules";



// 廣告維護

// import states from "@/assets/advertise.json";
export default {
  
    setup() {
      const advertiseList =  reactive({data:[]})


      // const { filterAds, pages } = useAdsParament();

      const filterAds = {
          "current_page": 1, //頁碼
          "per_page": 5, //每頁數量
          "order": "ID", //key=id
          "desc": "desc", //由大到小
          "id": -1,
          "name": "", //廣告名稱
          "type": "", //版面代號
          "store_id": "", //分店代號
          "start_date": "", //上架日期 "2022-05-01"
          "end_date": "", //下架日期 "2022-12-31"
          "promotion_id": "", //促銷代號 "0"
          "create_date": "", //建檔日期 "2022-05-11 18:22:27"
          "pid": "", //建檔人員 "test"
          "content": "", //廣告描述內容 ""
          "customer_no": "" //客戶編號 "00001894"
        }
 

      onMounted(() => { 
        // advertiseList.data = states.data
        // console.log(states)
      });
//   
      const Click = () => {
        

        store.dispatch("QueryAdsListAPI", filterAds);
      }
      
      const Render = () => {
        var list= store.getters.getAdList;
        console.log(list)
        advertiseList.data = list;
      }
      


     
      


      // 分頁處理
      const handleChangePages = (currentPage) => {
        filterAds.current_page = currentPage; //頁碼
        pages.data.current_page = currentPage; 
        // handleLoadDb();
      };

      // 改變分頁數量
      const handleSizeChange = (per_page) => {
        pages.data.current_page = 1; //目前所在頁數
        filterAds.current_page = 1; //目前所在頁數
        filterAds.per_page = per_page; //每頁數量
        // handleLoadDb();
        };


    
    const pages = {
      data: {
        'current_page': 1, //頁碼
        'last_page': 0, //最後一頁
        'next_page': 0, //下一頁
        'per_page': 5,//每頁數量
        'prev_page': 0,//上一頁
        'total': 0,
      }
    }


    return{
      advertiseList,
      //
      Click,
      Render,
      //
      pages,
      //
      handleChangePages,
      handleSizeChange,

      

    }
  }
    
}
</script>

<style>

</style>