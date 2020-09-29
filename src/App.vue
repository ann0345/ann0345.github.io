<template>
  <div id="app">
    <Card title="test1" @cardClick="cardClick" />
    <Card title="test2" />
    <hr>
    <CityAsync />
    <hr>
    <City />
    <hr>
    <Pic />
    <hr>
    <Todo />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Pic from './components/Pic.vue'
import Card from './components/Card.vue'
import Todo from './components/Todo.vue'
import City from './components/City.vue'
import CityAsync from './components/CityAsync.vue'

export default {
  name: 'App',
  components: {
    Card,
    CityAsync,
    City,
    Pic,
    Todo
  },
  data(){
    return{

    }
  },
  methods: {
    cardClick(){
      console.log('App get click');
    }
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
