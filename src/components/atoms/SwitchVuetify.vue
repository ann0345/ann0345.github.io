<template>
  <div>
    <v-switch
      :value="value"
      :input-value="value"
      :color="color"
      :label="label"
      :false-value="falseValue"
      :true-value="trueValue"
      :loading="loading"
      :disabled="disabled"
      :inset="inset"
      :hide-details="hideDetails"
      @change="onChange"
    >
    </v-switch>
  </div>
</template>

<script>
export default {
  name: "SwitchVuetify",
  props: {
    label: {
      type: String,
    },
    color: {
      type: String,
    },
    falseValue: {
      type: [Boolean, String],
    },
    trueValue: {
      type: [Boolean, String],
    },
    value: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inset: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
    };
  },
  created() {},
  computed: {
  },
  methods: {
    onChange(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
