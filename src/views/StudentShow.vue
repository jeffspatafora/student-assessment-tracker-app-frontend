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
      axios.get('/user_notes.json?student_id=1&project_id=2').then(response => {
        console.log(response.data);
      });
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
</template>


<style>
</style>