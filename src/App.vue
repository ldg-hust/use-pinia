
<script setup>
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
console.log(counterStore)
//直接解析复制（对象数据响应式丢失）（方法函数可以）
const {getList}=counterStore
//storeToRefs包裹即可
const {count,doubleCount}=storeToRefs(counterStore)

onMounted(()=>{
      getList();
})
console.log(counterStore.list)
</script>

<template>
  <div>{{count }}</div>
  <div>  {{ doubleCount }} </div>
  <button @click="counterStore.increment">加一</button>
   <ul>
    <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
   </ul>

 <!-- // <button @click="counterStore.doubleCount">加倍</button> -->
</template>

<style scoped></style>
