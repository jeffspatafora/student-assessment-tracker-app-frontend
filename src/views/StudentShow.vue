<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Student show",
      student: {}
    };
  },
  created: function () {
    axios.get(`students/${this.$route.params.id}`).then(response => {
      console.log('student show', response.data)
      this.student = response.data;
    })
  },
  methods: {},
};
</script>

<template>
  <div class="student-show">
    <h1>{{ student }}</h1>
  </div>
</template>

<style>
</style>