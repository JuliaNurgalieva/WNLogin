<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
</script>
<template>
  <aside class="sidebar">
    <Nuxtlink>
      <NuxtImg src="/Jiva.svg" class="logo" />
    </Nuxtlink>
    <div class="">
      <h2 class="project">Menu</h2>
      <hr noshade color=#fff />
    </div>
    <LayoutMenu />
  </aside>
</template>
<style scoped>
.sidebar {
  width: 100%;
  background-color: #172035;
  padding: 20px;
  height: 100vh;
  text-align: center;
  position: relative;
  box-sizing: border-box;
}
.logo {
  width: 80px;
  margin-bottom: 30px;
}
.project {
  color: #fff;
  font-family: sans-serif;
  margin-bottom: 20px;
}

</style>
