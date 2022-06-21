<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Dr. Professor</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li> -->
          <button type="button" class="btn btn-success btn-sm"><a class="nav-link" href="/students">Students
              List</a></button>
          <button type="button" class="btn btn-info btn-sm"><a class="nav-link" href="/usernotescreate">Add
              Data</a></button>
          <button type="button" class="btn btn-success btn-sm"><a class="nav-link" href="/studentcreate">Create a
              Student</a></button>
          <button type="button" class="btn btn-info btn-sm"><a class="nav-link" href="/projectcreate">Add a
              Concept</a></button>
          <button type="button" class="btn btn-success btn-sm"><a class="nav-link" href="/trivia">Question of the
              Day</a></button>
          <!-- <li class="nav-item">
            <a class="nav-link" href="/students">Students List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/usernotescreate">Add Data</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/studentcreate">Create a Student</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projectcreate">Add a Concept</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/trivia">Question of the Day</a>
          </li> -->
          <button type="button" class="btn btn-info btn-sm">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Authentication
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/signup">Signup</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="/login">Login</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </button>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Authentication
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/signup">Signup</a></li>
              <li><a class="dropdown-item" href="/login">Login</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li> -->
        </ul>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>

  <nav>
    <!-- <router-link to="/">home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/usernotesindex">notes</router-link> |
    <router-link to="/students">students</router-link> |
    <router-link to="/usernotescreate">add data</router-link> |
    <router-link to="/studentcreate">add student</router-link> |
    <router-link to="/projectcreate">add concept</router-link> |
    <router-link to="/trivia">question of the day</router-link> |
    <router-link to="/signup">signup</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/logout">logout</router-link> | -->
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

a {
  color: darkorange
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

hr {
  color: chartreuse;
}
</style>
