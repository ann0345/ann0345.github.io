<template>
  <v-container>
    <span class="talign-start">
      <Chip
        v-if="subTitle"
        :title="subTitle"
        :icon="titleIcon"
        :color="'#1976d2'"
        outlined
        rightIcon
      ></Chip>
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
import Chip from "../atoms/Chip";
export default {
  name: "UnorderedListComponent",
  components: {
    Chip,
  },
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
