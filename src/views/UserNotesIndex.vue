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
  <div v-for="note in userNotes" v-bind:key="note.id">
    <h4>{{ note.student }}</h4>
    <h5>{{ note.user }}</h5>
    <h5>{{ note.created_at }}</h5>
    <h6>{{ note.project }}</h6>
    <p>{{ note.note }}</p>
    <hr />
  </div>

  <!-- <button v-on:click="indexUserNotes()">all user notes</button> -->
</template>

<style>
</style>