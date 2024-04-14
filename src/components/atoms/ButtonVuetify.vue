<template>
  <v-btn
    :color="color"
    :outlined="outlined"
    :depressed="depressed"
    :block="block"
    :disabled="disabled"
    :loading="loading"
    @click="$emit('click')"
  >
    <v-icon v-if="icon" left>{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "ButtonVuetify",
  props: {
    text: String,
    color: String,
    outlined: Boolean,
    depressed: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean,
    icon: String,
  },
}
</script>