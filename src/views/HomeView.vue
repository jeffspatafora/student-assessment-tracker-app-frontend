<script>
export default {
  data: function () {
    return {
      message: "Welcome to student assessment!",
    };
  },
  created: function () { },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
body {
  background-color: teal;
}

h1 {
  color: limegreen;
}

p {
  color: gold;
}
</style>