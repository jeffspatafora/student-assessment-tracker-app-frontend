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
      triviaCategories: [],
      selectedCategory: "",
      difficulty: ""
    };
  },
  created: function () {
    this.indexTriviaCategories();
  },
  methods: {
    getTriviaQuestion: function () {
      console.log("get trivia");
      console.log(this.selectedCategory);
      console.log(this.difficulty);
      axios.get(`/questions.json?category_id=${this.selectedCategory["id"]}&${this.difficulty}`).then(response => {
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
        this.triviaCategories = response.data["trivia_categories"];
      })
    }
  }
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>

  <p>
    <label>Choose a category: </label>
    <select v-model="selectedCategory">
      <option v-for="triviaCategory in triviaCategories" v-bind:key="triviaCategory" v-bind:value="triviaCategory">{{
          triviaCategory["name"]
      }}
      </option>
    </select>
  </p>

  <p>
    <label>Choose a difficulty: </label>
    <select v-model="difficulty">
      <option value="difficulty=">Any</option>
      <option value="difficulty=easy">Easy</option>
      <option value="difficulty=medium">Medium</option>
      <option value="difficulty=hard">Hard</option>
    </select>
  </p>


  <button v-on:click="getTriviaQuestion()">Get A Question!</button>
  <h2>{{ question }}</h2>

  <p v-for="possibleAnswer in possibleAnswers" v-bind:key="possibleAnswer">
    {{ possibleAnswer }}
  </p>

  <div>
    <button v-on:click="getCorrectAnswer()">See Correct Answer</button>
    <p v-if="showCorrectAnswer">{{ showCorrectAnswer }}</p>
  </div>
  <hr>
  <button v-on:click="resetSessionToken()">Reset Session Token</button>
  <p>Longer than 6 hrs since last question request? Please reset session token</p>
  <p>No longer getting questions? Please reset session token</p>


</template>

<style>
</style>