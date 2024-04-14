<template>
  <div>
    <div class="inputTitle">
      {{ title }}
    </div>
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
      :rows="rows"
      :no-resize="noResize"
      :counter="counter"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
export default {
  name: "TextareaVuetify",
  props: {
    value: [String, Number],
    title: String,
    label: String,
    placeholder: String,
    outlined: Boolean,
    dense: Boolean,
    counter: Boolean,
    disabled: Boolean,
    error: Boolean,
    errorMessages: [String, Array],
    rules: [String, Array],
    rows: {
      type: Number,
      default: 3,
    },
    noResize: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: 50,
    },
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
