<script setup lang="ts">
import Toggle from 'library/dist/wrapper/vue/Toggle.vue'
import {ref} from 'vue'

const toggled = ref(false)
const toggle = () => {
  toggled.value = !toggled.value
}
</script>

<template>
  <Toggle :checked="toggled" @change="()=>toggle()"></Toggle>
</template>

<style scoped>

</style>
