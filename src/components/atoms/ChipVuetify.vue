<template>
  <div class="d-flex">
    <v-chip
      class="titleStyle"
      :color="color"
      :textColor="textColor"
      :filter="filter"
      :label="label"
      :link="link"
      :outlined="outlined"
      :elevated="elevated"
      :tonal="tonal"
      :pill="pill"
      :close="close"
      :size="size"
    >
      <span v-if="icon && !rightIcon">
        <v-icon left>{{ icon }}</v-icon>
        {{ title }}
      </span>
      <span v-else-if="icon">
        {{ title }}
        <v-icon right>{{ icon }}</v-icon>
      </span>
      <span v-else>
        {{ title }}
      </span>
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "ChipVuetify",
  props: {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    rightIcon: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    textColor: {
      type: String,
    },
    filter: {
      type: Boolean,
      default: false,
    },
    label: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
    },
    elevated: {
      type: String,
    },
    tonal: {
      type: String,
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
.titleStyle {
  font-size: 22px !important;
  height: 40px !important;
  background-color: var(--td-color) !important;
  border-color: var(--th-color) !important;
  span {
    padding: 2px;
  }
}
</style>
