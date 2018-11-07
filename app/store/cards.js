import uuidv4 from 'uuid/v4'

export const state = () => ({
  data: [
    { id: 1, body: 'sample_1_1', listId: 1 },
    { id: 2, body: 'sample_1_2', listId: 1 },
    { id: 3, body: 'sample_1_3', listId: 1 },
    { id: 4, body: 'sample_2_1', listId: 2 },
    { id: 5, body: 'sample_2_2', listId: 2 },
    { id: 6, body: 'sample_3_1', listId: 3 }
  ]
})

export const mutations = {
  add(state, payload) {
    state.data.push(payload)
  },
  set(state, { cards, listId }) {
    state.data = state.data.filter(card => card.listId !== listId)
    const newCards = cards.map(card => {
      return {
        ...card,
        listId: listId
      }
    })
    state.data = state.data.concat(newCards)
  }
}

export const actions = {
  add({ commit }, { body, listId }) {
    const id = uuidv4()
    const payload = { id, body, listId }
    commit('add', payload)
  },
  set({ commit }, payload) {
    commit('set', payload)
  }
}

export const getters = {
  cardsByList: state => listId => {
    return state.data.filter(card => card.listId === listId)
  }
}
