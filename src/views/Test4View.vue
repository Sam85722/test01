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
    <el-button @click="Click">Click</el-button>
    <el-button @click="Render">Render</el-button>


    <!-- <h4>{{ axiosDataList.axi }}</h4> -->

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
        }

        

        return {
            Click,
            Render,
            axiosDataList,
        }
    }
}


</script>