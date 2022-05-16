<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Trivia",
      question: "",
      correctAnswer: "",
      possibleAnswers: []
    };
  },
  created: function () { },
  methods: {
    getTriviaQuestion: function () {
      console.log("get trivia");
      axios.get("/questions").then(response => {
        console.log(response.data);
        this.question = response.data["question"];
        this.correctAnswer = response.data["correct_answer"];
        this.possibleAnswers = response.data["possible_answers"];
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>

  <button v-on:click="getTriviaQuestion()">Get A Trivia Question!</button>
  <h2>{{ question }}</h2>

  <p v-for="possibleAnswer in possibleAnswers" v-bind:key="possibleAnswer">
    {{ possibleAnswer }}
  </p>



</template>

<style>
</style>