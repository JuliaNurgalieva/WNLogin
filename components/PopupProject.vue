<script setup lang="ts">
import { defineProps } from "vue";
import { defineEmits } from "vue";
import { ref } from "vue";
const projects = ref(['Board 1', 'Board 2']) // тестовые данные 
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:isVisible']);
const closePopup = () => {
  emit('update:isVisible', false);
}
</script>
<template>
    <div class="popup" v-if="isVisible">
      <div class="popup-block">
      <div class="Create-new-board">
        <input  id="new-kanban" placeholder="Create new kanban:" type="text" class="input" maxlength="36" />
        <Icon name="heroicons-solid:check" class="check" @click=""/> 
      </div>
      <ul class="project-list">
        <li v-for="project in projects" :key="project">{{ project }}</li>
      </ul>
      <Icon name="heroicons-solid:x" class="close-icon" @click="closePopup"/>
    </div>
    </div>
  </template>  
  <style scoped> 
  .check {
    cursor: pointer;    
    height: 1rem;     
    color: #f0f8ff;
    margin-left: 6px;    
  } 
  .check:hover {
    color: #f9a0f9;
  }
  .Create-new-board {
    display: flex;
    align-items: center;   
    padding: 0;
    margin-top: 8px;
  }
  input::placeholder {    
    color: #f9a0f99e;
  }
  .popup {
    position: absolute;
    top: 135px;
    left: 60px;
    width: 260px;
    background: #48324d;
    border-radius: 8px;
    padding: 10px;   
    color: #f0f8ff;
    z-index: 9999;
    box-shadow: -2px 0 10px #00000033;
  }
  .popup-block {
    padding: 10px;    
    border-radius: 6px;
    border: 0.1px solid transparent; 
    border-color: #f9a0f955;   
    max-height: 200px;   
  }  
  input {
    font-weight: bold;
    cursor: pointer;
    margin: 0;
    padding: 8px;
    background: none;
    border-radius: 6px;
    border: 0.1px solid transparent; 
    border-color: #f9a0f955; 
    color: #f0f8ff;
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
  input:focus {
  outline: none;
  border-color: #ff66aa;
}

  </style>
