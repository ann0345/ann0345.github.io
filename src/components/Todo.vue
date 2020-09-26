<template>
  <div>
    <input v-model="text" />
    <button @click="add" :disabled="!text">add</button>
    <button @click="reset">reset list</button>
    <ul>
      <li v-for="(item, index) in list" :key="item" @click="remove(index)">
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
    remove(index){
      // const idx = this.list.indexOf(item);
      this.list.splice(index, 1);
    }
  },
};
</script>

<style scoped>
</style>