<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Students",
      students: []
    };
  },
  created: function () {
    this.indexStudents();
  },
  methods: {
    indexStudents: function () {
      axios.get('/students').then(response => {
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
  <div v-for="student in students" v-bind:key="student.id">
    <a href="">{{ student.name }}</a>
  </div>
</template>

<style>
</style>