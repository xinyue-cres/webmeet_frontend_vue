<template>
    <div class="toolbar-container">
        <div class="avatar-container">
            <el-icon class="avatar-icon">
                <img class="avatar-img" :src="loginBg"/>
            </el-icon>
        </div>
        <el-menu
            style="height: 100%;"
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="toolbar-menu"
            default-active="1"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
        >
            
            <!-- <el-menu-item index="0" class="avatar-item">
                
            </el-menu-item> -->
            <el-menu-item index="1" class="toolbar-item">
                <el-icon class="item-icon"><ChatDotRound /></el-icon>
                <span>消息列表</span>
            </el-menu-item>
            <el-menu-item index="2" class="toolbar-item">
                <el-icon class="item-icon"><User /></el-icon>
                <span>联系列表</span>
            </el-menu-item>
            <el-menu-item index="3" class="toolbar-item">
                <el-icon class="item-icon"><Operation /></el-icon>
                <span>设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>
import loginBg from "~/img/login-bg2.jpg";
import { ChatDotRound, Operation, User } from '@element-plus/icons-vue'

    const handleSelect = (key, keyPath) => {
        console.log(key, keyPath)
    }

    const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
    }

    const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
    }
</script>

<style scoped lang="less">
.toolbar-container {
    width: 100%;
    height: 100%; 
    overflow: hidden; 
    background-color: #545c64;
}

.toolbar-menu {
    width: 200.8px;
    justify-content: center;

}

.toolbar-item {
    font-size: 16px;
    justify-content: center;
    margin: 10px 0;
    .item-icon {
        margin-left: -10px;
    }
}


.avatar-container {
    padding: 40px 0 10px 0;
    display: flex;
    left: 96.2px;
    justify-content: center;
    .avatar-icon {
        width: 56px;
        height: 56px;
        margin: 0;
        
        .avatar-img {
            height: 100%;
        }
    }
}


</style>