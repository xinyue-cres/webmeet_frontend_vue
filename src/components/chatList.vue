<template>
    <div class="chat-list">
        <div 
            v-for="(item, index) in chatPageList" 
            :key="item.userId || item.groupId"
            :class="[
                'list-item',
                { 'active': currentChatIndex === index },
                { 'grayscale': item.loginState === 0 }
            ]"
            @click="handleChooseChat(index)"
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
                <p class="message">{{ item.lastContent }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import defaultAvatar from "~/img/group.webp";
import { formatTime } from "@/utils/format";
import { ref } from "vue";

const chatPageList = [
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
    {
        groupId: "a324c920-6747-11ee-8f2b-7f7024d473f5",
        groupName: "小明的群聊",
        avatarUrl: "",
        createTime: "2023-10-06T06:35:08.059Z",
        lastContent: "小明: 111",
        unread: 0,
        msgType: 0,
        chatType: 1,
    },
];

const currentChatIndex = ref(0);

const handleChooseChat = (index) => {
    currentChatIndex.value = index;
}

</script>


<style lang="less" scoped>
.search {
    display: flex;
    align-items: center;
    height: 35px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
.chat-list {
    .search {
        display: flex;
        align-items: center;
        height: 35px;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
    .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 75px;
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
            h4 {
                display: flex;
                justify-content: space-between;
                .name {
                    width: 60%;
                    font-size: 14px;
                    font-weight: bold;
                    color: #18191c;
                    margin-bottom: 5px;
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
                height: 18px;
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
