<script lang="ts" setup>
import { account } from '@/utils/appwrite'
import { useAuthStore} from '~/stores/auth.store'

const store = useAuthStore();
const router = useRouter();

onMounted(async () => {  
  if (!store.user) {
    router.push('/login')
  } 
})
</script>
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
