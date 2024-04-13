<template>
  <v-textarea
    v-model="localValue"
    :label="label"
    :placeholder="placeholder"
    :dense="dense"
    :outlined="outlined"
    :error="error"
    :rules="rules"
    :disabled="disabled"
    :error-messages="errorMessages"
  />
</template>

<script>
export default {
  name: "TextareaVuetify",
  props: {
    value: [String, Number],
    label: String,
    placeholder: String,
    outlined: Boolean,
    dense: Boolean,
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