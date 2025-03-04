<script lang="js" setup>
import { defineProps, defineEmits } from "vue";

defineProps({ isVisible: Boolean });
const emit = defineEmits(["update:isVisible"]);

const closeDrawer = () => {
  emit("update:isVisible", false);
}
</script>

<template>
  <transition name="slide">
    <aside class="drawer" v-if="isVisible">
      <p>Create new task</p>

      <input id="theme" placeholder="Theme:" type="text" class="input" />
      <input id="name" placeholder="Name" type="text" class="input" />
      <textarea
        id="comments"
        placeholder="Comments"
        @input="autoResize"
        
        class="input"
      ></textarea>

      <Icon name="heroicons-solid:x" class="close-icon" @click="closeDrawer" />
    </aside>
  </transition>
</template>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background: #48324d;
  box-shadow: -2px 0 10px #00000033;
  z-index: 9999;
}

.drawer.open {
  transform: translateX(0);
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
  margin-left: 12rem;
}
.close-icon:hover {
  color: #f9a0f9c4;
}
p {
  color: #f0f8ff;
  margin-block: 1rem;
  padding-left: 1rem;
  font-family: Lato-LightItalic;
  font-size: 1.5rem;
}
.input {
  width: 100%;
  padding: 8px;
  border: 2px solid #f9a0f99e;  
  color: white;
  font-size: 16px;
  resize: none;
  overflow: hidden;
  min-height: 3rem;
  margin-top: 20px;
  border-radius: 8px;
  background: none;
}

.input:focus {
  outline: none;
  border-color: #ff66aa;
}

</style>
