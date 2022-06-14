<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Student show",
      studentName: '',
      student: {}
    };
  },
  created: function () {
    axios.get(`students/${this.$route.params.id}.json`).then(response => {
      console.log('student show', response.data)
      // this.studentName = response.data[0]['name'];
      this.student = response.data;

    })
  },
  methods: {},
};
</script>

<template>
  <div class="student-show">
    <h1>{{ student.name }} - {{ student.email }}</h1>
  </div>
</template>

<style>
</style>