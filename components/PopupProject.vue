
<script setup>
const projects = ref(['Board 1', 'Board 2']) // Пока просто тестовые данные 
import {defineProps} from "vue";
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
    <div class="popup" v-if="isVisible" @click.self="$emit('close')">
      <div class="popup-block">
      <p class="new-project">Create new project +</p>
      <ul class="project-list">
        <li v-for="project in projects" :key="project">{{ project }}</li>
      </ul>
    </div>
    </div>
  </template>
  
  <style scoped>
  .popup {
    position: absolute;
    top: 135px;
    left: 60px;
    width: 200px;
    background: #48324D;
    border-radius: 8px;
    padding: 10px;   
    color: #f0f8ff;
    z-index: 9999;
  }
  .popup-block {
    padding: 10px;    
    border-radius: 6px;
    border: 0.1px solid transparent; 
    border-color: #f9a0f955;   
    max-height: 200px;
   
  }
  
  .new-project {
    font-weight: bold;
    cursor: pointer;
  }
  
  .project-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .project-list li {
    padding: 8px;
    cursor: pointer;
  }
  
  .project-list li:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  .new-project:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  </style>
