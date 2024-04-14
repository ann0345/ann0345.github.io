<template>
  <div class="toTop">
    <v-fab-transition>
      <v-btn
        v-show="isShow"
        fab
        small
        color="primary"
        @click="scrollToTop"
        class="toTopBtn"
      >
        <v-icon color="black">mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isShow = window.pageYOffset > 100;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.toTop {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 999;
}
.toTopBtn {
  background-color: var(--link-color) !important;
}
</style>
