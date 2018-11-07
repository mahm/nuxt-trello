<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout
      row
    >
      <v-flex
        v-for="list in lists"
        :key="list.id"
        xs4
      >
        <list
          :list="list"
        />
      </v-flex>
      <v-flex xs4>
        <NewListForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import List from '~/components/List'
import NewListForm from '~/components/NewListForm'

export default {
  components: {
    List,
    NewListForm
  },
  computed: {
    ...mapState({ lists: state => state.lists.data })
  }
}
</script>
