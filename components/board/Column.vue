<script setup lang="ts">

defineProps<{ title: string; tasks: { id: number; title: string; description: string }[] }>();
</script>

<template>
  
    <div class="column">      
        <h4>{{ title }}</h4>
        <Task /> 
        
    </div>
  </template>  
  <style scoped>
  .column {        
    border-radius: 8px;     
    flex: 1;
    max-width: 25%;   
    min-height: 20vh;        
      
  }  
  h4 {    
    color: #f0f8ff;
    padding: 10px;        
    background: #382239a5;  
    border-radius: 8px;
    margin: 0;
    border: 0.1px solid transparent;
    border-color: #f9a0f955;
  }  
  .task-list {
    display: flex;
    flex-direction: column;  
  }
  </style>