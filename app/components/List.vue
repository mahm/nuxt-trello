<template>
  <v-card>
    <v-card-title>
      <div class="headline">{{ list.title }}</div>
    </v-card-title>
    <v-container>
      <v-layout
        column
      >
        <draggable
          v-model="cards"
          :options="{group: 'cards'}"
        >
          <v-flex
            v-for="card in cards"
            :key="card.id"
          >
            <card :card="card" />
          </v-flex>
        </draggable>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-text-field
        v-model="cardBody"
        label="Add a task..."
        @keyup.enter="addCard()"
      />
    </v-card-actions>
    <v-card-actions>
      <v-spacer />
      <v-btn
        icon
        @click="removeList()"
      >
        <v-icon>clear</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import draggable from 'vuedraggable'

import Card from '~/components/Card'

export default {
  components: {
    Card,
    draggable
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      cardBody: ''
    }
  },
  computed: {
    cards: {
      get() {
        return this.$store.getters['cards/cardsByList'](this.list.id)
      },
      set(newCards) {
        const payload = {
          cards: newCards,
          listId: this.list.id
        }
        this.$store.dispatch('cards/set', payload)
      }
    }
  },
  methods: {
    addCard() {
      const payload = {
        body: this.cardBody,
        listId: this.list.id
      }
      this.$store.dispatch('cards/add', payload)
      this.cardBody = ''
    },
    removeList() {
      this.$store.dispatch('lists/remove', this.list.id)
    }
  }
}
</script>
