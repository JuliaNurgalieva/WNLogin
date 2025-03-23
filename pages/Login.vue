<script setup lang="ts">
import { account } from "@/utils/appwrite";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.store";
definePageMeta({
  layout: false,
});
const email = ref("");
const password = ref("");
const name = ref("");
const router = useRouter();
const authStore = useAuthStore();
const login = async () => {   
  await account.createEmailPasswordSession(email.value, password.value);  
  const response = await account.get()
  if (response) {
    authStore.set({
      email: response.email,
      name: response.name,
      status: response.status,
  }) 
  } 
  email.value = "";
password.value = "";
name.value = "";
await router.push("/");
};

const register = async () => { 
  await account.create("unique()", email.value, password.value, name.value);
  await login(); 
};
</script>
<template>
  <title>jiva/login</title>
  <div class="container">
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <input type="text" v-model="name" placeholder="Name" required />
        <div class="buttons">
          <button type="button" @click="login">Login</button>
          <button type="button" @click="register">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #21132bde;
}

.login-box {
  background-color: #382239a5;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

h2 {
  color: #f0f8ff;
  margin-bottom: 20px;
}

input {
  width: 100%;
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background-color: #21132bde;
  color: #f0f8ff;
  box-sizing: border-box;
}

button {
  padding: 10px;
  margin: 5px;
  width: 45%;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #21132bde;
  color: #f0f8ff;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

button:hover {
  border-color: #f76df78d;
  color: #f76df78d;
}
</style>
