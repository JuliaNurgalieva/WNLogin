<script setup lang="ts"></script>

<template>
  <title>jiva</title> 
  <div class="header"> 
    <h2>Project Name</h2>
    <button>Create</button>             
  </div> 
  <div>
    <Board />
  </div>
</template>

<style scoped>
.header {
  height: 80px;
  margin-bottom: 20px; 
  padding: 1rem 2rem;  
  display: flex;
  justify-content: space-between;
  align-items:center;
}
h2 {  
  color: #f0f8ff;
  margin: 0;
  line-height: 48px;
}
button {  
  margin: 0px;
  width: 80px;
  height: 34px;  
  border: 1px solid transparent;
  border-radius: 6px;  
  color: #f0f8ff;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  background: none;
  font-size: 20px;
  border-color: #f0f8ff;
  padding: 0;
  
}

button:hover {
  border-color: #f9a0f9c4;
  color: #f9a0f9c4;
}
</style>
