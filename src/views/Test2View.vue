<template>
    <el-button
        id="button1"
        text
        @click="dialogFormVisible = true"
        type="primary"
    >
        輸入資料
    </el-button>



    <div id="div2">
        <el-descriptions title="使用者資訊">
            <el-descriptions-item label="姓名 :">{{ form.name }}</el-descriptions-item>
            <el-descriptions-item label="地區 :">{{ form.region }}</el-descriptions-item>
        </el-descriptions>
    </div>



    <el-dialog
        v-model="dialogFormVisible"
        title="使用者輸入"
    >
        <el-form :model="form">
            <el-form-item
                label="姓名"
                :label-width="formLabelWidth"
            >
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="地區" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="請選擇">
                    <el-option label="第一區" value="台北" />
                    <el-option label="第二區" value="台南" />
                </el-select>
            </el-form-item>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button
                    type="primary"
                    @click="dialogFormVisible = false"
                >
                    確認
                </el-button>
            </span>
        </template>
    </el-dialog>

</template>

<script lang="ts" setup>

    import { reactive, ref } from 'vue'

    const dialogFormVisible = ref(false)
    const formLabelWidth = '140px'

    const form = reactive({
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
    })

    

</script>

<style scoped>
    #button1 {
        width: 100px;
        background-color: pink;
    }

    #button1:hover {
        color: pink ;
        background-color: blue;
    }

    .el-button--text {
        margin-right: 15px;
    }

    .el-select {
        width: 300px;
    }
    
    .el-input {
        width: 300px;
    }
    
    .dialog-footer button:first-child {
        margin-right: 10px;
    }

    #div2 {
        border: 2px solid black;
    }
    
</style>