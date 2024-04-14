<template>
  <v-container>
    <nav>
      <router-link to="/">Intro</router-link> |
      <router-link to="/playground">Playground</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/dataTable">DataTable</router-link>
    </nav>
  </v-container>
</template>

<script>
export default {
  name: "Navigator",
  components: {
  },
  props: {
  },
  data() {
    return {};
  },
  created() {},
  computed:{
  },
  methods: {},
};
</script>

<style lang="scss" scope>
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: var(--mainText-color);
}
nav a.router-link-exact-active {
  color: var(--link-color);
}
</style>
