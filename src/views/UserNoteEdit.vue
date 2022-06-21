<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Edit Note",
      note: {}
    };
  },
  created: function () {
    axios.get("/user_notes/" + this.$route.params.id + ".json").then(response => {
      console.log("user note show", response.data);
      this.note = response.data;
    })
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
  <p>{{ note.note }}</p>
</template>

<style>
</style>