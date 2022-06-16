<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "upload student work",
      image: ""
    };
  },
  created: function () { },
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    submit: function () {
      var formData = new FormData();
      formData.append("image", this.image);

      axios.post("/student_works", formData).then(response => {
        console.log(response.data);
        this.$refs.fileInput.value = "";
      });
    }
  },
};
</script>

<template>
  <div class="student-work-upload">
    <h1>{{ message }}</h1>
  </div>

  <form v-on:submit.prevent="submit()">
    <div>
      Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
    </div>
    <input type="submit" value="Submit">
  </form>

</template>

<style>
</style>