<script lang="ts" setup>
import { MENU_DATA } from './menu.data'
</script>
<template>  
    <NuxtLink class="menu" v-for="item in MENU_DATA" :key="item.name" :to="item.url">
      <Icon :name="item.icon" class="icon"/>
      <span>{{ item.name }}</span>
    </NuxtLink> 
</template>
<style scoped>
.icon {
  margin-right: 20px;
  font-size: 30px;
  color:#f0f8ff;
}
.menu {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 18px;
  color:#f0f8ff;
  text-decoration: none; 
  cursor: pointer;
  
}
 .menu:hover {  
  color: #f9a0f9;
}
.menu:hover .icon{  
  color: #f9a0f9;
}
</style>
