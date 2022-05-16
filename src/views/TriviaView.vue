<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Trivia",
      question: "",
      correctAnswer: "",
      showCorrectAnswer: "",
      possibleAnswers: [],
      triviaCategories: {}
    };
  },
  created: function () {
    this.indexTriviaCategories();
  },
  methods: {
    getTriviaQuestion: function () {
      console.log("get trivia");
      axios.get("/questions").then(response => {
        console.log(response.data);
        this.showCorrectAnswer = "";
        this.question = response.data["question"];
        this.correctAnswer = response.data["correct_answer"];
        this.possibleAnswers = response.data["possible_answers"];
      });
    },
    getCorrectAnswer: function () {
      console.log(this.correctAnswer);
      this.showCorrectAnswer = this.correctAnswer;
    },
    resetSessionToken: function () {
      console.log('token reset');
      axios.patch("/trivia_session_token").then(response => {
        console.log(response.data);
      })
    },
    indexTriviaCategories: function () {
      console.log('index trivia categoires');
      axios.get("trivia_categories").then(response => {
        console.log(response.data);
        this.triviaCategories = response.data;
      })
    }
  }
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

  <div>
    <button v-on:click="getCorrectAnswer()">See Correct Answer</button>
    <p v-if="showCorrectAnswer">{{ showCorrectAnswer }}</p>
  </div>
  <hr>
  <button v-on:click="resetSessionToken()">Reset Trivia Session Token</button>

  <p>{{ triviaCategories }}</p>



</template>

<style>
</style>