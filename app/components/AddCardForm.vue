<template>
  <v-card color="teal lighten-5">
    <v-card-text>
      <v-text-field
        v-model="body"
        label="Add a task..."
        @keyup.enter="submit()"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      body: ''
    }
  },
  methods: {
    submit() {
      const payload = { body: this.body }
      this.$emit('submit', payload)
      this.body = ''
    }
  }
}
</script>
