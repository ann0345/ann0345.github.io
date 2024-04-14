<template>
  <div>
    <div class="inputTitle">
      {{ title }}
    </div>
    <v-text-field
      v-model="localValue"
      :label="label"
      :placeholder="placeholder"
      :prefix="prefix"
      :suffix="suffix"
      :dense="dense"
      :outlined="outlined"
      :error="error"
      :rules="rules"
      :counter="counter"
      :maxlength="maxlength"
      :disabled="disabled"
      :hide-details="hideDetails"
      :error-messages="errorMessages"
    />
  </div>
</template>

<script>
export default {
  name: "TextFieldVuetify",
  props: {
    value: [String, Number],
    title: String,
    label: String,
    placeholder: String,
    prefix: String,
    suffix: String,
    outlined: Boolean,
    dense: Boolean,
    disabled: Boolean,
    error: Boolean,
    counter: Boolean,
    hideDetails: Boolean,
    maxlength: {
      type: Number,
      default: 30,
    },
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
};
</script>
<style lang="scss" scoped></style>
