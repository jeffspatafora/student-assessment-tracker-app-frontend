<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Add Data",
      newNoteParams: {},
      students: [],
      projects: [],
      image: "",
      description: "",
      studentName: "",
      projectTitle: ""
    };
  },
  created: function () {
    axios.get('/students').then(response => {
      this.students = response.data;
    }),
      axios.get('/projects').then(response => {
        console.log(response.data);
        this.projects = response.data;
      })
  },
  methods: {
    createUserNote: function () {
      console.log('in create');
      axios.post('/user_notes', this.newNoteParams).then(response => {
        console.log(response, response.data);
        this.$router.push('/usernotescreate');
        this.newNoteParams = {};
      });
    },
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    submit: function () {
      var formData = new FormData();
      formData.append("student_name", this.studentName);
      formData.append("project_title", this.projectTitle);
      formData.append("description", this.description);
      formData.append("image", this.image);

      axios.post("/student_works", formData).then(response => {
        console.log(response.data);
        this.$refs.fileInput.value = "";
        this.$router.push('/usernotescreate');
        this.description = "";
        this.studentName = "";
        this.projectTitle = "";
      });
    },
  },
};
</script>

<template>
  <div class="user-notes-create">
    <h1>{{ message }}</h1>
  </div>
  <p>
    <label>Choose a student: </label>
    <select v-model="newNoteParams.student_name">
      <option v-for="student in students" v-bind:key="student.id">{{ student.name }}</option>
    </select>
  </p>
  <p>
    <label>Choose a concept: </label>
    <select v-model="newNoteParams.project_title">
      <option v-for="project in projects" v-bind:key="project.id">{{ project.title }}</option>
    </select>
  </p>
  <p>Note: <input type="text" v-model="newNoteParams.note" /></p>
  <button v-on:click="createUserNote()" class="btn btn-warning btn-sm">Create Note</button>
  <hr>
  <div>
    <form v-on:submit.prevent="submit()">
      <p>
        <label>Choose a student: </label>
        <select v-model="studentName">
          <option v-for="student in students" v-bind:key="student.id">{{ student.name }}</option>
        </select>
      </p>
      <p>
        <label>Choose a concept: </label>
        <select v-model="projectTitle">
          <option v-for="project in projects" v-bind:key="project.id">{{ project.title }}</option>
        </select>
      </p>
      <p>
        Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </p>
      <p>
        Description: <input type="text" v-model="description">
      </p>
      <input type="submit" value="Upload Student Work Image" class="btn btn-warning btn-sm">
    </form>
  </div>
</template>

<style>
</style>