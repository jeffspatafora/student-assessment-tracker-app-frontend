<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All notes",
      userNotes: []
    };
  },
  created: function () {
    this.indexUserNotes();
  },
  methods: {
    indexUserNotes: function () {
      // console.log("in user notes");
      axios.get("/user_notes.json").then(response => {
        console.log(response, response.data);
        this.userNotes = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
  <div v-for="notes in userNotes" v-bind:key="notes.id">
    <h4>{{ notes.student }}</h4>
    <h6>{{ notes.project }}</h6>
    <p>{{ notes.note }}</p>
    <hr />
  </div>

  <!-- <button v-on:click="indexUserNotes()">all user notes</button> -->
</template>

<style>
</style>