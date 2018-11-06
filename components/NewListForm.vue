<template>
  <v-card color="teal lighten-5">
    <v-card-title>
      <div class="headline">New List</div>
    </v-card-title>
    <v-card-actions>
      <v-text-field
        v-model="title"
        label="Add a list..."
        @keyup.enter="addList()"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
      title: ''
    }
  },
  methods: {
    addList() {
      this.$store.dispatch('lists/addList', this.title)
      this.title = ''
    }
  }
}
</script>
