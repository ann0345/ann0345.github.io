<template>
  <v-container>
    <span class="textAlign-start">
      <ChipVuetify
        v-if="subTitle"
        :title="subTitle"
        :icon="titleIcon"
        :variant="'elevated'"
        rightIcon
      ></ChipVuetify>
    </span>
    <ul>
      <li
        v-for="(item, index) in value"
        :key="item.value"
        class="listStyle"
        :class="{
          'padding-y': havePaddingY,
        }"
      >
        <span class="skill">{{ item }}</span>
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "UnorderedList",
  props: {
    titleIcon: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    value: {
      type: Array,
    },
    havePaddingY: {
      type: Boolean,
      default: true,
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
.skill {
  font-size: 18px;
}
.padding-y {
  padding: 6px 0px;
}
.listStyle {
  text-align: start;
  word-wrap: break-word;
}
</style>
