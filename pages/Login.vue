<script setup lang="ts">
definePageMeta({
  layout: false,
});
import { useRouter } from "vue-router";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const name = ref("");
const router = useRouter();
const Click = () => {
  router.push("/");
};

const login = () => {
  console.log("Logging in with:", email.value, password.value, name.value);
};

const register = () => {
  console.log("Registering with:", email.value, password.value, name.value);
};
</script>

<template>
  <div class="container">
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <input type="text" v-model="name" placeholder="Name" required />
        <div class="buttons">
          <button type="button" @click="Click">Login</button>
          <button type="button" @click="Click">Register</button>
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
