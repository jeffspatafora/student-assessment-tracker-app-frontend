<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All notes",
      userNotes: [],
      students: [],
      projects: []
    };
  },
  created: function () {
    this.indexUserNotes();
    this.indexProjects();
    this.indexStudents();
  },
  methods: {
    indexUserNotes: function () {
      console.log("in user notes");
      axios.get("/user_notes.json").then(response => {
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
    <label>Choose a project: </label>
    <select v-model="projects.title">
      <option v-for="project in projects" v-bind:key="project.id">{{ project.title }}</option>
    </select>
  </p>
  <p>
    <label>Choose a student: </label>
    <select v-model="students.name">
      <option v-for="student in students" v-bind:key="student.id">{{ student.name }}</option>
    </select>
  </p>

  <div v-for="note in userNotes" v-bind:key="note.id">
    <h4>{{ note.student }}</h4>
    <h5>{{ note.user }}</h5>
    <h5>{{ note.created_at }}</h5>
    <h6>{{ note.project }}</h6>
    <p>{{ note.note }}</p>
    <hr />
  </div>

</template>

<style>
</style>