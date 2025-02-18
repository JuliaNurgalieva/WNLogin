<script setup lang="ts">
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
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
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
  background-color: #0a0f1c;
}

.login-box {
  background-color: #131b2b;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

h2 {
  color: white;
  margin-bottom: 20px;
}

input {
  width: 100%;
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background-color: #1c2537;
  color: white;
  box-sizing: border-box;
}

button {
  padding: 10px;
  margin: 5px;
  width: 45%;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #1c3a5e;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s border-color 0.3s;
}

button:hover {
  background-color: #25507b;
  color: rgba(0, 255, 255, 0.553);
}
</style>
