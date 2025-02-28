<script lang="ts" setup></script>
<template>
  <section class="grid">
    <layoutSidebar />
      <div>
        <NuxtPage />
      </div>
  </section>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background: #21132bde;
  min-height: 100vh;
}
</style>
