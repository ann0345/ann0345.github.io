<template>
  <v-autocomplete
    v-model="localValue"
    :items="items"
    :label="label"
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
  name: "AutocompleteVuetify",
  props: {
    value: [String, Number],
    label: String,
    items: Array,
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