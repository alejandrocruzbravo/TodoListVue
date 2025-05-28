<script lang="ts" setup>
defineProps<{
  isChecked?: boolean | false
}>()

const emit = defineEmits(['update:isChecked'])

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:isChecked', target.checked)
}
</script>
<template>
  <label :class="{ checked: isChecked }">
    <input type="checkbox" :checked="isChecked" @change="handleChange" />
    <slot></slot>
  </label>
</template>
<style scoped>
label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.checked {
  text-decoration: line-through;
  color: #666;
}
</style>
