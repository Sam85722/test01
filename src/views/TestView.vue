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