<template>
  <div>
    <input v-model="text" />
    <span :class="{ red : invalid }">{{ inputLength }}</span>
    <br/>
    <button @click="add" :disabled="invalid">add</button>
    <button @click="reset">reset list</button>
    <ul>
      <li
        v-for="item in list"
        :key="item.text"
        :class="{ deleted: item.done }"
      >
        <input
         type="checkbox"
         v-model="item.done"
        />
        {{ item.text }}
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
  computed:{
    inputLength(){
      return this.text.length;
    },
    invalid(){
      return this.inputLength < 0 || this.inputLength > 10;
    }
  },
  methods: {
    add() {
      if(!this.text) return;
      if(!this.invalid) return;
      const item ={
        text: this.text,
        done: false,
      };
        this.list.push(item);
        this.text = "";
    },
    reset() {
      this.text = "";
      this.list = [];
    },
  },
};
</script>

<style scoped>
.deleted {
  color:grey;
  text-decoration: line-through;
}
.red{
  color:red;
}
</style>