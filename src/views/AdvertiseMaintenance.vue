<template>
  <div class="advertise-management-list">
          
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

          <el-button @click="UpdateData" type="primary">change</el-button>
          <el-button @click="UpdateData2" type="primary">UTC to GMT</el-button>
        </div>
</template>

<script>

// import store from "@/store";
// import axios from "axios";
// import router from '@/router'
 
import {onMounted, reactive } from "vue";

// import AdvertiseEditPage from "./AdvertiseEditPage.vue"//編輯廣告內頁
// 廣告維護 API,2022.05.25 Add,Y.NAN

import states from "@/assets/advertise.json";
export default {
  
    setup() {
      const advertiseList =  reactive({data:[]})
 

      onMounted(() => { 
        console.log(states)
        // let contentx = JSON.parse(states);
      
        advertiseList.data=states.data
          
        
      });
//   

const UpdateData = () => {
  advertiseList.data.forEach(advertise => {
    advertise.name = advertise.name + " test1";
  })
}

const UpdateData2 = () => {
  advertiseList.data.forEach(advertise => {
    
    // console.log(advertise.create_date.split(" "))
    // console.log(new Date(advertise.create_date))
    advertise.create_date = new Date(advertise.create_date)
    advertise.start_date = new Date(advertise.start_date)
    advertise.end_date = new Date(advertise.end_date)

    // document.querySelector(".aaa").style.color = "red"
  })
}

    return{
      // state,
      advertiseList,
      UpdateData,
      UpdateData2,
    }
  }
    
}
</script>

<style>

</style>