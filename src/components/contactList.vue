<template>
    <div class="collapse-container">
        <el-collapse v-model="activeIndex" @change="handleChange()">
            <el-collapse-item title="我的朋友" name="1">
                <div class="friend-list">
                    <div
                        v-for="(item, index) in contactList" 
                        :key="item.userId || item.groupId"
                        :class="[
                            'list-item', 
                            { 'active': currentFriendIndex === index },
                            { 'grayscale': item.loginState === 0 }
                        ]"
                        @click="handleClickFriend(index)"
                        @dblclick="handleDblclickFriend(index)"
                    >
                        <div class="left">
                            <el-avatar
                                v-if="item.realName"
                                style="background-color: #fde3cf; color: #f56a00; font-size: 1em"
                            >
                                {{ item.realName?.slice(0, 2) }}
                            </el-avatar>
                            <el-avatar  v-else>
                                <img :src="defaultAvatar" alt="默认头像" />
                            </el-avatar>
                        </div>
                        <div class="right">
                            <h4>
                                <span class="name">{{ item.realName || item.groupName }}</span>
                                <span>{{ formatTime(item.createTime) }}</span>
                            </h4>
                            <div class="message">
                                <el-tag v-if="item.loginState===1" type="success">在线</el-tag>
                                <el-tag v-else type="info">离线</el-tag>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="我的群聊" name="2">
                <span>我的群聊</span>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import defaultAvatar from "~/img/group.webp";
import { formatTime } from "@/utils/format";

    const currentFriendIndex = ref();

    const handleClickFriend = (index) => {
        currentFriendIndex.value = index;
    }
    const contactList = [
        {
            userId: "651d07d4c41cd8e4cf40cae6",
            realName: "小桃",
            loginState: 0,
            avatarUrl: "",
            lastContent: "我是小桃",
            time: 1696928779,
            createTime: "2023-10-14T06:35:08.059Z",
            unread: 2,
            msgType: 0,
            chatType: 0,
        },
        {
            userId: "xxx",
            realName: "小绿",
            loginState: 1,
            avatarUrl: "",
            lastContent: "我是小绿",
            time: 1696969225,
            createTime: "2023-10-11T06:35:08.059Z",
            unread: 2,
            msgType: 0,
            chatType: 0,
        },
    ];

    const activeIndex = ref();

    const handleChange = () => {

    }
    const handleChooseFriend = () => {
        
    }


</script>


<style lang="less" scoped>
:deep .el-collapse-item__title {
    text-align: center;
    font-size: medium;
}
:deep .el-collapse-item__content {
    padding-bottom: 0;
}
.friend-list {
    .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        padding: 8px;
        border-bottom: 1px solid #eee ;
        &.grayscale {
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
            opacity: 0.7;
            /* 所有子元素也应用灰度 */
            &, & * {
                -webkit-filter: grayscale(100%) !important;
                filter: grayscale(100%) !important;
            }
            
            /* 图片单独处理 */
            img {
                -webkit-filter: grayscale(100%) !important;
                filter: grayscale(100%) !important;
            }
        }
        &.active {
            background: #eee;
        }
        .left {
            margin-right: 10px;
            img {
                width: 40px;
                height: 40px;
                text-align: center;
                border-radius: 5px;
            }
        }
        .right {
            width: 0;
            flex: 1;
            padding: 10px 0 5px 5px;
            h4 {
                display: flex;
                justify-content: space-between;
                
                .name {
                    width: 60%;
                    font-size: 14px;
                    font-weight: bold;
                    color: #18191c;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                span {
                    font-size: 12px;
                    font-weight: 300;
                    color: #aaa;
                }
            }
            .message {
                height: 50px;
                font-size: 12px;
                color: #aaa;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .meeting-item {
        width: 80%;
        margin: 10px auto;
        background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
}

</style>