<template>
  <div>
    <h1>Card</h1>
    <h2>{{ title }}</h2>
    <button @click="doSend">doSend</button>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    doSend(){
      console.log("btn click");
      this.$emit("cardClick");
    }
  }
}
</script>

<style>

</style>