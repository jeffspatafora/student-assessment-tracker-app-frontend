<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "add a student",
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
  <div class="students-create">
    <h1>{{ message }}</h1>
  </div>
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



<!-- <script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "add a student",
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
        this.$router.push("/usernotesindex");
      })
    }
  },
};
</script>

<template>
  <div class="students-create">
    <h1>{{ message }}</h1>
    <p>Name: <input type="text" v-model="newStudentParams.name" /></p>
    <p>Email: <input type="text" v-model="newStudentParams.email" /></p>
  </div>
  <button v-on:click="studentCreate()">add student</button>
</template>

<style>
</style> -->
