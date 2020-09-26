<template>
  <div id="app">
    <Pic />
    <Todo />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Pic from './components/Pic.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
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
