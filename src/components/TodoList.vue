<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import ListItem from './ListItem.vue'

type Item = {
  id: number
  title: string
  checked?: boolean
}

const API_URL = 'http://localhost:3000/todos'

const storageItems: Ref<Item[]> = ref([])

const sortedList = computed(() =>
  [...storageItems.value].sort((a, b) => (a.checked ? 1 : 0) - (b.checked ? 1 : 0)),
)

const fetchTodos = async (): Promise<void> => {
  try {
    const response = await axios.get(API_URL)
    storageItems.value = response.data
  } catch (error) {
    console.error('Error fetching todos:', error)
  }
}

const handleCheckboxChange = async (item: Item, checked: boolean): Promise<void> => {
  try {
    await axios.patch(`${API_URL}/${item.id}`, { checked })
    item.checked = checked
  } catch (error) {
    console.error('Error updating todo:', error)
  }
}

onMounted(() => {
  fetchTodos()
})
</script>

<template>
  <ul>
    <li :key="item.id" v-for="item in sortedList">
      <ListItem
        :isChecked="item.checked"
        @update:isChecked="(checked) => handleCheckboxChange(item, checked)"
      >
        {{ item.title }}
      </ListItem>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}
li {
  margin: 0.4rem 0;
}
</style>
