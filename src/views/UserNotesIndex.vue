<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "notes",
      userNotes: [],
      students: [],
      projects: [],
      student: {},
      project: {}
    };
  },
  created: function () {
    this.indexProjects();
    this.indexStudents();
  },
  methods: {
    indexUserNotes: function () {
      console.log("in user notes");
      axios.get(`/user_notes.json?student_id=${this.student.id}&project_id=${this.project.id}`).then(response => {
        console.log(response, response.data);
        this.userNotes = response.data;
      });
    },
    indexProjects: function () {
      console.log("in projects");
      axios.get("/projects").then(response => {
        console.log(response.data);
        this.projects = response.data;
      })
    },
    indexStudents: function () {
      console.log("in students");
      axios.get("/students").then(response => {
        console.log(response.data);
        this.students = response.data;
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>

  <p>
    <label>Choose a student: </label>
    <select v-model="student.id">
      <option v-for="student in students" v-bind:key="student.id" v-bind:value="student.id">{{ student.name }}</option>
    </select>
  </p>

  <p>
    <label>Choose a concept: </label>
    <select v-model="project.id">
      <option v-for="project in projects" v-bind:key="project.id" v-bind:value="project.id">{{ project.title }}</option>
    </select>
  </p>

  <button v-on:click="indexUserNotes()">See Notes</button>

  <div v-for="note in userNotes" v-bind:key="note.id">
    <p>{{ note.readable_created_at }} - {{ note.note }}</p>
  </div>
</template>

<style>
</style>