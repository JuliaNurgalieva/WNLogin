<script lang="js" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isVisible: Boolean,
});
const emit = defineEmits(["update:isVisible"]);

const closeDrawer = () => {
  emit("update:isVisible", false);
};
</script>

<template>
    <div class = "drawer">
        <div class = "task">
        <input type="text" placeholder="Task name" />
        <textarea placeholder="Task description"></textarea>
        <button @click="closeDrawer">Close</button>
        </div>
    </div>

</template>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: #1c2537;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.drawer-content {
  padding: 20px;
  color: white;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease-in-out;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}
</style>