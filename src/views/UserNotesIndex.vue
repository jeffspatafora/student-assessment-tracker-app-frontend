<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All notes",
      usernotes: []
    };
  },
  created: function () { },
  methods: {
    indexUserNotes: function () {
      // console.log("in user notes");
      axios.get("/user_notes.json").then(response => {
        console.log(response, response.data);
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
  <button v-on:click="indexUserNotes()">all user notes</button>
</template>

<style>
</style>