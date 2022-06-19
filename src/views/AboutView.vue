<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Add a Student",
      image: "",
      studentName: "",
      studentEmail: ""
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
      formData.append("name", this.studentName);
      formData.append("email", this.studentEmail);
      formData.append("image", this.image);

      axios.post("/students", formData).then(response => {
        console.log(response.data);
        this.$refs.fileInput.value = "";
        this.$router.push('/students');
      });
    },
  },
};
</script>

<template>

  <div>
    <form v-on:submit.prevent="submit()">
      <p>Name: <input type="text" v-model="studentName" /></p>
      <p>Email: <input type="text" v-model="studentEmail" /></p>
      <p>
        Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </p>
      <input type="submit" value="Create Student">
    </form>
  </div>
</template>

<style>
</style>