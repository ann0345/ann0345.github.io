<template>
  <div id="app">
    <nav>
      <router-link to="/">Intro</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/dataTable">DataTable</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss" scope>
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
  color: $link-color;
}
</style>
