<template>
  <v-card>
    <v-card-title>
      <div class="headline">{{ list.title }}</div>
    </v-card-title>
    <v-container>
      <v-layout
        column
      >
        <v-flex
          v-for="card in cards"
          :key="card.id"
        >
          <card :card="card" />
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-text-field label="New task" />
    </v-card-actions>
  </v-card>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  computed: {
    cards() {
      return this.$store.getters['cards/cardsByList'](this.list.id)
    }
  }
}
</script>
