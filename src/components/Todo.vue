<template>
  <div>
    <input v-model="text" />
    <button @click="add" :disabled="!text">add</button>
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
    <pre>
      {{ JSON.stringify(list, null, 2) }}
    </pre>
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
      if(!this.text) return;
      const item ={
        text: this.text,
        done: false
      };
        this.list.push(item);
        this.text = "";
    },
    reset() {
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
</style>