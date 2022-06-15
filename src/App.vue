<template>
  <nav>
    <router-link to="/">home</router-link> |
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/usernotesindex">notes</router-link> |
    <router-link to="/usernotescreate">create a note</router-link> |
    <router-link to="/students">students</router-link> |
    <router-link to="/studentcreate">add student</router-link> |
    <router-link to="/projectcreate">add concept</router-link> |
    <router-link to="/trivia">question of the day</router-link> |
    <router-link to="/signup">signup</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/logout">logout</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
