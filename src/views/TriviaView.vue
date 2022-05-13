<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Trivia",
      question: ""
    };
  },
  created: function () { },
  methods: {
    getTriviaQuestion: function () {
      console.log("get trivia");
      axios.get("/questions").then(response => {
        console.log(response.data);
        this.question = response.data["question"];
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>

  <button v-on:click="getTriviaQuestion()">Get Trivia Question!</button>
  <h2>{{ question }}</h2>
</template>

<style>
</style>