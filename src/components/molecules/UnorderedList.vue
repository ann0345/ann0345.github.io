<template>
  <v-container>
    <span class="subTitle">{{ subTitle }}</span>
    <ul>
      <li v-for="(item, index) in value" :key="item" class="talign-start">
        <span class="name">{{ item.name }}</span>
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "UnorderedListComponent",
  props: {
    subTitle: {
      type: String,
    },
    value: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.subTitle {
  text-align: start !important;
  font-size: 24px;
}
.name {
  font-size: 20px;
}
</style>
