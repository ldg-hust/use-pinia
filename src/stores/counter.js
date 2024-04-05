import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
    //定义数据（state）
    const count = ref(0);
    //定义修改数据的方法
    const increment = () => {
        count.value++
    }

    //getter定义
    const doubleCount = computed(() => count.value * 2);

    //异步action

    const API_URL = 'http://geek.itheima.net/v1_0/channels'
    const list = ref([]);
    const getList = async () => {
        const res = await axios.get(API_URL)
        list.value = res.data.data.channels;
    }
    console.log(list)
    return { count, increment, doubleCount, getList, list }
})