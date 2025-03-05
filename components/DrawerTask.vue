<script lang="js" setup>
import { defineProps, defineEmits } from "vue";
import {ref, onMounted, nextTick} from "vue";
defineProps({ isVisible: Boolean });
const emit = defineEmits(["update:isVisible"]);
const closeDrawer = () => {
  emit("update:isVisible", false);
}
const textareaRef = ref(null);

const autoResize = () => {
  const textarea = textareaRef.value;
  if (!textareaRef.value) return;
  textarea.style.height = "auto";
  textarea.style.height = textareaRef.value.scrollHeight + "px";
};

onMounted(async () => {
  await nextTick();  
  autoResize(); 
});
</script>

<template>
  <transition name="slide">
    <aside class="drawer" v-if="isVisible">
      <p>Create new task</p>
        <div class="new-task">
          <input id="theme" placeholder="Theme:" type="text" class="input" maxlength="36"/>
          <input id="name" placeholder="Name:" type="text" class="input" maxlength="20"/>
          <textarea
            maxlength="650"
            id="comments"
            placeholder="Comments:"
            @input="autoResize"        
            class="input"
            type="text"
            ref="textareaRef"
          ></textarea>
          <button @click="">Create</button>
        </div>
      <Icon name="heroicons-solid:x" class="close-icon" @click="closeDrawer" />
    </aside>
  </transition>
</template>

<style scoped>

button {
  border: 1px solid transparent;
  border-radius: 6px;  
  color: #f0f8ff;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  background: none;  
  border-color: #f0f8ff;
  padding: 4px;  
  justify-content: end;
  margin-top:0.5rem;
  margin-left: auto;
}
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

p {
  color: #f0f8ff;
  margin-block: 2rem;
  padding-left: 2rem;
  font-family: Lato-LightItalic;
  font-size: 1.5rem;
}
.input {
  width: 100%;
  min-width: 100%;
  padding: 8px;
  border: 2px solid #f9a0f99e;  
  color: white;
  font-size: 1rem;
  resize: none;
  overflow: hidden;
  min-height: 3rem;
  margin-top: 1rem;
  border-radius: 8px;
  background: none;
  font-family: Lato;
  box-shadow: -2px 0 10px #00000033;
}

.new-task { 
  display: flex;
  flex-direction: column; 
  margin: 1rem;
  height: 550px;
}
textarea::placeholder{
  font-size: 1rem;
  color: #f9a0f99e;
}
input::placeholder {
  color: #f9a0f99e;
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
  margin-left: 2rem;  
}
.close-icon:hover {
  color: #f9a0f9c4;
}
.input:focus {
  outline: none;
  border-color: #ff66aa;
}
button:hover {
  border-color: #f9a0f9c4;
  color: #f9a0f9c4;
}
</style>
