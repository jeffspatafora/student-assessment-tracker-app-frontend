<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Add a student",
      students: [],
      newStudentParams: {}
    };
  },
  created: function () {
    axios.get('/students').then(response => {
      this.students = response.data;
    })
  },
  methods: {
    studentCreate: function () {
      axios.post('/students', this.newStudentParams).then(response => {
        console.log(response, response.data);
        this.$router.push("/studentcreate");
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Name: <input type="text" v-model="newStudentParams.name" /></p>
    <p>Email: <input type="text" v-model="newStudentParams.email" /></p>
  </div>
  <button v-on:click="studentCreate()">add student</button>
  <h2>Students:</h2>
  <h4 v-for="student in students" v-bind:key="student.id">{{ student.name }}</h4>

</template>

<style>
</style>