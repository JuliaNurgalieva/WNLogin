<script lang="ts" setup >
import { ref } from "vue";
import { useBoardQuery } from '@/components/board/useBoardQuery'
import type { ITask, IColumn } from "@/components/board/board.types";

const isEditing = ref(false);
const toggleEdit = () => {
  isEditing.value = !isEditing.value;
};

</script>
<template>
  
</template>
<style scoped>
.task {  
  border: 1px solid #f0f8ff;
  padding: 10px;
  border-radius: 6px;
  background: #382239a5;
  max-width: 100%;    
  display: flex;
  flex-direction: column;  
  border-radius: 8px;
  gap: 0.8rem;
  margin: 0;
  border: 1px solid #f9a0f955;  
  margin-block: 1rem;
  flex: 1;  
}
.task:hover {
  border: 1px solid #f9a0f9c4;
}
.task-redact {
    display: flex;  
    align-items: center;
    justify-content: space-between;    
}
.theme, .comments, .name{      
  background: none;  
  resize: none;
  outline: none;  
  overflow: hidden;
  border: none;
  border-color: #f9a0f955;
  color: #edf6fe;
  font-size: 1rem;  
  font-family: lato;   
  background: #cf85d313; 
  border-radius: 6px;
}
.theme {
    font-size: 1.35rem;
    background: #cf85d313; 
    border-radius: 6px;   
}
.comments {
    font-size: 1.15rem;
    font-style: italic;
}
.name {
    font-style: italic;  
}
.redact {
    cursor: pointer;    
    color: #f9a0f955;
    transition: color 0.2s ease;
} 
.redact:hover {
    color: #f9a0f9;
}
.active-icon {
    color: #f9a0f9;
}
</style>