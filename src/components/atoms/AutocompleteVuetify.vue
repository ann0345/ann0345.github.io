<template>
<div>
    <div class="inputTitle">
      {{ title }}
    </div>
    <v-autocomplete
      v-model="localValue"
      :items="targetOpts"
      :label="label"
      :dense="dense"
      :outlined="outlined"
      :error="error"
      :rules="rules"
      :disabled="disabled"
      :hide-details="hideDetails"
      :error-messages="errorMessages"
    />
  </div>
</template>

<script>
export default {
  name: "AutocompleteVuetify",
  props: {
    value: [String, Number],
    title: String,
    label: String,
    items: Array,
    itemText: {
      type: String,
      default: "label",
    },
    itemValue: {
      type: String,
      default: "value",
    },
    outlined: Boolean,
    dense: Boolean,
    disabled: Boolean,
    error: Boolean,
    hideDetails: Boolean,
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
    targetOpts() {
      return this.items.map(item => {
        if (typeof item === "object") {
          return {
            text: item[this.itemText],
            value: item[this.itemValue],
          };
        } else {
          return {
            text: item,
            value: item
          };
        }
      });
    }
  },
}
</script>