<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "add a new note",
      newNoteParams: {},
      students: []
    };
  },
  created: function () {
    axios.get('/students').then(response => {
      console.log(response.data);
      this.students = response.data;
    })
  },
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
    <p><label>Choose a student: </label>
      <select v-model="newNoteParams.student_name">
        <option v-for="student in students" v-bind:key="student.id">{{ student.name }}</option>
      </select>
    </p>
    <p>project title: <input type="text" v-model="newNoteParams.project_title" /></p>
    <p>note: <input type="text" v-model="newNoteParams.note" /></p>
  </div>
  <button v-on:click="createUserNote()">create note</button>

</template>

<style>
</style>