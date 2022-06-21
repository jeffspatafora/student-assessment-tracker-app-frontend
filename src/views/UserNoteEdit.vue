<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Edit Note",
      note: {},
      students: []
    };
  },
  created: function () {
    axios.get("/user_notes/" + this.$route.params.id + ".json").then(response => {
      console.log("user note show", response.data);
      this.note = response.data;
    });
    axios.get("/students").then(response => {
      console.log(response.data);
    })
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
  <!-- <router-link v-bind:to="`/students/${note.student_id}`">Back to {{ student.name }}'s page</router-link> -->
  <p>{{ note.note }}</p>
</template>

<style>
</style>