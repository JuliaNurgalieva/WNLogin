<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
import { account } from '@/utils/appwrite'
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()

const logout = async () => {    
    await account.deleteSession('current')   
    authStore.clear()    
    router.push('/login')  
}
</script>
<template>
  <aside class="sidebar"> 
    <div class = "logo-container">  
    <NuxtImg src="/Jiva.svg" class="logo" /> 
    <Icon name="ic:baseline-arrow-forward-ios" class="close-jiva" @click="logout" title="выход"/>
  </div> 
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
  margin-inline: auto;
}
.logo-container {
  display: flex;
  align-items: center;  
  margin-bottom: 40px;
  
}
.close-jiva {
  cursor: pointer;
  color: #f0f8ff;
  transition: color 0.2s;
}
.close-jiva:hover {
  color: #f9a0f9c4;
}

</style>
