<template>
  <div>
    <form method="POST" @submit.prevent="register">
      <h3 class="">Create an Accounts</h3>
      <div class="form-subcontainer">
        <div>
          <label for="email">Email: </label>
          <input type="text" name="email" v-model="email" />
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="password" name="password" v-model="password" />
        </div>
        <div>
          <label for="password">Repeat Password: </label>
          <input
            type="password"
            name="repeatpassword"
            v-model="repeatpassword"
          />
        </div>
        <button>Submit</button>
        <div>
          You have an account? <router-link to="/login"> Sign in</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Authentication from "../services/Authentication";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      repeatpassword: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await Authentication.register({
          email: this.email,
          password: this.password,
          repeat_password: this.repeatpassword,
        });

        if (response) {
          console.log(response.data.message);
          this.$router.push({ name: "dashboard" });
        } 
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
