<template>
    <!-- <div>
        <ul>
            <li>
                {{ dataList.accounts }}
            </li>
        </ul>
    </div> -->

    <el-table
        :data="dataList.accounts"
    >
        <el-table-column prop="name" sortable label="Name" show-overflow-tooltip/>
        <el-table-column prop="pet" sortable label="Address" />

        
        
    </el-table>

    <br>
    
    <el-button @click="UpdateData" type="primary">change</el-button>
    <el-button @click="UpdateData2" type="danger">change2</el-button>

    <el-table
        :data="axiosDataList.axi"
    >
        <!-- <el-table-column prop="name" sortable label="Name" show-overflow-tooltip/>
        <el-table-column prop="pet" sortable label="Address" /> -->

        <el-table-column prop="content" sortable label="Content" show-overflow-tooltip/>
        
    </el-table>

    <br>

    <el-table
        :data="axiosDataList.axi"
    >
        <el-table-column prop="customer_no" sortable label="Number" show-overflow-tooltip/>
        <el-table-column prop="content" sortable label="Content" show-overflow-tooltip/>
        
    </el-table>

</template>

<script>

import {reactive, onMounted} from "vue";

import testdata from "@/assets/data.json";

import axios from 'axios';

export default {
    
    setup() {
        const dataList = reactive({accounts:[]})
        const axiosDataList = reactive({axi:[]})

        

        


        onMounted( () => {
            var config = {
            method: 'get',
            url: 'https://app.sjen.com.tw/nms/pharmacist-service/self/canned-messages',
            headers: { }
            };

            axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
            
                let axi_data = response.data.data
                axiosDataList.axi = axi_data;
                // console.log(axi_data)
            })
            .catch(function (error) {
                console.log(error);
            });

            

            dataList.accounts = testdata.accounts

            // console.log(dataList.accounts)


        })

        const UpdateData = ()=> {
            dataList.accounts.forEach(update => {
                update.name = update.name + "test"

            })
        }

        const UpdateData2 = ()=> {
            dataList.accounts.forEach(update => {
                update.pet = update.pet + " " + update.pet
            })
        }

        return {
            dataList,
            UpdateData,
            UpdateData2,
            axiosDataList
        }
    }
}


</script>