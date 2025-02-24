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
  color:aliceblue;
}
.menu {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 18px;
  color:aliceblue;
  text-decoration: none; 
}

</style>
