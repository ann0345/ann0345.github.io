<template>
  <v-radio-group
    v-model="localValue"
    :row="row"
    :label="label"
    :error="error"
    :rules="rules"
    :disabled="disabled"
    :error-messages="errorMessages"
  >
    <v-radio
      v-for="opt in options"
      :key="opt"
      :label="opt"
      :value="opt"
    />
  </v-radio-group>
</template>

<script>
export default {
  name: "RadioGroupVuetify",
  props: {
    value: [String, Number],
    label: String,
    options: Array,
    row: Boolean,
    disabled: Boolean,
    error: Boolean,
    errorMessages: [String, Array],
    rules: [String, Array],
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
}
</script>