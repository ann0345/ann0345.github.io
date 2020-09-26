<template>
  <div id="app">
    <CityAsync />
    <hr>
    <City />
    <hr>
    <Pic />
    <hr>
    <Todo />
    <hr>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Pic from './components/Pic.vue'
import Todo from './components/Todo.vue'
import City from './components/City.vue'
import CityAsync from './components/CityAsync.vue'

export default {
  name: 'App',
  components: {
    CityAsync,
    City,
    Pic,
    Todo
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
