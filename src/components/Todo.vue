<template>
  <div>
    <input v-model="text" />
    <button @click="add" :disabled="!text">add</button>
    <button @click="reset">reset list</button>
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "",
    list: [],
  }),
  methods: {
    add() {
      if(this.text){
        this.list.push(this.text);
        this.text = "";
      }
      else{
        alert("enter your text");
      }
    },
    reset() {
      this.list = [];
    },
  },
};
</script>

<style scoped>
</style>