<template>
    <div>
        <el-row class="div1">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <el-button>中文</el-button>
        </el-row>
    </div>
    <div>
        <el-row class="div2">
            <el-button :icon="Search" circle />
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="success" :icon="Check" circle />
            <el-button type="info" :icon="Message" circle />
            <el-button type="warning" :icon="Star" circle />
            <el-button type="danger" :icon="Delete" circle />
        </el-row>
    </div>
    <div>
        <el-row class="div3">
            <el-link href="https://www.google.com.tw/" target="_blank" rel="noreferrer noopenner">Google</el-link>
            <el-link href="https://zh-tw.facebook.com/" target="_blank" rel="noreferrer noopenner" type="primary">Facebook</el-link>
            <el-link href="https://vuejs.org/" target="_blank" rel="noreferrer noopenner" type="success">Vue</el-link>
            <el-link type="warning">warning</el-link>
            <el-link href="https://www.google.com/intl/zh-TW_tw/gmail/about/" target="_blank" rel="noreferrer noopenner" type="danger">G-mail</el-link>
            <el-link type="info">info</el-link>
        </el-row>
    </div>
    <div class="div4" style="font-size: 20px">
        <!-- 由于SVG图标默认不携带任何属性 -->
        <!-- 你需要直接提供它们 -->
        <Edit style="width: 1em; height: 1em; margin-right: 8px" />
        <Share style="width: 1em; height: 1em; margin-right: 8px" />
        <Delete style="width: 1em; height: 1em; margin-right: 8px" />
        <Search style="width: 1em; height: 1em; margin-right: 8px" />

        <el-icon><Apple /></el-icon>
        <el-icon><Bell /></el-icon>
        <el-icon><Menu /></el-icon>
        <el-icon><SwitchButton /></el-icon>
        <el-icon><Tools /></el-icon>
    </div>
    <div>
        <el-config-provider :message="config">
            <el-button @click="open">OPEN</el-button>
        </el-config-provider>
    </div>
    <div>
        <el-popconfirm        
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
            @confirm="confirmEvent"
            @cancel="cancelEvent"
        >
            <template #reference>
                <el-link :icon="Delete">Delete</el-link>
            </template>
        </el-popconfirm>
    </div>


    <div>
        <el-table :data="tableData" style="width: 100%" max-height="250">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button
                        text size="small"
                        @click.prevent="deleteRow(scope.$index)"
                    >
                        Remove
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button
            class="mt-4"
            style="width: 100%"
            @click="onAddItem"
        >
            Add Item
        </el-button>
    </div>
</template>

<script lang="ts" setup>
    import {
        Check,
        Delete,
        Edit,
        Message,
        Search,
        Star,
    } from '@element-plus/icons-vue'


    import { reactive } from 'vue'
    import { ElMessage } from 'element-plus'
    const config = reactive({
        max: 5,
    })
    const open = () => {
        ElMessage('This is a message.')
    }


    import { InfoFilled } from '@element-plus/icons-vue'
    const confirmEvent = () => {
        console.log('confirm!')
    }
    const cancelEvent = () => {
        console.log('cancel!')
    }


    // table
    import { ref } from 'vue'
    import dayjs from 'dayjs'

    const now = new Date()

    const tableData = ref([
        {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
        },
        {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
        },
    ])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  })
}

</script>

<style scoped>
    .div1 {
        border: 1px dotted black;
        margin: 2px;
        padding: 5px;
    }
    .div2 {
        border: 1px dotted black;
        margin: 2px;
        padding: 5px;
    }
    .div3 {
        border: 1px dotted black;
        margin: 2px;
        padding: 5px;
    }
    .div4 {
        border: 1px dotted black;
        margin: 2px;
        padding: 5px;
    }
    .el-link {
        margin-right: 8px;
    }
    .el-icon {
        margin-right: 8px;
    }

    
</style>