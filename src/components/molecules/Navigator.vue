<template>
  <v-container>
    <nav>
      <router-link to="/">Intro</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/dataTable">DataTable</router-link>
    </nav>
    <!-- FIXME switch & theme -->
    <SwitchVuetify
      v-model="isDark"
      label="Dark Mode"
      inset
      hideDetails
    ></SwitchVuetify>
  </v-container>
</template>

<script>
export default {
  name: "NavigatorComponent",
  components: {
  },
  props: {
  },
  data() {
    return {};
  },
  created() {},
  computed:{
    isDark: {
      get() {
        return this.$vuetify.theme.dark;
      },
      set() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        let targetTheme = this.$vuetify.theme.dark ? "dark" : "light";
        document.documentElement.setAttribute("targetTheme", targetTheme)
      }
    }
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
