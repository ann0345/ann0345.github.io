<template>
  <div>
    <TodoInput @content="getContent" />
    <ul>
      <li
        v-for="item in list"
        :key="item.text"
      >
        <input type="checkbox" v-model="item.done">
          {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import TodoInput from "./TodoInput";

export default {
  components: { TodoInput },
  data: () => ({
    list: [],
  }),
  computed:{
  },
  methods: {
    getContent(text){
      const item = {
        text,
        done : false
      }
      this.list.push(item);
    },
  },
};
</script>

<style scoped>
</style>