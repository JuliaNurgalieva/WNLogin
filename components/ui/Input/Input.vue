<script setup lang="ts">
import { useVModel } from '@vueuse/core'


const props = defineProps<{
  defaultValue?: string 
  modelValue?: string 
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string ): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input v-model="modelValue" />
</template>
<style scoped>

</style>