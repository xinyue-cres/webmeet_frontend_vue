import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useToolBarStore = defineStore('toolBar', () => {
    const toolBarIndex = ref(1);

    const setToolBarIndex = (index) => {
        if (toolBarIndex.value !== index)
            toolBarIndex.value = index;
    }

    return { toolBarIndex, setToolBarIndex }
})