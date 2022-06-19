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
  <div class="students-index">
    <h1>{{ message }}</h1>
  </div>
  <div v-for="student in students" v-bind:key="student.id">
    <h2>
      <p>
        <img v-bind:src="student.cloudinary_image_url" width="240" height="240">
      </p>
      <router-link v-bind:to="`/students/${student.id}`">{{ student.name }}</router-link>
      <hr>
    </h2>
  </div>
</template>

<style>
</style>