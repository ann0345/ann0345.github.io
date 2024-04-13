<template>
  <div>
    <v-chip
      class="titleStyle"
      :color="color"
      :textColor="textColor"
      :filter="filter"
      :label="label"
      :link="link"
      :outlined="outlined"
      :pill="pill"
      :close="close"
      :small="small"
      :large="large"
      :variant="variant"
    >
      <span v-if="!rightIcon">
        <v-icon left>{{ icon }}</v-icon>
        {{ title }}
      </span>
      <span v-else>
        {{ title }}
        <v-icon right>{{ icon }}</v-icon>
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
      // default: "#1976d2",
    },
    textColor: {
      type: String,
      // default: "black",
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
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    variant: {
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
