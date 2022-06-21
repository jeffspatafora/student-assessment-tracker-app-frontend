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
      student: {},
      studentWorks: {},
      studentWorksImageURLs: [],
      currentNote: {}
    };
  },
  created: function () {
    axios.get(`students/${this.$route.params.id}.json`).then(response => {
      console.log('student show', response.data)
      // this.studentName = response.data[0]['name'];
      this.student = response.data;
    });
    this.indexProjects();
  },
  methods: {
    indexUserNotes: function () {
      console.log("in user notes");
      axios.get(`/user_notes.json?student_id=${this.student.id}&project_id=${this.project.id}`).then(response => {
        console.log(response.data);
        this.userNotes = response.data;
      });
    },
    indexProjects: function () {
      console.log('in projects');
      axios.get('/projects').then(response => {
        console.log(response.data);
        this.projects = response.data;
      });
    },
    indexStudentWorks: function () {
      console.log('student works index');
      axios.get(`/student_works?student_id=${this.student.id}&project_id=${this.project.id}`).then(response => {
        console.log(response.data);
        this.studentWorks = response.data
      });
    },
    showUserNote: function (note) {
      this.currentNote = note;
      document.querySelector("#note-details").showModal();
    }
  },
};
</script>

<template>
  <h4>
    <a href="/students">Back to students list</a>
  </h4>

  <div class="student-show">
    <h1>{{ student.name }}</h1>
    <p>
      <img v-bind:src="student.cloudinary_image_url" width="240" height="240">
    </p>
    <h3>
      <a href="mailto: {{ student.email }}">{{ student.email }}</a>
    </h3>

  </div>

  <p>
    <label>Choose a concept: </label>
    <select v-model="project.id">
      <option v-for="project in projects" v-bind:key="project.id" v-bind:value="project.id">{{ project.title }}</option>
    </select>
  </p>

  <p>
    <button v-on:click="indexUserNotes()" class="btn btn-warning btn-sm">see notes data</button> | <button
      v-on:click="indexStudentWorks()" class="btn btn-warning btn-sm">see student
      work images</button>
  </p>

  <div class="container">
    <div class="row">
      <div class="col">
        <div v-for="note in userNotes" v-bind:key="note.id">
          <p>{{ note.readable_created_at }} - {{ note.note }}</p>
          <!-- <router-link v-bind:to="`/usernote/${note.id}/edit`">Edit Note</router-link> -->
          <button v-on:click="showUserNote(note)" class="btn btn-warning btn-sm">see note</button>
          <hr>
        </div>
      </div>
      <div class="col">
        <div v-for="image in studentWorks" v-bind:key="image.id">
          <a v-bind:href="image.image" target="_blank">
            <p>{{ image.description }}</p>
          </a>
          <img v-bind:src="image.image" width="100" height="100">
          <hr>
        </div>
      </div>
    </div>
    <dialog id="note-details">
      <form method="dialog">
        <h6>{{ currentNote.note }}</h6>
        <button class="btn btn-primary btn-sm">Close</button>
      </form>
    </dialog>
  </div>

  <!-- <div v-for="note in userNotes" v-bind:key="note.id">
    <p>{{ note.readable_created_at }} - {{ note.note }}</p>
    <hr>
  </div>

  <div v-for="image in studentWorks" v-bind:key="image.id">
    <a v-bind:href="image.image" target="_blank">
      <p>{{ image.description }}</p>
    </a>
    <img v-bind:src="image.image" width="100" height="100">
  </div> -->

</template>


<style>
</style>