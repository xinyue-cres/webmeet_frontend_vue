<template>
  <div class="basic-layout">
    <el-container>
      <el-aside class="left">
        <ToolBar/>
      </el-aside>
      <el-aside class="middle">
        <ChatList v-if="toolBarIndex==1"/>
        <ContactList v-if="toolBarIndex==2"/>
      </el-aside>
      <el-main class="right">
        <ChatPanel/>
      </el-main>
    </el-container>
  </div>
</template>


<script setup>
import ToolBar from '@/components/toolBar.vue';
import ChatList from '@/components/chatList.vue';
import ChatPanel from '@/components/chatPanel.vue';
import ContactList from '@/components/contactList.vue';
import { useToolBarStore } from "@/store/toolBar";
import { computed } from 'vue';

const store = useToolBarStore();

const toolBarIndex = computed(() => store.toolBarIndex);

</script>


<style lang="less" scoped>

.basic-layout {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f8f8f8;
    color: rgb(8, 8, 8);
    .left {
        width: 200px;
        height: 100%;
        min-width: 50px;
        border-right: 1px solid #ccc;
    }
    .middle {
        width: 250px;
        height: 100%;
        border-right: 1px solid #ccc;
    }
    .right {
        flex: 1;
        height: 100%;
        background: #f2f2f2;
    }
}


</style>