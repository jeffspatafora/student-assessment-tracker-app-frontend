<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "add a project",
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
        this.$router.push('/projects');
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
  <p>Title: <input type="text" v-model="newProjectParams.title" /></p>
  <p>Section: <input type="text" v-model="newProjectParams.section" /></p>
  <p>Section Number: <input type="text" v-model="newProjectParams.section_number" /></p>
  <button v-on:click="projectCreate()">add project</button>
  <h2>Projects: </h2>
  <h4 v-for="project in projects" v-bind:key="project.id">{{ project.title }}</h4>
</template>

<style>
</style>