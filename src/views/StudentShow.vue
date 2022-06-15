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
  },
  methods: {
    indexUserNotes: function () {
      console.log("in user notes");
      axios.get(`/user_notes.json?student_id=${this.student.id}&project_id=15`).then(response => {
        console.log(response.data);
        this.userNotes = response.data;
      });
    },
    indexProjects: function () {
      console.log('in projects');
    }
  },
};
</script>

<template>
  <h2>
    <a href="/students">Back to students list</a>
  </h2>

  <div class="student-show">
    <h1>{{ student.name }} - {{ student.email }}</h1>
  </div>

  <button v-on:click="indexUserNotes()">index user notes</button>

  <button v-on:click="indexProjects()">index concepts</button>

  <div v-for="note in userNotes" v-bind:key="note.id">
    <p>{{ note.readable_created_at }} - {{ note.note }}</p>
  </div>
</template>


<style>
</style>