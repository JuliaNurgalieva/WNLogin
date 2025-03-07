<script setup lang="ts">
import Column from './Column.vue';

const columns = [
  { id: 1, title: "TODO", tasks: [] },
  { id: 2, title: "PROGRESS", tasks: [] },
  { id: 3, title: "IN QA", tasks: [] },
  { id: 4, title: "DONE", tasks: [] }
];
</script>
<template>  
    <div class="board">
      <Column v-for="column in columns" :key="column.id" :title="column.title" :tasks="column.tasks" />
    </div>
    
  </template>  
  
  <style scoped>
  .board {
    display: flex;
    justify-content: space-evenly; 
    gap: 20px;  
    padding-inline: 20px; 
  }
  
  </style>