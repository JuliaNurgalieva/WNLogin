<template>
    <div class="task-card">
      <h4>{{ task.title }}</h4>
      <p>{{ task.description }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ task: { id: number; title: string; description: string } }>();
  </script>
  
  <style scoped>
  .task-card {
    background: #2d3b55;
    padding: 10px;
    border-radius: 8px;
    color: white;
  }
  </style>