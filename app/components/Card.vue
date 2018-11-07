<template>
  <v-card>
    <v-card-text>{{ card.body }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>
