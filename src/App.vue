<template>
  <div id="app">
    <Navigator />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <BackToTop />
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
}
</script>
<style lang="scss" scope>
</style>
