<script setup lang="ts">
import TaskCard from './TaskCard.vue';
defineProps<{ title: string; tasks: { id: number; title: string; description: string }[] }>();
</script>

<template>
  
    <div class="column">
      <div class="column-header">
        <h3>{{ title }}</h3>
      </div>
      
      <div class="task-list">
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
      </div>
    </div>
  </template>
  
 
  
  <style scoped>
  .column {        
    border-radius: 8px;
    background: #1c2537; 
    flex: 1;
    max-width: 25%;
    margin-inline: 10px;   
  }
  
  h3 {    
    color: white;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;   
  }  
  .task-list {
    display: flex;
    flex-direction: column;  
  }
  </style>