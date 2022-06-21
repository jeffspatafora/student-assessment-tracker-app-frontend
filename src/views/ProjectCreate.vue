<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Add a Concept",
      projects: [],
      newProjectParams: {}
    };
  },
  created: function () {
    axios.get('/projects').then(response => {
      this.projects = response.data;
    })
  },
  methods: {
    projectCreate: function () {
      console.log('create project');
      axios.post('/projects', this.newProjectParams).then(response => {
        console.log(response, response.data);
        this.$router.push('/projectcreate');
        this.newProjectParams = {};
      })
    }
  },
};
</script>

<template>
  <div class="project-create">
    <h1>{{ message }}</h1>
  </div>
  <p>Title: <input type="text" v-model="newProjectParams.title" /></p>
  <p>Section: <input type="text" v-model="newProjectParams.section" /></p>
  <p>Section Number: <input type="text" v-model="newProjectParams.section_number" /></p>
  <button v-on:click="projectCreate()" class="btn btn-warning btn-sm">Add Concept</button>
</template>

<style>
</style>