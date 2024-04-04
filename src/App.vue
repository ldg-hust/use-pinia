<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore();
console.log(counterStore)

</script>

<template>
  <div>{{ counterStore.count }}</div>
  <button @click="counterStore.increment">加一</button>
</template>

<style scoped></style>
