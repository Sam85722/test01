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
        <el-table-column prop="name" sortable label="Name"/>
        <el-table-column prop="pet" sortable label="Address" />

    </el-table>
    
    <el-button @click="UpdateData" type="primary">change</el-button>
    
</template>

<script>

import {reactive, onMounted} from "vue";

import testdata from "@/assets/data.json";



export default {
    setup() {
        const dataList = reactive({accounts:[]})

        onMounted( () => {
            dataList.accounts = testdata.accounts

            console.log(dataList.accounts)
        })

        const UpdateData = ()=> {
            dataList.accounts.forEach(update => {
                update.name = update.name + "test"
            })
        }

        return {
            dataList,
            UpdateData
        }
    }
}


</script>