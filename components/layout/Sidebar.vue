<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
</script>
<template>
  <aside class="sidebar">
    <NuxtLink to="/login">
      <NuxtImg src="/Jiva.svg" class="logo" />
    </NuxtLink>
    <LayoutMenu />
  </aside>
</template>
<style scoped>
.sidebar {
  width: 100%;
  background-color: #382239a5;
  padding: 20px;
  height: 100vh;
  text-align: center;
  position: relative;
  box-sizing: border-box;  
}
.logo {
  width: 80px;
  margin-bottom: 40px;
}
</style>
