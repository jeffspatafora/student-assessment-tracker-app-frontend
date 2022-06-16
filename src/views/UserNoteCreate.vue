<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "add data",
      newNoteParams: {},
      students: [],
      projects: []
    };
  },
  created: function () {
    axios.get('/students').then(response => {
      this.students = response.data;
    }),
      axios.get('/projects').then(response => {
        console.log(response.data);
        this.projects = response.data;
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
  <div class="user-notes-create">
    <h1>{{ message }}</h1>
  </div>
  <p>
    <label>Choose a student: </label>
    <select v-model="newNoteParams.student_name">
      <option v-for="student in students" v-bind:key="student.id">{{ student.name }}</option>
    </select>
  </p>
  <p>
    <label>Choose a concept: </label>
    <select v-model="newNoteParams.project_title">
      <option v-for="project in projects" v-bind:key="project.id">{{ project.title }}</option>
    </select>
  </p>
  <p>Note: <input type="text" v-model="newNoteParams.note" /></p>
  <button v-on:click="createUserNote()">Create Note</button>
  <hr>
  <div>
    <form v-on:submit.prevent="submit()">
      <p>
        Description: <input type="text" v-model="description">
      </p>
      <p>
        Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </p>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<style>
</style>