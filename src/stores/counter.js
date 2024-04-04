import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    //定义数据（state）
    const count = ref(0);
    const increment = () => {
        count.value++
    }
    return { count, increment }
})