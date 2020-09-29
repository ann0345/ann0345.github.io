<template>
  <v-container>
    <TodoInput @content="getContent" />
    <v-list>
      <v-list-item v-for="item in list" :key="item.text">
        <v-list-item-action>
          <v-checkbox v-model="item.done"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <input type="checkbox" v-model="item.done">
        </v-list-item-content>
        <v-list-item-title :class="{'accent--text' : item.done }">
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
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