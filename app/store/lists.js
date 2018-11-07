import uuidv4 from 'uuid/v4'

export const state = () => ({
  data: [
    { id: 1, title: 'INBOX' },
    { id: 2, title: 'IN PROGRESS' },
    { id: 3, title: 'DONE' }
  ]
})

export const mutations = {
  add(state, payload) {
    state.data.push(payload)
  },
  remove(state, payload) {
    state.data = state.data.filter(list => list.id !== payload.id)
  }
}

export const actions = {
  add({ commit }, title) {
    const id = uuidv4()
    const payload = { id, title }
    commit('add', payload)
  },
  remove({ commit }, listId) {
    commit('remove', { id: listId })
  }
}
