<template>

<div>
    <el-table
        :data="axiosDataList.axi"
        style="width: 60%;border:5px solid black" height="300"
    >
        <el-table-column
            fixed
            prop="customer_no"
            sortable label="Number"
            show-overflow-tooltip
            width="120"
        />
        <el-table-column
            prop="content"
            sortable label="Content"
            show-overflow-tooltip
            width="500"
        />
         
    </el-table>
</div>

<div>
    <el-button @click="Click" style="color:red;">點擊載入</el-button>
    <el-button @click="Render" style="color:blue;">渲染畫面</el-button>
    <el-button @click="Clear" style="color:green;">清空畫面</el-button>

</div>

<!-- API直接show在畫面 -->
<div>
    <h6>{{ axiosDataList.axi }}</h6>
</div>


</template>

<script>

import { reactive, onMounted } from "vue";

// import axios from 'axios';

import store from "@/store";

export default {
    
    setup() {
        // var axiosDataList = [];
        // const axiosDataList = [];
        const axiosDataList = reactive({axi:[]})


        // onMounted( () => {
            
        // });
        
        const Click = () => {
            store.dispatch("QueryTest", "");
        }

        const Render = () => {
            axiosDataList.axi = store.getters.getTest;
            console.log(axiosDataList.axi)
            //
            
            //
        }

        const Clear = () => {
            axiosDataList.axi = []
        }

        

        return {
            Click,
            Render,
            axiosDataList,
            Clear,
        }
    }
}


</script>

<style>
    .el-button:hover {
        /* background-color: cadetblue; */
        background-color: black !important;
    }
</style>