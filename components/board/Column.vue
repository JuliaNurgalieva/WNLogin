<template>
    <div class="column">
      <h3>{{ title }}</h3>
      <div class="task-list">
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import TaskCard from './TaskCard.vue';
  
  defineProps<{ title: string; tasks: { id: number; title: string; description: string }[] }>();
  </script>
  
  <style scoped>
  .column {
    width: 250px;
    background: #1c2537;
    border-radius: 8px;
    padding: 10px;
  }
  
  h3 {
    text-align: center;
    color: white;
    margin-bottom: 10px;
  }
  
  .task-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  </style>