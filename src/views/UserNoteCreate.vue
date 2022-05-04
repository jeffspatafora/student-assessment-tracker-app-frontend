<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "add a new note",
      newNoteParams: {}
    };
  },
  created: function () { },
  methods: {
    createUserNote: function () {
      console.log('in create');
      axios.post('/user_notes', this.newNoteParams).then(response => {
        console.log(response, response.data);
        this.$router.push('/usernotesindex');
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>user_id: <input type="text" v-model="newNoteParams.user_id" /></p>
    <p>student_id: <input type="text" v-model="newNoteParams.student_id" /></p>
    <p>project_id: <input type="text" v-model="newNoteParams.project_id" /></p>
    <p>note: <input type="text" v-model="newNoteParams.note" /></p>
  </div>
  <button v-on:click="createUserNote()">create note</button>
</template>

<style>
</style>