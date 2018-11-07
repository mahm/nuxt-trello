<template>
  <v-card>
    <v-card-title>
      <div class="headline">{{ list.title }}</div>
    </v-card-title>
    <v-container>
      <v-layout column>
        <draggable
          v-model="cards"
          :options="draggableOptions"
          style="min-height: 10px"
        >
          <v-flex
            v-for="card in cards"
            :key="card.id"
            class="draggable-item"
          >
            <card :card="card" />
          </v-flex>
        </draggable>
      </v-layout>
      <v-layout>
        <v-flex>
          <add-card-form @submit="addCard($event)" />
        </v-flex>
      </v-layout>
    </v-container>
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
import AddCardForm from '~/components/AddCardForm'

export default {
  components: {
    draggable,
    Card,
    AddCardForm
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
    },
    draggableOptions() {
      return {
        group: {
          name: 'cards'
        },
        draggable: '.draggable-item',
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    addCard(card) {
      const payload = {
        body: card.body,
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

<style scoped>
.draggable-item {
  cursor: pointer;
}
.ghost {
  opacity: 0.4;
}
</style>
