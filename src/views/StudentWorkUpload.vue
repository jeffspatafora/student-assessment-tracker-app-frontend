<script>
export default {
  data: function () {
    return {
      message: "upload student work",
    };
  },
  created: function () { },
  methods: {},
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