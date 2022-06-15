<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Student show",
      // studentName: '',
      userNotes: [],
      students: [],
      projects: [],
      project: {},
      student: {}
    };
  },
  created: function () {
    axios.get(`students/${this.$route.params.id}.json`).then(response => {
      console.log('student show', response.data)
      // this.studentName = response.data[0]['name'];
      this.student = response.data;
    });
    this.indexProjects();
  },
  methods: {
    indexUserNotes: function () {
      console.log("in user notes");
      axios.get(`/user_notes.json?student_id=${this.student.id}&project_id=${this.project.id}`).then(response => {
        console.log(response.data);
        this.userNotes = response.data;
      });
    },
    indexProjects: function () {
      console.log('in projects');
      axios.get('/projects').then(response => {
        console.log(response.data);
        this.projects = response.data;
      });
    }
  },
};
</script>

<template>
  <h4>
    <a href="/students">Back to students list</a>
  </h4>

  <div class="student-show">
    <h1>{{ student.name }}</h1>
    <h3>{{ student.email }}</h3>
  </div>

  <p>
    <label>Choose a concept: </label>
    <select v-model="project.id">
      <option v-for="project in projects" v-bind:key="project.id" v-bind:value="project.id">{{ project.title }}</option>
    </select>
  </p>

  <button v-on:click="indexUserNotes()">see data</button>

  <div v-for="note in userNotes" v-bind:key="note.id">
    <p>{{ note.readable_created_at }} - {{ note.note }}</p>
    <hr>
  </div>
</template>


<style>
</style>