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
      selectedCategoryId: "",
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
      if (this.selectedCategory === "any") {
        this.selectedCategoryId = 1;
      } else {
        this.selectedCategoryId = this.selectedCategory["id"];
      }
      console.log(this.selectedCategoryId);
      console.log(this.difficulty);
      axios.get(`/questions.json?category_id=${this.selectedCategoryId}&${this.difficulty}`).then(response => {
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
  <div class="trivia">
    <h1>{{ message }}</h1>
  </div>

  <p>
    <label>Choose a category: </label>
    <select v-model="selectedCategory">
      <option value="any">Any</option>
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

  <button v-on:click="getTriviaQuestion()" class="btn btn-warning btn-sm">Get A Question!</button>
  <h2>{{ question }}</h2>

  <p v-for="possibleAnswer in possibleAnswers" v-bind:key="possibleAnswer">
    {{ possibleAnswer }}
  </p>

  <div>
    <button v-on:click="getCorrectAnswer()" class="btn btn-warning btn-sm">See Correct Answer</button>
    <p v-if="showCorrectAnswer">{{ showCorrectAnswer }}</p>
  </div>
  <hr>
  <button v-on:click="resetSessionToken()" class="btn btn-warning btn-sm">Reset Session Token</button>

</template>

<style>
h2 {
  color: coral;
}
</style>