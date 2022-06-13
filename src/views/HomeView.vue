<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/students");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Welcome to Dr. Professor!</h1>
      <h3>Please log in: </h3>
      <h3>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </h3>
      <p>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </p>
      <p>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </p>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style>
body {
  background-color: teal;
}

h1 {
  color: limegreen;
}

h3 {
  color: coral;
}

p {
  color: gold;
}
</style>