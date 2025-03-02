<script setup lang="ts">
const projects = ref(['Board 1', 'Board 2']) // Пока просто тестовые данные 
import {defineProps} from "vue";
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});
import { defineEmits } from "vue";
const emit = defineEmits(['update:isVisible']);
const closePopup = () => {
  emit('update:isVisible', false);
}
</script>

<template>
    <div class="popup" v-if="isVisible">
      <div class="popup-block">
      <p class="new-project">Create new project +</p>
      <ul class="project-list">
        <li v-for="project in projects" :key="project">{{ project }}</li>
      </ul>
      <Icon name="heroicons-solid:x" class="close-icon" @click="closePopup"/>
    </div>
    </div>
  </template>
  
  <style scoped>  
  .popup {
    position: absolute;
    top: 135px;
    left: 60px;
    width: 260px;
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
    margin: 0;
    padding: 8px;
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
  .close-icon {
    cursor: pointer;
    color: #f0f8ff;
    transition: color 0.2s;
    margin-left: 12rem;
  }
  .close-icon:hover {
    color: #f9a0f9c4;
  }  
  .project-list li:hover {
    background: #f0f8ff20;
    border-radius: 4px;
  }
  .new-project:hover {
    background: #f0f8ff20;
    border-radius: 4px;
  }

  </style>
