<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <p>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </p>
      <p>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </p>
      <p>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </p>
      <p>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </p>
      <input type="submit" value="Submit" class="btn btn-warning btn-sm" />
    </form>
  </div>
</template>