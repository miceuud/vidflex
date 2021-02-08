<template>
  <div>
    <form method="POST" @submit.prevent="login">
      <div>
        <h3>Login to your account</h3>
        <div class="form-subcontainer">
          <div>
            <label for="username">Email</label>
            <input type="text" v-model="email" name="email" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" v-model="password" name="password" />
          </div>

          <base-button type="submit">
            Login
          </base-button>

          <div>
            Don't have an account?
            <router-link to="/signup"> Register</router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Authentication from "../services/Authentication";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {},
  methods: {
    async login() {
      try {
        const response = await Authentication.login({
          email: this.email,
          password: this.password,
        });

        console.log(response.data.message)
        // if (!response) {
        //   console.log(response);
        // } else {
        //   this.$router.push({ name: "dashboard" });
        // }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.form-subcontainer div {
  width: 80%;
  margin: 0 auto;
}
</style>
