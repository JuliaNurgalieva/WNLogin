<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import dayjs from 'dayjs'
import { useTaskDrawerStore } from '~/stores/task-drawer-store'
import { DrawerComments } from "#components";

const store = useTaskDrawerStore()
const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});
const isLocalOpen = computed({
  get: () => store.isOpen,
  set: value => {
    store.isOpen = value
  },
})
const emit = defineEmits(["update:isVisible"]);
const closeDrawer = () => {
  store.task = null
  emit("update:isVisible", false); 
}
</script>

<template>
  <transition name="slide" v-model="isLocalOpen">    
    <aside class="drawer" v-if="isVisible " ref="drawerRef">
      <Icon name="heroicons-solid:x" class="close-icon" @click="closeDrawer" />
      <div class="task-content">
      <p>About task</p>
       <div class="drawer-task">
        <DrawerLabel labelText="Theme:">{{ store.task?.theme }}</DrawerLabel>
        <DrawerLabel labelText="Name:">{{ store.task?.user.name}}</DrawerLabel>        
        <DrawerLabel labelText="Date:">
          {{ dayjs(store.task?.$createdAt).format('DD MMMM YYYY') }}
        </DrawerLabel> 
        <Icon name="heroicons-solid:trash" class="delete" @click="" />      
       </div> 
      </div> 
      <div class="scroll">
      <DrawerComments />  
    </div>       
    </aside>     
  </transition>
  
</template>

<style scoped>
.delete {   
  cursor: pointer;
  transition: color 0.2s; 
  margin-left: auto; 
  color: #f0f8ff48;
}
.delete:hover {
  color: #f9a0f9c4;
}
.scroll {
  overflow-y: auto;
  max-height: 340px;
}
.scroll::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}
.drawer { 
  padding: 1rem;  
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 120vh;
  background: #48324d;
  box-shadow: -2px 0 10px #00000033;
  z-index: 9999;  
  
}
.drawer.open {
  transform: translateX(0);
}
.task-content{
  background: #38223981;
  border-radius: 4px;
  padding: 1rem;
}
p {  
  color: #f0f8ff;    
  font-family: Lato-Italic;
  font-size: 1.5rem;
  margin:0;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.close-icon {   
  cursor: pointer;
  color: #f0f8ff;
  transition: color 0.2s;
  margin-bottom: 0.5rem; 
}
.close-icon:hover {
  color: #f9a0f9c4;
}
.drawer-task {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;  
  color: #ffffff;
  font-family: Lato-Italic;
}

</style>
